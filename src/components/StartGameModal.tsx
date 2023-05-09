// StartGameModal.tsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface StartGameModalProps {
  setIsVisible: (isVisible: boolean) => void;
  startTimer: () => void;
  characters: any[][];
}

const StartGameModal: React.FC<StartGameModalProps> = ({ setIsVisible, startTimer, characters }) => { 
  
  return (
  <StartGameModalWrapper>
    <section>
      <div className="startModalHeader">
        <h2>Instructions</h2>
      </div>
      <p>Your task is to find the following three characters in this painting:</p>
      <div className="characters">
      {characters.map((character, index) => (
        <div className="character" key={index}>
          <p>{character[0]}</p>
          <img src={character[1]} className="character" alt={character[0]} />
        </div>
      ))}
      </div>
      <p>When you click one of the characters in the painting a dropdown will open 
        showing the available characters and you will click on the one you have found.
        When you are ready, you may click the start button and the timer will begin.
        The timer will end when you have found all three characters.</p>
      <div className="startModalBtn">
        <button onClick={() => {startTimer();}}>Start</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </section>
  </StartGameModalWrapper>
  );
};

const StartGameModalWrapper = styled.div`
  z-index: 2;
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
    justify-content: center;
    align-items: center;
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
    padding: 0px;
  }

  .startModalHeader {
    width: 100%;
    background-color: #52525b;
    margin: 0px;
  }

  h2 {
    margin: 5px;
    color: white;
  }

  button {
    width: 100px;
    margin: 10px;
    padding: 5px;
    background-color: #ca8a04;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 15px #333;
    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    margin: 10px;
  }

  .characters {
    display: flex;
    background-color: black;
    color: white;
    justify-content: space-between;
    width: 200px;
    border-radius: 5px;
  }

  img {
    border-radius: 50%;
    width: 40px;
    margin: 0px;
  }
`;

export default StartGameModal;