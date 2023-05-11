// GameKey.tsx

import React from "react";
import styled from "styled-components";
import checkmark from "../../images/checkmark.png";

interface GameKeyProps {
  remainingCharacters: string[];
  characters: any[][];
}

const GameKey: React.FC<GameKeyProps> = ({ remainingCharacters, characters }) => {
  return (
    <KeyWrapper>
      {characters.map(([name, image]) => (
        <div className="characters" key={name}>
          <p>{name}</p>
          <img src={image} className="character" alt={name} />
          {!remainingCharacters.includes(name) && (
            <img src={checkmark} alt="check mark" className="checkmark" />
          )}
        </div>
      ))}
    </KeyWrapper>
  );
};

const KeyWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    border-radius: 50%;
    width: 30px;
    margin: 0px;
  }

  .characters {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .character {
    position: relative;
  }

  .checkmark {
    position: absolute;
    top: 18px;
  }

  p {
    margin: 0;
  }
`;

export default GameKey;
