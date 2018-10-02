import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the albumsUser state domain
 */

const selectAlbumsUserDomain = state => state.get('albumsUser', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AlbumsUser
 */

const makeSelectAlbumsUser = () =>
  createSelector(selectAlbumsUserDomain, substate => substate.toJS());

export default makeSelectAlbumsUser;
export { selectAlbumsUserDomain };
