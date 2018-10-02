import { fromJS } from 'immutable';
import photosUserReducer from '../reducer';

describe('photosUserReducer', () => {
  it('returns the initial state', () => {
    expect(photosUserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
