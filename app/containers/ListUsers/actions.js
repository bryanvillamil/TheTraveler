/*
 *
 * ListUsers actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_TABLE,
  SET_TABLE,
  TOGGLE_LOADING,
} from './constants';

export function getTable() {
  return {
    type: GET_TABLE,
  };
}

export function setTable(data) {
  return {
    type: SET_TABLE,
    data,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function toggleLoading() {
  return {
    type: TOGGLE_LOADING,
  };
}
