// GameboardTwo.tsx

import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Garden from '../../images/the-garden-of-earthly-delights.png';
import Sk8r from "../../images/GardenSk8r.png";
import Peter from "../../images/GardenPeter.png";
import Bugsy from "../../images/GardenBugsy.png";
import Timer from "../../components/Timer";
import GameKey from "../../components/GameKey";
import TargetBox from "../../components/TargetBox";
import StartGameModal from "../../components/StartGameModal";
import LeaderboardFormModal from "../../components/LeaderboardFormModal";

const GameboardTwo: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [dropdownLocation, setDropdownLocation] = useState<{ x: number; y: number } | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [remainingCharacters, setRemainingCharacters] = useState(["Sk8r", "Peter", "Bugsy"]);
  const [time, setTime] = useState<number>(0);
  const [isKeyVisible, setIsKeyVisible] = useState<boolean>(true);
  
  // CHANGE!!
  const Sk8rBox = {left: 948, right: 980, top: 318, bottom: 338};
  const PeterBox = {left: 850, right: 874, top: 422, bottom: 460};
  const BugsyBox = {left: 197, right: 214, top: 250, bottom: 267};
  const characters = [["Sk8r", Sk8r], ["Peter", Peter], ["Bugsy", Bugsy]];
  const gameBoard = 2;

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
    // console.log(`Clicked at location: (${x}, ${y})`);
    if (!isDropdownVisible) {
      setDropdownLocation({ x, y });
      setIsDropdownVisible(true); 
    }
  };

  // CHANGE!!
  const handleDropImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if ((dropdownLocation && dropdownLocation.x >= Sk8rBox.left 
      && dropdownLocation.x <= Sk8rBox.right && dropdownLocation.y >= Sk8rBox.top 
      && dropdownLocation.y <= Sk8rBox.bottom && e.currentTarget.alt === 'Sk8r')
      || (dropdownLocation && dropdownLocation.x >= PeterBox.left 
      && dropdownLocation.x <= PeterBox.right && dropdownLocation.y >= PeterBox.top 
      && dropdownLocation.y <= PeterBox.bottom && e.currentTarget.alt === 'Peter')
      || (dropdownLocation && dropdownLocation.x >= BugsyBox.left 
      && dropdownLocation.x <= BugsyBox.right && dropdownLocation.y >= BugsyBox.top 
      && dropdownLocation.y <= BugsyBox.bottom && e.currentTarget.alt === 'Bugsy')) {
      // console.log(`Clicked at location: (${dropdownLocation.x}, ${dropdownLocation.y})`);
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
    <GameboardTwoContainer>
      {isVisible &&
        <StartGameModal
          setIsVisible={setIsVisible}
          startTimer={startTimer}
          characters={characters}
        />
      }
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
          src={Garden} 
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
    </GameboardTwoContainer>
  );
};

const GameboardTwoContainer = styled.div` 
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

const Image = styled.img`
  width: 1000px;
  margin-top: 15px; 
`;

export { GameboardTwo, Image };