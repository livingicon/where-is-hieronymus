// Key.tsx

import React from "react";
import styled from "styled-components";
import Timer from "./key/Timer";
import GameKey from "./key/GameKey";

interface KeyProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  remainingCharacters: string[];
  characters: any[][];
  toggleKeyVisibility: () => void;
  isKeyVisible: boolean;
  isTimerStarted: boolean;
}

const Key: React.FC<KeyProps> = ({
  counter,
  setCounter,
  remainingCharacters,
  characters,
  toggleKeyVisibility,
  isKeyVisible,
  isTimerStarted,
}) => { 
  
  return (
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
  );
};

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
  width: 300px;
  height: 150px;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 5px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export default Key;