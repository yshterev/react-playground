/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Container, Button, Header } from 'semantic-ui-react';
import injectReducer from 'utils/injectReducer';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { makeSelectYanko } from './selectors';
import { makeSelectPath } from '../App/selectors';
import { changeYanko } from './actions';
import reducer from './reducer';

import AppHeader from '../../components/AppHeader';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home page</title>
          <meta name="description" content="Description of Home page" />
        </Helmet>

        <AppHeader location={this.props.path} />

        <Container text className="main-container">
          <Header as="h1">Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <Button onClick={this.props.onChangeYanko}>{this.props.yanko}</Button>
        </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  yanko: PropTypes.string,
  path: PropTypes.string,
  onChangeYanko: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeYanko: () => dispatch(changeYanko()),
  };
}

const mapStateToProps = createStructuredSelector({
  yanko: makeSelectYanko(),
  path: makeSelectPath(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
