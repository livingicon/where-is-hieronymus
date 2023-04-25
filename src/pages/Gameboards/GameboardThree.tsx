// GameboardThree.tsx

import React from "react";
import styled from 'styled-components';

const GameboardThree: React.FC = () => {

  return (
    <GameboardThreeContainer>
      <img src={require('../../images/the-last-judgement.jpg')} alt="The Last Judgement Painting" />
    </GameboardThreeContainer>
  );
};

const GameboardThreeContainer = styled.div`

`

export default GameboardThree;