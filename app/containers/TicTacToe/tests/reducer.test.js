
import { fromJS } from 'immutable';
import ticTacToeReducer from '../reducer';

describe('ticTacToeReducer', () => {
  it('returns the initial state', () => {
    expect(ticTacToeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
