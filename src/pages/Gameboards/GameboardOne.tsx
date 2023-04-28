// GameboardOne.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Temptation from '../../images/temptation_of_saint_anthony.jpg';
import Alice from "../../images/TemptAlice.png";
import TinBird from "../../images/TemptTinBird.png";
import Frank from "../../images/TemptFrank.png";
import Timer from "../../components/Timer";

// { startTimer, isVisible, closeModal, handleImageClick } // add below and move functions out
const GameboardOne: React.FC = () => {
  const [zoomed, setZoomed] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const closeModal = (): void => isVisible ? setIsVisible(false) : setIsVisible(true);
  
  const startTimer = () => console.log("working");

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
            <button onClick={() => {closeModal(); startTimer();}}>Start</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </section>
        </ModalWrapper>
      }
      <TemptationGameboardWrapper>
        <InfoWrapper>
          <Timer />
          <KeyWrapper>
            <div className="characters">
              <p>Alice</p>
              <img src={Alice} alt="Dark skinned woman" />
            </div>
            <div className="characters">
              <p>Tinbird</p>
              <img src={TinBird} alt="Bird in knight's helmet" />
            </div>
            <div className="characters">
              <p>Frank</p>
              <img src={Frank} alt="Shadowy hooded figure" />
            </div>
          </KeyWrapper>
        </InfoWrapper>
        <ZoomImage 
          src={Temptation} 
          alt="The Temptation of Saint Anthony Painting" 
          zoomed={zoomed}
          onClick={handleImageClick}
        />
      </TemptationGameboardWrapper>

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

const TemptationGameboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  background-color: black;
  color: white;
  width: 300px;
`;

const KeyWrapper = styled.div`
  display: flex;
  img {
    border-radius: 50%;
    width: 50px;
    margin: 10px;
    border: 1px solid white;
  }
`;

// change so that you can zoom all the way in and click to drag image
const ZoomImage = styled.img<{ zoomed: boolean }>`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  margin-top: 15px;
  ${({ zoomed }) => zoomed && `width: 100%;`}
`;

export { GameboardOne, ZoomImage };