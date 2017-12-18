/**
*
* AppHeader
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class AppHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const location = this.props.location;
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            React Playground
          </Menu.Item>
          <Menu.Item active={location === '/'} as="div">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item active={location === '/tic-tac-toe'} as="div">
            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
          </Menu.Item>
          <Menu.Item as="div">
            <Link to="/trello-clone">Trello Clone</Link>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

AppHeader.propTypes = {
  location: PropTypes.string,
};

export default AppHeader;
