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
    { left: 948, right: 980, top: 318, bottom: 338 }, // Sk8r's bounding box
    { left: 850, right: 874, top: 422, bottom: 460 }, // Peter's bounding box
    { left: 197, right: 214, top: 250, bottom: 267 }, // Bugsy's bounding box
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