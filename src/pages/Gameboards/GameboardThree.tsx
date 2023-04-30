// GameboardThree.tsx

import React, { useState } from "react";
import styled from 'styled-components';
import { Image } from "./GameboardOne";

const GameboardThree: React.FC = () => {


  const handleImageClick = () => {

  };

  return (
    <GameboardThreeContainer>
      <Image src={require('../../images/the-last-judgement.jpg')} 
      alt="The Last Judgement Painting" 
      onClick={handleImageClick}
    />
    </GameboardThreeContainer>
  );
};

const GameboardThreeContainer = styled.div`

`

export default GameboardThree;