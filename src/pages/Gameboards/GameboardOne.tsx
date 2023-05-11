// GameboardOne.tsx

import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import temptation from '../../images/temptation_of_saint_anthony.jpg';
import Alice from "../../images/TemptAlice.png";
import Tinbird from "../../images/TemptTinbird.png";
import Frank from "../../images/TemptFrank.png";
import Timer from "../../components/Timer";
import GameKey from "../../components/GameKey";
import TargetBox from "../../components/TargetBox";
import StartGameModal from "../../components/StartGameModal";
import LeaderboardFormModal from "../../components/LeaderboardFormModal";

const GameboardOne: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [dropdownLocation, setDropdownLocation] = useState<{ x: number; y: number } | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [remainingCharacters, setRemainingCharacters] = useState(["Alice", "Tinbird", "Frank"]);
  const [time, setTime] = useState<number>(0);
  const [isKeyVisible, setIsKeyVisible] = useState<boolean>(true);
  
  const aliceBox = {left: 434, right: 455, top: 210, bottom: 255};
  const tinbirdBox = {left: 714, right: 730, top: 283, bottom: 305};
  const frankBox = {left: 795, right: 806, top: 340, bottom: 355};
  const characters = [["Alice", Alice], ["Tinbird", Tinbird], ["Frank", Frank]];
  const gameBoard = 1;

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
      setRemainingCharacters(updatedCharacters);
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

  const toggleKeyVisibility = () => {
    setIsKeyVisible(!isKeyVisible);
  };

  return (
    <GameboardOneContainer>
      {isVisible &&
        <StartGameModal
          setIsVisible={setIsVisible}
          startTimer={startTimer}
          characters={characters}
        />
      }
      {/* <HideKeyWrapper>
        <InfoWrapper>
          {isTimerStarted && (
            <Timer 
              counter={counter}
              setCounter={setCounter}
            />
          )}
          <GameKey 
            remainingCharacters={remainingCharacters}
            characters={characters}
          />
        </InfoWrapper>
        <KeyVisibilityButton onClick={toggleKeyVisibility}>
          {isKeyVisible ? "Hide Key" : "Show Key"}
        </KeyVisibilityButton>
      </HideKeyWrapper> */}
      <HideKeyWrapper>
        <KeyVisibilityButton onClick={toggleKeyVisibility}>
          {isKeyVisible ? "Hide Key" : "Show Key"}
        </KeyVisibilityButton>
        <InfoWrapper isVisible={isKeyVisible}>
          {isTimerStarted && (
            <Timer counter={counter} setCounter={setCounter} />
          )}
          <GameKey
            remainingCharacters={remainingCharacters}
            characters={characters}
          />
        </InfoWrapper>
      </HideKeyWrapper>
      <ImageWrapper>
        <Image 
          src={temptation} 
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
          gameBoard={gameBoard}
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

const HideKeyWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 1%;
  left: 1%;
`;

const KeyVisibilityButton = styled.button`
  position: relative;
  font-weight: bold;
  width: 75px;
  padding: 2px;
  background-color: #ca8a04;
  border: 3px solid black;
  border-radius: 5px;
`;

const InfoWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  width: 160px;
  height: 75px;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 5px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
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