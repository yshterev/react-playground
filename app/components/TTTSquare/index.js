/**
*
* TTTSquare
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TTTSquare(props) {
  return (
    <button className="square" data-wins={props.wins} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

TTTSquare.propTypes = {
  value: PropTypes.string,
  wins: PropTypes.string,
  onClick: PropTypes.func,
};

export default TTTSquare;
