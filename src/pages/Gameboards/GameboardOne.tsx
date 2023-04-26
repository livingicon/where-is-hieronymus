// GameboardOne.tsx

import React, { useState } from "react";
import styled from 'styled-components';

const GameboardOne: React.FC = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleImageClick = () => {
    setZoomed(!zoomed);
  };
  
  return (
    <GameboardOneContainer>
      <ZoomImage 
        src={require('../../images/temptation_of_saint_anthony.jpg')} 
        alt="The Temptation of Saint Anthony Painting" 
        zoomed={zoomed}
        onClick={handleImageClick}
      />
    </GameboardOneContainer>
  );
};

const GameboardOneContainer = styled.div`

`

const ZoomImage = styled.img<{ zoomed: boolean }>`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  ${({ zoomed }) => zoomed && `width: 100%;`}
`;

export { GameboardOne, ZoomImage };