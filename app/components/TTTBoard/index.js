/**
*
* TTTBoard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TTTSquare from '../TTTSquare';

class TTTBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderSquare(i) {
    const winner = this.props.winner;
    let wins = '';

    if (winner.player && winner.positions.indexOf(i) !== -1) {
      wins = 'wins';
    }

    return (
      <TTTSquare
        key={i}
        wins={wins}
        onClick={() => this.props.onClick(i)}
        value={this.props.squares[i]}
      />
    );
  }

  render() {
    const rows = [];
    let squares = [];
    const size = 3;

    for (let r = 0; r < size; r += 1) {
      for (let i = r * size; i < (r * size) + size; i += 1) {
        squares.push(this.renderSquare(i));
      }

      rows.push(<div key={r} className="board-row">{squares}</div>);
      squares = [];
    }
    return (
      <div>{rows}</div>
    );
  }
}

TTTBoard.propTypes = {
  winner: PropTypes.string,
  squares: PropTypes.array,
  onClick: PropTypes.func,
};

export default TTTBoard;
