// GameboardOne.tsx

import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import remainingation from '../../images/temptation_of_saint_anthony.jpg';
import Alice from "../../images/TemptAlice.png";
import Tinbird from "../../images/TemptTinbird.png";
import Frank from "../../images/TemptFrank.png";
import checkmark from "../../images/checkmark.png";
import Timer from "../../components/Timer";
import TargetBox from "../../components/TargetBox";
import StartGameModal from "../../components/StartGameModal";
import LeaderboardFormModal from "../../components/LeaderboardFormModal";

const GameboardOne: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [dropdownLocation, setDropdownLocation] = useState<{ x: number; y: number } | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [remainingCharacters, setremainingCharacters] = useState(["Alice", "Tinbird", "Frank"]);
  const [time, setTime] = useState<number>(0);
  
  const aliceBox = {left: 434, right: 455, top: 210, bottom: 255};
  const tinbirdBox = {left: 714, right: 730, top: 283, bottom: 305};
  const frankBox = {left: 795, right: 806, top: 340, bottom: 355};
  const characters = [["Alice", Alice], ["Tinbird", Tinbird], ["Frank", Frank]];

  useEffect(() => {
    if (remainingCharacters.length === 0) {
      // console.log("game over!");
      setIsTimerStarted(false);
      setTime(counter);
      // console.log(`Time taken: ${counter} seconds`);
    }
  }, [remainingCharacters, counter]);

  const startTimer = (): void => {
    setIsVisible(false);
    setIsTimerStarted(true);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imgRect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - imgRect.left;
    const y = event.clientY - imgRect.top;
    if (!isDropdownVisible) {
      setDropdownLocation({ x, y });
      setIsDropdownVisible(true); 
    }
  };

  const handleDropImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if ((dropdownLocation && dropdownLocation.x >= aliceBox.left 
      && dropdownLocation.x <= aliceBox.right && dropdownLocation.y >= aliceBox.top 
      && dropdownLocation.y <= aliceBox.bottom && e.currentTarget.alt === 'Alice')
      || (dropdownLocation && dropdownLocation.x >= tinbirdBox.left 
      && dropdownLocation.x <= tinbirdBox.right && dropdownLocation.y >= tinbirdBox.top 
      && dropdownLocation.y <= tinbirdBox.bottom && e.currentTarget.alt === 'Tinbird')
      || (dropdownLocation && dropdownLocation.x >= frankBox.left 
      && dropdownLocation.x <= frankBox.right && dropdownLocation.y >= frankBox.top 
      && dropdownLocation.y <= frankBox.bottom && e.currentTarget.alt === 'Frank')) {
      //console.log(`Clicked at location: (${dropdownLocation.x}, ${dropdownLocation.y})`);
      const updatedCharacters = remainingCharacters.filter((char) => char !== e.currentTarget.alt);
      setremainingCharacters(updatedCharacters);
      setTimeout(() => {
        setIsDropdownVisible(false);
      }, 300);
    } else {
      setIsDropdownVisible(false);
    }
  }

  const handleCloseClick = () => {
    setIsDropdownVisible(false);
  }

  return (
    <GameboardOneContainer>
      {isVisible &&
        <StartGameModal
          setIsVisible={setIsVisible}
          startTimer={startTimer}
          characters={characters}
        />
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
            <img src={Alice} className="character" alt="Dark skinned woman" />
            {!remainingCharacters.includes('Alice') && <img src={checkmark} alt="check mark" className="checkmark" />}
          </div>
          <div className="characters">
            <p>Tinbird</p>
            <img src={Tinbird} className="character" alt="Bird in knight's helmet" />
            {!remainingCharacters.includes('Tinbird') && <img src={checkmark} alt="check mark" className="checkmark" />}
          </div>
          <div className="characters">
            <p>Frank</p>
            <img src={Frank} className="character" alt="Shadowy hooded figure" />
            {!remainingCharacters.includes('Frank') && <img src={checkmark} alt="check mark" className="checkmark" />}
          </div>
        </KeyWrapper>
      </InfoWrapper>
      <ImageWrapper>
        <Image 
          src={remainingation} 
          onClick={handleImageClick}
        />
        {isDropdownVisible && dropdownLocation && (
          <TargetBox
            x={dropdownLocation.x} 
            y={dropdownLocation.y}
            handleCloseClick={handleCloseClick}
            handleDropImageClick={handleDropImageClick}
            characters={characters}
            remainingCharacters={remainingCharacters}
          />
        )}
      </ImageWrapper>
      {remainingCharacters.length === 0 && (
        <LeaderboardFormModal 
          time={time}
        />
      )}
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

// CHANGE TO ABSOLUTE POSITIONED AND SIZED FOR ZOOM ALWAYS ON SCREEN?
const InfoWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 3%;
  left: 3%;
  width: 150px;
  height: 75px;
  background-color: black;
  color: white;
`;

const KeyWrapper = styled.div`
  display: flex;

  img {
    border-radius: 50%;
    width: 30px;
    margin: 0px;
  }

  .character {
    position: fixed;
  }

  .checkmark {
    position: relative;
  }

  p {
    margin: 0;
  }
`;
const ImageWrapper = styled.div`
  position: relative; // without the dropdown is too high
`;
// change so that you can zoom all the way in and click to drag image?
const Image = styled.img`
  width: 1000px;
  margin-top: 15px; 
`;

export { GameboardOne, Image };