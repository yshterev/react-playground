// generateMoves needs React in scope
import React from 'react';
import { List } from 'semantic-ui-react';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        positions: [a, b, c],
      };
    }
  }

  return {};
}

function calculatePosition(pos) {
  const data = {};

  if (pos <= 2) {
    data.row = '1';
  }

  if (pos > 2 && pos <= 5) {
    data.row = '2';
  }

  if (pos > 5 && pos <= 8) {
    data.row = '3';
  }

  if (pos === 0 || pos === 3 || pos === 6) {
    data.col = '1';
  }

  if (pos === 1 || pos === 4 || pos === 7) {
    data.col = '2';
  }

  if (pos === 2 || pos === 5 || pos === 8) {
    data.col = '3';
  }

  return data;
}

function generateMoves(hist, current, ascending) {
  let history = hist;

  if (!ascending) {
    history = history.reverse();
  }

  return history.map((step, move) => {
    let mv = move;
    const position = calculatePosition(step.position);
    const active = current.position === step.position ? 'bold' : '';

    if (!this.props.ascending) {
      mv = history.length - 1 - mv;
    }

    const desc = mv ?
      `Go to move # ${mv} at ${position.row} x ${position.col}` :
      'Go to game start';

    return (
      <List.Item as="a" key={mv} className={active} onClick={() => this.props.jumpTo(mv)}>
        {desc}
      </List.Item>
    );
  });
}

export {
  calculateWinner,
  calculatePosition,
  generateMoves,
};
