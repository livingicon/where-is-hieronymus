// GameboardThree.tsx

import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Judgement from '../../images/the-last-judgment.png';
import Felicia from "../../images/JudgeFelicia.png";
import Hatter from "../../images/JudgeHatter.png";
import Claws from "../../images/JudgeClaws.png";
import checkmark from "../../images/checkmark.png";
import Timer from "../../components/Timer";
import TargetBox from "../../components/TargetBox";
import StartGameModal from "../../components/StartGameModal";
import LeaderboardFormModal from "../../components/LeaderboardFormModal";

const GameboardThree: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [dropdownLocation, setDropdownLocation] = useState<{ x: number; y: number } | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [remainingCharacters, setRemainingCharacters] = useState(["Felicia", "Hatter", "Claws"]);
  const [time, setTime] = useState<number>(0);
  
  // CHANGE!!
  const FeliciaBox = {left: 948, right: 980, top: 318, bottom: 338};
  const HatterBox = {left: 850, right: 874, top: 422, bottom: 460};
  const ClawsBox = {left: 197, right: 214, top: 250, bottom: 267};
  const characters = [["Felicia", Felicia], ["Hatter", Hatter], ["Claws", Claws]];

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
    console.log(`Clicked at location: (${x}, ${y})`);
    if (!isDropdownVisible) {
      setDropdownLocation({ x, y });
      setIsDropdownVisible(true); 
    }
  };

  // CHANGE!!
  const handleDropImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if ((dropdownLocation && dropdownLocation.x >= FeliciaBox.left 
      && dropdownLocation.x <= FeliciaBox.right && dropdownLocation.y >= FeliciaBox.top 
      && dropdownLocation.y <= FeliciaBox.bottom && e.currentTarget.alt === 'Felicia')
      || (dropdownLocation && dropdownLocation.x >= HatterBox.left 
      && dropdownLocation.x <= HatterBox.right && dropdownLocation.y >= HatterBox.top 
      && dropdownLocation.y <= HatterBox.bottom && e.currentTarget.alt === 'Hatter')
      || (dropdownLocation && dropdownLocation.x >= ClawsBox.left 
      && dropdownLocation.x <= ClawsBox.right && dropdownLocation.y >= ClawsBox.top 
      && dropdownLocation.y <= ClawsBox.bottom && e.currentTarget.alt === 'Claws')) {
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

  return (
    <GameboardThreeContainer>
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
            <p>Felicia</p>
            <img src={Felicia} className="character" alt="skating penguin" />
            {!remainingCharacters.includes('Felicia') && <img src={checkmark} alt="check mark" className="checkmark" />}
          </div>
          <div className="characters">
            <p>Hatter</p>
            <img src={Hatter} className="character" alt="rabbit" />
            {!remainingCharacters.includes('Hatter') && <img src={checkmark} alt="check mark" className="checkmark" />}
          </div>
          <div className="characters">
            <p>Claws</p>
            <img src={Claws} className="character" alt="blue beetle" />
            {!remainingCharacters.includes('Claws') && <img src={checkmark} alt="check mark" className="checkmark" />}
          </div>
        </KeyWrapper>
      </InfoWrapper>
      <ImageWrapper>
        <Image 
          src={Judgement} 
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
    </GameboardThreeContainer>
  );
};

const GameboardThreeContainer = styled.div` 
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

export { GameboardThree, Image };