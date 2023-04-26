// GameboardTwo.tsx

import React, { useState } from "react";
import styled from 'styled-components';
import { ZoomImage } from "./GameboardOne";

const GameboardTwo: React.FC = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleImageClick = () => {
    setZoomed(!zoomed);
  };

  return (
    <GameboardTwoContainer>
      <ZoomImage src={require('../../images/the-garden-of-earthly-delights.png')} 
      alt="The Garden of Earthly Delights Painting"
      zoomed={zoomed}
      onClick={handleImageClick}
    />
    </GameboardTwoContainer>
  );
};

const GameboardTwoContainer = styled.div`

`

export default GameboardTwo;