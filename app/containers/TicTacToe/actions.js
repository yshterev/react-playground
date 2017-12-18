/*
 *
 * TicTacToe actions
 *
 */

import {
  CLICK_BOARD,
  CHANGE_ORDER,
  JUMP_TO,
} from './constants';

function clickBoard(i) {
  return {
    type: CLICK_BOARD,
    i,
  };
}

function changeOrder() {
  return {
    type: CHANGE_ORDER,
  };
}

function jumpTo(move) {
  return {
    type: JUMP_TO,
    move,
  };
}

export {
  clickBoard,
  changeOrder,
  jumpTo,
};
