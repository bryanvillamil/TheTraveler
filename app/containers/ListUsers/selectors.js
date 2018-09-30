import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listUsers state domain
 */

const selectListUsersDomain = state => state.get('listUsers', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListUsers
 */

const makeSelectListUsers = () =>
  createSelector(selectListUsersDomain, substate => substate.toJS());

export default makeSelectListUsers;
export { selectListUsersDomain };
