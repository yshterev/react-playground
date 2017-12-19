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
import { Container, Header, Button, Icon, List } from 'semantic-ui-react';

import injectReducer from 'utils/injectReducer';
import { makeSelectPath } from '../App/selectors';
import { generateMoves } from './utils';

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
import { clickBoard, changeOrder, jumpTo } from './actions';

const OrderButton = (props) => {
  if (props.ascending) {
    return <Button icon id="order-button" size="tiny" onClick={props.onClick}><Icon name="chevron up" /></Button>;
  }
  return <Button icon size="tiny" id="order-button" onClick={props.onClick}><Icon name="chevron down" /></Button>;
};

export class TicTacToe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const history = this.props.history;
    const current = this.props.history[this.props.step];
    const ascending = this.props.ascending;
    let status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;

    // Update status if winner
    if (Object.keys(this.props.winner).length) {
      status = `Winner: ${this.props.winner.player}`;
    }

    const moves = generateMoves.call(this, history, current, ascending);

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
                <TTTBoard winner={this.props.winner} squares={current.squares} onClick={(i) => this.props.handleClick(i)} />
              </div>
              <div className="game-info">
                <div>Move order: <OrderButton onClick={() => this.props.changeOrder()} ascending={ascending} /></div>
                <div>{status}</div>
                <List ordered id="moves">{moves}</List>
              </div>
            </div>
          </TicTacToeWrapper>
        </Container>
      </div>
    );
  }
}

OrderButton.propTypes = {
  ascending: PropTypes.bool,
  onClick: PropTypes.func,
};

TicTacToe.propTypes = {
  path: PropTypes.string,
  winner: PropTypes.object,
  history: PropTypes.array,
  step: PropTypes.number,
  xIsNext: PropTypes.bool,
  ascending: PropTypes.bool,
  handleClick: PropTypes.func,
  changeOrder: PropTypes.func,
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
    changeOrder: () => dispatch(changeOrder()),
    jumpTo: (move) => dispatch(jumpTo(move)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'ticTacToe', reducer });

export default compose(
  withReducer,
  withConnect,
)(TicTacToe);
