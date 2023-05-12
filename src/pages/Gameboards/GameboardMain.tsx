// GameboardMain.tsx

import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import StartGameModal from "../../components/StartGameModal";
import Key from "../../components/Key";
import Image from "../../components/Image";
import LeaderboardFormModal from "../../components/LeaderboardFormModal";

interface GameboardMainProps {
  gameBoard: number;
  characters: [string, string][];
  imageSrc: string;
  characterBoxes: { left: number; right: number; top: number; bottom: number }[];
}

const GameboardMain: React.FC<GameboardMainProps> = ({
  gameBoard,
  characters,
  imageSrc,
  characterBoxes,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [dropdownLocation, setDropdownLocation] = useState<{ x: number; y: number } | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [remainingCharacters, setRemainingCharacters] = useState(characters.map(([name]) => name));
  const [time, setTime] = useState<number>(0);
  const [isKeyVisible, setIsKeyVisible] = useState<boolean>(true);

  useEffect(() => {
    if (remainingCharacters.length === 0) {
      // console.log("game over!");
      setIsTimerStarted(false);
      setTime(counter);
      // console.log(`Time taken: ${counter} seconds`);
    }
  }, [remainingCharacters, counter]);

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
    const clickedCharacter = e.currentTarget.alt;
    const clickedCharacterIndex = characters.findIndex(([name]) => name === clickedCharacter);
    const clickedCharacterBox = characterBoxes[clickedCharacterIndex];

    if (
      dropdownLocation &&
      dropdownLocation.x >= clickedCharacterBox.left &&
      dropdownLocation.x <= clickedCharacterBox.right &&
      dropdownLocation.y >= clickedCharacterBox.top &&
      dropdownLocation.y <= clickedCharacterBox.bottom
    ) {
      const updatedCharacters = remainingCharacters.filter((char) => char !== clickedCharacter);
      setRemainingCharacters(updatedCharacters);
      setTimeout(() => {
        setIsDropdownVisible(false);
      }, 300);
    } else {
      setIsDropdownVisible(false);
    }
  };

  const handleCloseClick = () => {
    setIsDropdownVisible(false);
  };

  const toggleKeyVisibility = () => {
    setIsKeyVisible(!isKeyVisible);
  };

  const handleStartGame = () => {
    setIsVisible(false);
    setIsTimerStarted(true);
  };

  return (
    <GameboardContainer>
      {isVisible && (
        <StartGameModal
          setIsVisible={setIsVisible}
          startTimer={handleStartGame}
          characters={characters}
        />
      )}

      <Key
        toggleKeyVisibility={toggleKeyVisibility}
        isKeyVisible={isKeyVisible}
        isTimerStarted={isTimerStarted}
        counter={counter}
        setCounter={setCounter}
        remainingCharacters={remainingCharacters}
        characters={characters}
      />

      <Image
        src={imageSrc}
        handleImageClick={handleImageClick}
        isDropdownVisible={isDropdownVisible}
        dropdownLocation={dropdownLocation}
        handleCloseClick={handleCloseClick}
        handleDropImageClick={handleDropImageClick}
        characters={characters}
        remainingCharacters={remainingCharacters}
      />

      {remainingCharacters.length === 0 && (
        <LeaderboardFormModal 
          time={time}
          gameBoard={gameBoard}
        />
      )}
    </GameboardContainer>
  );
};

const GameboardContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export default GameboardMain;