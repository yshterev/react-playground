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

const makeSelectTicTacToe = () => createSelector(
  selectTicTacToeDomain,
  (substate) => substate.toJS()
);

export default makeSelectTicTacToe;
export {
  selectTicTacToeDomain,
};
