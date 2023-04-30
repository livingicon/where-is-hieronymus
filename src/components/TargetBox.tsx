import React from "react";
import styled from "styled-components";
import Alice from "../images/TemptAlice.png";

interface TargetBoxProps {
  x: number;
  y: number;
}

const TargetBox: React.FC<TargetBoxProps> = ({ x, y }) => {
  
  const clickDropImage = () => {
    console.log("clicked image.");
  };

  return (
    <DropdownWrapper x={x} y={y}>
      <img src={Alice} alt="Alice" onClick={clickDropImage}/>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  background-color: white;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  padding: 2px;

  // update later (placeholder)
  img {
    width: 50px;
  }
`;

export default TargetBox;