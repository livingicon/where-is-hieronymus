// GameboardOne.tsx

import React from "react";
import GameboardMain from "../GameboardMain";
import temptation from "../../../images/temptation_of_saint_anthony.jpg";
import Alice from "../../../images/TemptAlice.png";
import Tinbird from "../../../images/TemptTinbird.png";
import Frank from "../../../images/TemptFrank.png";

const GameboardOne: React.FC = () => {
  const characters: Array<[string, string]> = [["Alice", Alice], ["Tinbird", Tinbird], ["Frank", Frank]];
  const characterBoxes = [
    { left: 434, right: 455, top: 210, bottom: 255 }, // Alice's bounding box
    { left: 714, right: 730, top: 283, bottom: 305 }, // Tinbird's bounding box
    { left: 795, right: 806, top: 340, bottom: 355 }, // Frank's bounding box
  ];
  return (
    <GameboardMain
      gameBoard={1}
      characters={characters}
      imageSrc={temptation}
      characterBoxes={characterBoxes}
    />
  );
};

export default GameboardOne;