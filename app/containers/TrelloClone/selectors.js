import { createSelector } from 'reselect';

/**
 * Direct selector to the trelloClone state domain
 */
const selectTrelloCloneDomain = (state) => state.get('trelloClone');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TrelloClone
 */

const makeSelectTrelloClone = () => createSelector(
  selectTrelloCloneDomain,
  (substate) => substate.toJS()
);

export default makeSelectTrelloClone;
export {
  selectTrelloCloneDomain,
};
