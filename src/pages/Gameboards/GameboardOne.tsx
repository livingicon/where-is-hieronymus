// GameboardOne.tsx

import React from "react";
import styled from 'styled-components';

const GameboardOne: React.FC = () => {

  return (
    <GameboardOneContainer>
      <img src={require('../../images/temptation_of_saint_anthony.jpg')} alt="The Temptation of Saint Anthony Painting" />
    </GameboardOneContainer>
  );
};

const GameboardOneContainer = styled.div`

`

export default GameboardOne;