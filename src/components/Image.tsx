// Image.tsx

import React from "react";
import styled from 'styled-components';
import TargetBox from "./TargetBox";

interface ImageProps {
  src: string;
  handleImageClick: (event: React.MouseEvent<HTMLImageElement>) => void;
  isDropdownVisible: boolean;
  dropdownLocation: { x: number; y: number } | null;
  handleCloseClick: () => void;
  handleDropImageClick: (event: React.MouseEvent<HTMLImageElement>) => void;
  characters: string[][];
  remainingCharacters: string[];
}

const Image: React.FC<ImageProps> = ({
  src,
  handleImageClick,
  isDropdownVisible,
  dropdownLocation,
  handleCloseClick,
  handleDropImageClick,
  characters,
  remainingCharacters,
}) => {
  return (
    <ImageWrapper>
      <Painting src={src} onClick={handleImageClick} />
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
  );
};

const ImageWrapper = styled.div`
  position: relative; // without the dropdown is too high
`;

const Painting = styled.img`
  width: 1000px;
  margin-top: 15px; 
`;

export default Image;
