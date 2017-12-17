/**
 *
 * TrelloClone
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectTrelloClone from './selectors';
import reducer from './reducer';

export class TrelloClone extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TrelloClone</title>
          <meta name="description" content="Description of TrelloClone" />
        </Helmet>
        <h1>Hello TrelloClone!</h1>
      </div>
    );
  }
}

TrelloClone.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  trelloclone: makeSelectTrelloClone(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'trelloClone', reducer });

export default compose(
  withReducer,
  withConnect,
)(TrelloClone);
