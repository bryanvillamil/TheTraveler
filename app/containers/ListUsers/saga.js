import { all, takeLatest, put, call } from 'redux-saga/effects';
import {
  requestingApi,
  responseSuccess,
  responseFailed,
} from 'containers/App/actions';
import request from 'utils/request';
import { GET_TABLE } from './constants';
import { setTable } from './actions';

export function* getTable() {
  const requestUrl = `/users`;
  try {
    yield put(requestingApi());
    const response = yield call(request, requestUrl);
    if (response.error) {
      const errorObj = response.error.error || response.error;
      yield put(responseFailed(errorObj));
      return;
    }
    yield put(setTable(response));
    yield put(responseSuccess());
  } catch (error) {
    yield put(responseFailed(error));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(GET_TABLE, getTable)]);
}
