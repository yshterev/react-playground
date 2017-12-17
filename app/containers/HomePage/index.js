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
import { Link } from 'react-router-dom';
import { Container, Button, Header, Menu } from 'semantic-ui-react';
import injectReducer from 'utils/injectReducer';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { makeSelectYanko } from './selectors';
import { makeSelectLocation } from '../App/selectors';
import { changeYanko } from './actions';
import reducer from './reducer';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home page</title>
          <meta name="description" content="Description of Home page" />
        </Helmet>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              React Playground
            </Menu.Item>
            <Menu.Item active={this.props.location.pathname === '/'} as="div">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item as="div">
              <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
            </Menu.Item>
            <Menu.Item as="div">
              <Link to="/trello-clone">Trello Clone</Link>
            </Menu.Item>
          </Container>
        </Menu>

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
  location: PropTypes.object,
  onChangeYanko: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeYanko: (evt) => dispatch(changeYanko(evt.target)),
  };
}

const mapStateToProps = createStructuredSelector({
  yanko: makeSelectYanko(),
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
