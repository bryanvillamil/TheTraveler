import { fromJS } from 'immutable';
import albumsUserReducer from '../reducer';

describe('albumsUserReducer', () => {
  it('returns the initial state', () => {
    expect(albumsUserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
