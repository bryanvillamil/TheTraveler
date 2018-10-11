/*
 *
 * ListUsers reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_TABLE, TOGGLE_LOADING } from './constants';

export const initialState = fromJS({
  data: null,
  isLoading: false,
});

function listUsersReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_TABLE:
      return state.set('data', action.data);
    case TOGGLE_LOADING:
      return state.set('isLoading', !state.get('isLoading'));
    default:
      return state;
  }
}

export default listUsersReducer;
