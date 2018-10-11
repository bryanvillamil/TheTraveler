/*
 *
 * PhotosUser actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PHOTO,
  SET_PHOTO,
  TOGGLE_LOADING,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPhoto(userId) {
  return {
    type: GET_PHOTO,
    userId,
  };
}
export function setPhoto(photos) {
  return {
    type: SET_PHOTO,
    photos,
  };
}
export function toggleLoading() {
  return {
    type: TOGGLE_LOADING,
  };
}
