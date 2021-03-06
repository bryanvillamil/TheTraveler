/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  REQUESTING_API,
  API_RESPONSE_SUCCESS,
  API_RESPONSE_FAILED,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  fetching: false,
  showMessage: false,
  textMessage: '',
  loading: false,
  error: null,
  currentUser: false,
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTING_API:
      return state.set('fetching', true).set('error', null);
    case API_RESPONSE_SUCCESS:
      return state.set('fetching', false).merge(action.messageObject);
    case API_RESPONSE_FAILED:
      return state.merge({
        fetching: false,
        showMessage: true,
        textMessage: action.error.message,
        error: action.error,
      });
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
