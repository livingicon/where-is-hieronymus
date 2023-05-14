// GameboardThree.tsx

import React from "react";
import GameboardMain from "../GameboardMain";
import Judgement from '../../../images/the-last-judgment.png';
import Felicia from "../../../images/JudgeFelicia.png";
import Hatter from "../../../images/JudgeHatter.png";
import Claws from "../../../images/JudgeClaws.png";

const GameboardThree: React.FC = () => {
  const characters: Array<[string, string]> = [["Felicia", Felicia], ["Hatter", Hatter], ["Claws", Claws]];
  const characterBoxes = [
    { left: 1077, right: 1113, top: 573, bottom: 601 }, // Felicia's bounding box
    { left: 1540, right: 1581, top: 878, bottom: 921 }, // Hatter's bounding box
    { left: 419, right: 468, top: 963, bottom: 1003 }, // Claw's bounding box
  ];
  
  return (
    <GameboardMain
      gameBoard={3}
      characters={characters}
      imageSrc={Judgement}
      characterBoxes={characterBoxes}
    />
  );
};

export default GameboardThree;