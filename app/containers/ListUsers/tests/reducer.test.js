import { fromJS } from 'immutable';
import listUsersReducer from '../reducer';

describe('listUsersReducer', () => {
  it('returns the initial state', () => {
    expect(listUsersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
