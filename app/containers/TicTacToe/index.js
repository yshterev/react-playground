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

import injectReducer from 'utils/injectReducer';
import makeSelectTicTacToe from './selectors';
import reducer from './reducer';

export class TicTacToe extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TicTacToe</title>
          <meta name="description" content="Description of TicTacToe" />
        </Helmet>
        <h1>Hello Tic-Tac-Toe</h1>
      </div>
    );
  }
}

TicTacToe.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tictactoe: makeSelectTicTacToe(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ticTacToe', reducer });

export default compose(
  withReducer,
  withConnect,
)(TicTacToe);
