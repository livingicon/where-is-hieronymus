// GameboardOne.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const GameboardOne: React.FC = () => {
  const [zoomed, setZoomed] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const closeModal = (): void => isVisible ? setIsVisible(false) : setIsVisible(true);
  
  const handleImageClick = () => {
    setZoomed(!zoomed);
  };
  
  return (
    <GameboardOneContainer>
      {isVisible &&
        <ModalWrapper>
          <section className="modal-main">
            <h2>Instructions</h2>
            <p>Your task is to find the following three characters in this painting. 
              When you click one of the characters in the painting a dropdown will open 
              showing the available characters and you will click on the one you have found.
              When you are ready, you may click the start button and the timer will begin.
              The timer will end when you have found all three characters.</p>
            <button onClick={closeModal}>Start</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </section>
        </ModalWrapper>
      }
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
  position: relative;
`;

const ModalWrapper = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);

  section {
    width: 75%;
    border-radius: 5px;
    background-color: #f0f0f0;
    font-weight: bold;
    color: black; // change
    padding: 10px;
    display: flex; // change to block?
    flex-direction: column;
    text-align: center;
    overflow: auto;
    max-height: 100vh;
  }

  h2 {
    margin: 0;
  }

  button {
    width: 100px;
  }
`;

const ZoomImage = styled.img<{ zoomed: boolean }>`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  margin-top: 15px;
  ${({ zoomed }) => zoomed && `width: 100%;`}
`;

export { GameboardOne, ZoomImage };