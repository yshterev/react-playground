/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectYanko = () => createSelector(
  selectHome,
  (homeState) => homeState.get('yanko')
);

export {
  selectHome,
  makeSelectYanko,
};
