/**
 *
 * TicTacToe
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container, Header } from 'semantic-ui-react';

import injectReducer from 'utils/injectReducer';
import { makeSelectPath } from '../App/selectors';

import {
  makeSelectTicTacHistory,
  makeSelectTicTacWinner,
  makeSelectAscending,
  makeSelectStepNumber,
  makeSelectXIsNext,
} from './selectors';

import reducer from './reducer';

import AppHeader from '../../components/AppHeader';
import TTTBoard from '../../components/TTTBoard';

import TicTacToeWrapper from './TicTacToeWrapper';
import { clickBoard } from './actions';

export class TicTacToe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const current = this.props.history[this.props.step];
    let status;

    if (Object.keys(this.props.winner).length) {
      status = `Winner: ${this.props.winner.player}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div>
        <Helmet>
          <title>TicTacToe</title>
          <meta name="description" content="Description of TicTacToe" />
        </Helmet>

        <AppHeader location={this.props.path} />

        <Container text className="main-container">
          <Header as="h1">Tic-tac-toe board game</Header>
          <p>Based on the official <a target="_blank" href="https://reactjs.org/tutorial/tutorial.html">react tutorial</a>.</p>

          <TicTacToeWrapper>
            <div className="game">
              <div className="game-board">
                <TTTBoard squares={current.squares} onClick={(i) => this.props.handleClick(i)} />
              </div>
              <div className="game-info">
                <div>{status}</div>
              </div>
            </div>
          </TicTacToeWrapper>
        </Container>
      </div>
    );
  }
}

TicTacToe.propTypes = {
  path: PropTypes.string,
  winner: PropTypes.object,
  history: PropTypes.array,
  step: PropTypes.number,
  xIsNext: PropTypes.bool,
  handleClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  history: makeSelectTicTacHistory(),
  winner: makeSelectTicTacWinner(),
  ascending: makeSelectAscending(),
  step: makeSelectStepNumber(),
  path: makeSelectPath(),
  xIsNext: makeSelectXIsNext(),
});


function mapDispatchToProps(dispatch) {
  return {
    handleClick: (i) => dispatch(clickBoard(i)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'ticTacToe', reducer });

export default compose(
  withReducer,
  withConnect,
)(TicTacToe);
