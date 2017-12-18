/*
 *
 * TicTacToe reducer
 *
 */

import { fromJS } from 'immutable';
import { calculateWinner } from './utils';

import {
  CLICK_BOARD,
} from './constants';

const initialState = fromJS({
  history: [{
    squares: new Array(9).fill(null),
    position: null,
  }],
  ascending: true,
  stepNumber: 0,
  winner: {},
  xIsNext: true,
});

function clickBoardReducer(state, action) {
  const current = state.get('history').last();
  const player = state.get('xIsNext') ? 'X' : '0';
  let squares = current.get('squares');

  if (squares.get(action.i)) {
    return state;
  }

  squares = squares.set(action.i, player);
  const winner = fromJS(calculateWinner(squares.toJS()));

  const nextHistory = fromJS([{
    squares,
    position: action.i,
  }]);

  return state
    .set('history', state.get('history').concat(nextHistory))
    .set('winner', winner)
    .set('xIsNext', !state.get('xIsNext'))
    .set('stepNumber', state.get('stepNumber') + 1);
}

function ticTacToeReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_BOARD:
      return clickBoardReducer(state, action);
    default:
      return state;
  }
}

export default ticTacToeReducer;
