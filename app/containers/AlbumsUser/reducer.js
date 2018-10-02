/*
 *
 * AlbumsUser reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_INFO } from './constants';

export const initialState = fromJS({
  data: null,
});

function albumsUserReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_INFO:
      return state.set('data', action.data);
    default:
      return state;
  }
}

export default albumsUserReducer;
