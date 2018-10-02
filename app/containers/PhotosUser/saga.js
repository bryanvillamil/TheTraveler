import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  requestingApi,
  responseSuccess,
  responseFailed,
} from 'containers/App/actions';
import request from 'utils/request';
import { GET_PHOTO } from './constants';
import { setPhoto } from './actions';

export function* getInfo({ userId }) {
  const requestUrl = `/albums/${userId}/photos`;
  try {
    yield put(requestingApi());
    const response = yield call(request, requestUrl);
    if (response.error) {
      const errorObj = response.error.error || response.error;
      yield put(responseFailed(errorObj));
      return;
    }
    yield put(setPhoto(response));
    yield put(responseSuccess());
  } catch (error) {
    yield put(responseFailed(error));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(GET_PHOTO, getInfo)]);
}
