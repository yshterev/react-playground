/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import TicTacToe from 'containers/TicTacToe/Loadable';
import TrelloClone from 'containers/TrelloClone';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  .main-container {
    margin-top: 7rem;
  }
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/trello-clone" component={TrelloClone} />
        <Route exact path="/tic-tac-toe" component={TicTacToe} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
