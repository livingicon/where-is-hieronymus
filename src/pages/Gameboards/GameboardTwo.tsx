// GameboardTwo.tsx

import React, { useState } from "react";
import styled from 'styled-components';
import { Image } from "./GameboardOne";

const GameboardTwo: React.FC = () => {

  const handleImageClick = () => {
  };

  return (
    <GameboardTwoContainer>
      <Image src={require('../../images/the-garden-of-earthly-delights.png')} 
      alt="The Garden of Earthly Delights Painting"
      onClick={handleImageClick}
    />
    </GameboardTwoContainer>
  );
};

const GameboardTwoContainer = styled.div`

`

export default GameboardTwo;