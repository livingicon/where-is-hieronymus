// GameboardTwo.tsx

import React from "react";
import styled from 'styled-components';
// import { Routes, Route } from "react-router-dom";
// import Leaderboard from "./Leaderboard";

const GameboardTwo: React.FC = () => {

  return (
    <GameboardTwoContainer>
      <p>Click a Hieronymus Bosch painting to play.</p>
      <img src={require('../../images/the-garden-of-earthly-delights.png')} alt="The Garden of Earthly Delights Painting" />
    </GameboardTwoContainer>
  );
};

const GameboardTwoContainer = styled.div`

`

export default GameboardTwo;