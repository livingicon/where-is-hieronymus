// GameboardTwo.tsx

import React from "react";
import GameboardMain from "../GameboardMain";
import Garden from '../../../images/the-garden-of-earthly-delights.png';
import Sk8r from "../../../images/GardenSk8r.png";
import Peter from "../../../images/GardenPeter.png";
import Bugsy from "../../../images/GardenBugsy.png";

const GameboardTwo: React.FC = () => {
  const characters: Array<[string, string]> = [["Sk8r", Sk8r], ["Peter", Peter], ["Bugsy", Bugsy]];
  const characterBoxes = [
    { left: 1616, right: 1666, top: 541, bottom: 576 }, // Sk8r's bounding box
    { left: 1445, right: 1490, top: 719, bottom: 782 }, // Peter's bounding box
    { left: 335, right: 365, top: 425, bottom: 455 }, // Bugsy's bounding box
  ];
  
  return (
    <GameboardMain
      gameBoard={2}
      characters={characters}
      imageSrc={Garden}
      characterBoxes={characterBoxes}
    />
  );
};

export default GameboardTwo;