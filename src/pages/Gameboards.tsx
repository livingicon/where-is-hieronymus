// Gameboards.tsx

import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import TemptAnthony from "../images/temptation_of_saint_anthony.jpg";
import GardenDelights from "../images/the-garden-of-earthly-delights.png";
import LastJudgement from "../images/the-last-judgement.jpg";
// import { Routes, Route } from "react-router-dom";
// import Leaderboard from "./Leaderboard";

const Gameboards: React.FC = () => {

  return (
    <GameboardsContainer>
      <p>Click a Hieronymus Bosch painting to go to it's gameboard.</p>
      <GameboardImages>
        {/* Must turn each below into a Link */}
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
  box-shadow: 5px 5px 15px #333;
  &:hover {
    transform: scale(1.1);
`;

export default Gameboards;