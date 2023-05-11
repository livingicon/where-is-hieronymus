// GameboardMain.tsx

import React from "react";
import styled from 'styled-components';
// import { Link } from "react-router-dom";
// import TemptAnthony from "../images/temptation_of_saint_anthony.jpg";
// import GardenDelights from "../images/the-garden-of-earthly-delights.png";
// import LastJudgement from "../images/the-last-judgment.png";

const GameboardMain: React.FC = () => {

  return (
    <GameboardsContainer>
    </GameboardsContainer>
  );
};

const GameboardsContainer = styled.div` 
  display: grid;
  text-align: center;
  color: #333;
`;

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
  box-shadow: 5px 5px 15px #333;
  &:hover {
    transform: scale(1.1);
`;

export default GameboardMain;