// TargetBox.tsx

import React from "react";
import styled from "styled-components";
// import Alice from "../images/TemptAlice.png";
// import TinBird from "../images/TemptTinBird.png";
// import Frank from "../images/TemptFrank.png";
import checkmark from "../images/checkmark.png";

interface TargetBoxProps {
  x: number;
  y: number;
  handleCloseClick: () => void;
  handleDropImageClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  characters: any[][];
  remainingCharacters: string[];
}

const TargetBox: React.FC<TargetBoxProps> = ({ 
  x, 
  y, 
  handleCloseClick, 
  handleDropImageClick,
  characters,
  remainingCharacters,
}) => { 
  
  return (
    <DropdownWrapper x={x} y={y} >
      {characters.map(([name, imagePath]) => (
        <div className="character-container" key={name}>
          <img
            src={imagePath}
            alt={name}
            className="character"
            onClick={handleDropImageClick}
          />
          {!remainingCharacters.includes(name) && <img src={checkmark} alt="check mark" className="checkmark" />}
        </div>
      ))}
      <button onClick={handleCloseClick}>CLOSE</button>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div<{ x: number; y: number;}>`
  position: absolute;
  display: grid;
  top: ${({ y }) => y + 48}px;
  left: ${({ x }) => x - 39}px;
  background-color: white;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  padding: 8px;

  // triangle pointing up
  &::before {
    content: "";
    position: absolute;
    top: -23px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 46px;
    height: 46px;
    background-color: white;
  }

  // update later (placeholder)
  .character {
    position: relative;
    width: 50px;
    height: 51.48px;
    border-radius: 50%;
  }
  
  .character: hover {
    transform: scale(1.1);
  }

  .character-container {
    position: relative;
  }

  .checkmark {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 47px;
  }
`;

export default TargetBox;