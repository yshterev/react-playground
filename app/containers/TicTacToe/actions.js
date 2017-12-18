/*
 *
 * TicTacToe actions
 *
 */

import {
  CLICK_BOARD,
} from './constants';

export function clickBoard(i) {
  return {
    type: CLICK_BOARD,
    i,
  };
}
