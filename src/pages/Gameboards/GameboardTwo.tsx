// GameboardTwo.tsx

import React from "react";
import styled from 'styled-components';

const GameboardTwo: React.FC = () => {

  return (
    <GameboardTwoContainer>
      <img src={require('../../images/the-garden-of-earthly-delights.png')} alt="The Garden of Earthly Delights Painting" />
    </GameboardTwoContainer>
  );
};

const GameboardTwoContainer = styled.div`

`

export default GameboardTwo;