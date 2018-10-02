import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the photosUser state domain
 */

const selectPhotosUserDomain = state => state.get('photosUser', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PhotosUser
 */

const makeSelectPhotosUser = () =>
  createSelector(selectPhotosUserDomain, substate => substate.toJS());

export default makeSelectPhotosUser;
export { selectPhotosUserDomain };
