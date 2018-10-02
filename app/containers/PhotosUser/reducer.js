/*
 *
 * PhotosUser reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_PHOTO } from './constants';

export const initialState = fromJS({
  photos: null,
});

function photosUserReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_PHOTO:
      return state.set('photos', action.photos);
    default:
      return state;
  }
}

export default photosUserReducer;
