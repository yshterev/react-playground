import React from 'react';
import { shallow } from 'enzyme';

import TTTSquare from '../index';

describe('<TTTSquare />', () => {
  it('renders a <button> with class square', () => {
    const renderedComponent = shallow(
      <TTTSquare />
    );
    expect(
      renderedComponent.find('button').hasClass('square')
    ).toEqual(true);
  });
});

