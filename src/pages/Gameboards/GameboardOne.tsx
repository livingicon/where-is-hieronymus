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
            <p>Insert instructions for your game here.</p>
            <button onClick={closeModal}>Start game</button>
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

`

const ModalWrapper = styled.div`

`

const ZoomImage = styled.img<{ zoomed: boolean }>`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  margin-top: 15px;
  ${({ zoomed }) => zoomed && `width: 100%;`}
`;

export { GameboardOne, ZoomImage };