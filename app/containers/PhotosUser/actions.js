/*
 *
 * PhotosUser actions
 *
 */

import { DEFAULT_ACTION, GET_PHOTO, SET_PHOTO } from './constants';

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
