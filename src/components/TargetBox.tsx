import React from "react";
import styled from "styled-components";

interface TargetBoxProps {
  x: number;
  y: number;
}

const TargetBox: React.FC<TargetBoxProps> = ({ x, y }) => {
  return (
    <DropdownWrapper x={x} y={y}>
      <img src="https://placehold.it/50x50" alt="dropdown content" />
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

export default TargetBox;