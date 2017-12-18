/*
 *
 * TicTacToe reducer
 *
 */

import { fromJS } from 'immutable';
import { calculateWinner } from './utils';

import {
  CLICK_BOARD,
  CHANGE_ORDER,
  JUMP_TO,
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
  let winner = state.getIn(['winner', 'player']);

  // Prevent play if click on selected square or game over
  if (squares.get(action.i) || winner) {
    return state;
  }

  squares = squares.set(action.i, player);
  winner = fromJS(calculateWinner(squares.toJS()));

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
    case CHANGE_ORDER:
      return state.set('ascending', !state.get('ascending'));
    case JUMP_TO:
      return state
        .set('stepNumber', action.move)
        .set('winner', fromJS(calculateWinner(state.getIn(['history', action.move, 'squares']).toJS())))
        .set('xIsNext', (action.move % 2) === 0);
    default:
      return state;
  }
}

export default ticTacToeReducer;
