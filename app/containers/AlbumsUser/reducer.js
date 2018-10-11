/*
 *
 * AlbumsUser reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_INFO, TOGGLE_LOADING } from './constants';

export const initialState = fromJS({
  data: null,
  isLoading: false,
});

function albumsUserReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_INFO:
      return state.set('data', action.data);
    case TOGGLE_LOADING:
      return state.set('isLoading', !state.get('isLoading'));
    default:
      return state;
  }
}

export default albumsUserReducer;
