// Gameboards.tsx

import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import TemptAnthony from "../images/temptation_of_saint_anthony.jpg";
import GardenDelights from "../images/the-garden-of-earthly-delights.png";
import LastJudgement from "../images/the-last-judgment.png";

const Gameboards: React.FC = () => {

  return (
    <GameboardsContainer>
      <h2>Click a Hieronymus Bosch painting to search for three of it's characters.</h2>
      <GameboardImages>
        <Link to="/the-temptation-of-saint-anthony">
          <Image src={TemptAnthony} alt="The Temptation of Saint Anthony Painting" />
        </Link>
        <Link to="/the-garden-of-earthly-delights">
          <Image src={GardenDelights} alt="The Garden of Earthly Delights Painting" />
        </Link>
        <Link to="/the-last-judgement">
          <Image src={LastJudgement} alt="The Last Judgement Painting" />
        </Link>
      </GameboardImages>
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
  width: 325px;
  height: 450px;
  object-fit: cover;
  margin: 20px;
  box-shadow: 5px 5px 15px #333;
  &:hover {
    transform: scale(1.1);
`;

export default Gameboards;