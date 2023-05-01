// GameboardOne.tsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Temptation from '../../images/temptation_of_saint_anthony.jpg';
import Alice from "../../images/TemptAlice.png";
import TinBird from "../../images/TemptTinBird.png";
import Frank from "../../images/TemptFrank.png";
import Timer from "../../components/Timer";
import TargetBox from "../../components/TargetBox";

const GameboardOne: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [dropdownLocation, setDropdownLocation] = useState<{ x: number; y: number } | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const startTimer = (): void => {
    setIsVisible(false);
    setIsTimerStarted(true);
  };

  const aliceBox = {
    left: 434,
    right: 455,
    top: 210,
    bottom: 255,
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imgRect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - imgRect.left;
    const y = event.clientY - imgRect.top;
    console.log(`Clicked at location: (${x}, ${y})`);
    if (!isDropdownVisible) {
      setDropdownLocation({ x, y });
      setIsDropdownVisible(true); 
    }
    // how to only run this if the dropdown image is clicked?
    handleDropdownClick(x, y);
  };

  const handleCancelClick = (): void => {
    setIsDropdownVisible(false);
  };
  
  const handleDropdownClick = (x: number, y: number) => {
    // if you click Alice img, check if it's Alice
    // if it is Alice, checkbox over image her
    // if it isn't Alice, shake dropdown and it goes away
    
    if (x >= aliceBox.left && x <= aliceBox.right && y >= aliceBox.top && y <= aliceBox.bottom) {
      console.log('Alice');
    } else {
      console.log('Nothing');
    }
  }

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
            <button onClick={() => {startTimer();}}>Start</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </section>
        </ModalWrapper>
      }
      <InfoWrapper>
        {isTimerStarted && (
          <Timer 
            counter={counter}
            setCounter={setCounter}
          />
        )}
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
      <ImageWrapper>
        <Image 
          src={Temptation} 
          onClick={handleImageClick}
        />
        {isDropdownVisible && dropdownLocation && (
          <TargetBox
            x={dropdownLocation.x} 
            y={dropdownLocation.y}
            handleCancelClick={handleCancelClick}
          />
        )}
      </ImageWrapper>
    </GameboardOneContainer>
  );
};

const GameboardOneContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const ModalWrapper = styled.div`
  z-index: 1;
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
const ImageWrapper = styled.div`
  position: relative; // without the dropdown is too high
`;
// change so that you can zoom all the way in and click to drag image
const Image = styled.img`
  width: 1000px;
  margin-top: 15px; 
`;

export { GameboardOne, Image };