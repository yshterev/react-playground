
import { fromJS } from 'immutable';
import trelloCloneReducer from '../reducer';

describe('trelloCloneReducer', () => {
  it('returns the initial state', () => {
    expect(trelloCloneReducer(undefined, {})).toEqual(fromJS({}));
  });
});
