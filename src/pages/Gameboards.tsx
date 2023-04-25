// Gameboards.tsx

import React from "react";
import styled from 'styled-components';
// import { Routes, Route } from "react-router-dom";
// import Leaderboard from "./Leaderboard";

const Gameboards: React.FC = () => {

  return (
    <GameboardsContainer>
      <p>Click a Hieronymus Bosch painting to play.</p>
      <GameboardImages>
        {/* Must turn each below into a Link */}
        <Image src={require('../images/temptation_of_saint_anthony.jpg')} alt="The Temptation of Saint Anthony Painting" />
        <Image src={require('../images/the-garden-of-earthly-delights.png')} alt="The Garden of Earthly Delights Painting" />
        <Image src={require('../images/the-last-judgement.jpg')} alt="The Last Judgement Painting" />
      </GameboardImages>
    </GameboardsContainer>
  );
};

const GameboardsContainer = styled.div`
  display: grid;
  text-align: center;
`
const GameboardImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 145px;
  height: 200px;
  object-fit: cover;
  margin: 20px;
  &:hover {
    transform: scale(1.1);
`;

export default Gameboards;