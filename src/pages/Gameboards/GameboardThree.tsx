// GameboardThree.tsx

import React, { useState } from "react";
import styled from 'styled-components';
import { Image } from "./GameboardOne";

const GameboardThree: React.FC = () => {
  const [zoomed, setZoomed] = useState<boolean>(false);

  const handleImageClick = () => {
    setZoomed(!zoomed);
  };

  return (
    <GameboardThreeContainer>
      <Image src={require('../../images/the-last-judgement.jpg')} 
      alt="The Last Judgement Painting" 
      zoomed={zoomed}
      onClick={handleImageClick}
    />
    </GameboardThreeContainer>
  );
};

const GameboardThreeContainer = styled.div`

`

export default GameboardThree;