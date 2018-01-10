import React from 'react';
import { shallow } from 'enzyme';

import { TicTacToe } from '../index';
import { AppHeader } from '../../../components/AppHeader';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

console.log(1);

describe('<TicTacToe />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <TicTacToe />
    );
    expect(renderedComponent.contains(
      <Helmet>
        <title>TicTacToe</title>
        <meta name="description" content="Description of TicTacToe" />
      </Helmet>
    )).toEqual(true);
  });
});

console.log(3);
