/*
 *
 * PhotosUser reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_PHOTO, TOGGLE_LOADING } from './constants';

export const initialState = fromJS({
  photos: null,
  isLoading: false,
});

function photosUserReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_PHOTO:
      return state.set('photos', action.photos);
    case TOGGLE_LOADING:
      return state.set('isLoading', !state.get('isLoading'));
    default:
      return state;
  }
}

export default photosUserReducer;
