/*
 *
 * AlbumsUser actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_INFO,
  SET_INFO,
  TOGGLE_LOADING,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getInfo(userId) {
  return {
    type: GET_INFO,
    userId,
  };
}
export function setInfo(data) {
  return {
    type: SET_INFO,
    data,
  };
}
export function toggleLoading() {
  return {
    type: TOGGLE_LOADING,
  };
}
