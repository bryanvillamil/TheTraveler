/*
 *
 * ListUsers reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_TABLE } from './constants';

export const initialState = fromJS({
  data: null,
});

function listUsersReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_TABLE:
      return state.set('data', action.data);
    default:
      return state;
  }
}

export default listUsersReducer;
