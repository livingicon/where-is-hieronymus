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
    { left: 738, right: 774, top: 357, bottom: 434 }, // Alice's bounding box
    { left: 1214, right: 1241, top: 481, bottom: 519 }, // Tinbird's bounding box
    { left: 1352, right: 1370, top: 578, bottom: 604 }, // Frank's bounding box
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