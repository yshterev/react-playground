import styled from 'styled-components';

const TicTacToeWrapper = styled.div`
  ol, ul {
    padding-left: 30px;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }
  
  .status {
    margin-bottom: 10px;
  }
  
  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
  }
  
  .square:focus {
    outline: none;
  }
  
  .kbd-navigation .square:focus {
    background: #ddd;
  }
  
  .game {
    display: flex;
    flex-direction: row;
  }
  
  .game-info {
    width: 500px;
    margin-left: 20px;
  }
  
  button {
    cursor: pointer;
    background: #eee;
    border: none;
    padding: 10px;
    outline: 0;
  }
  
  .bold {
    font-weight: bold;
    color: red;
  }
  
  [data-wins="wins"] {
    background: green;
    color: white;
  }
`;

export default TicTacToeWrapper;
