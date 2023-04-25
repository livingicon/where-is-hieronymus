// GameboardThree.tsx

import React from "react";
import styled from 'styled-components';
// import { Routes, Route } from "react-router-dom";
// import Leaderboard from "./Leaderboard";

const GameboardThree: React.FC = () => {

  return (
    <GameboardThreeContainer>
      <p>Click a Hieronymus Bosch painting to play.</p>
      <img src={require('../../images/the-last-judgement.jpg')} alt="The Last Judgement Painting" />
    </GameboardThreeContainer>
  );
};

const GameboardThreeContainer = styled.div`

`

export default GameboardThree;