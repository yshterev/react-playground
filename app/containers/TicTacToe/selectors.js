import { createSelector } from 'reselect';

/**
 * Direct selector to the ticTacToe state domain
 */
const selectTicTacToeDomain = (state) => state.get('ticTacToe');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TicTacToe
 */

const makeSelectTicTacHistory = () => createSelector(
  selectTicTacToeDomain,
  (substate) => substate.get('history').toJS()
);

const makeSelectTicTacWinner = () => createSelector(
  selectTicTacToeDomain,
  (substate) => substate.get('winner').toJS()
);

const makeSelectAscending = () => createSelector(
  selectTicTacToeDomain,
  (substate) => substate.get('ascending')
);

const makeSelectStepNumber = () => createSelector(
  selectTicTacToeDomain,
  (substate) => substate.get('stepNumber')
);

const makeSelectXIsNext = () => createSelector(
  selectTicTacToeDomain,
  (substate) => substate.get('xIsNext')
);

export {
  selectTicTacToeDomain,
  makeSelectTicTacHistory,
  makeSelectTicTacWinner,
  makeSelectAscending,
  makeSelectStepNumber,
  makeSelectXIsNext,
};
