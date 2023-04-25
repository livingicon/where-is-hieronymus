// Gameboards.tsx

import React from "react";
import styled from 'styled-components';
// import { Routes, Route } from "react-router-dom";
// import Leaderboard from "./Leaderboard";

const Gameboards: React.FC = () => {

  return (
    <GameboardsContainer>
      <Image src={require('../images/temptation_of_saint_anthony.jpg')} alt="The Temptation of Saint Anthony Painting" />
      <Image src={require('../images/the-garden-of-earthly-delights.png')} alt="The Garden of Earthly Delights Painting" />
      <Image src={require('../images/the-last-judgement.jpg')} alt="The Last Judgement Painting" />
    </GameboardsContainer>
  );
};

const GameboardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px; // not the best solution
`;

const Image = styled.img`
  width: 190px;
  height: 200px;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
`;

export default Gameboards;