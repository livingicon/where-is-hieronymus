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
    { left: 634, right: 654, top: 337, bottom: 354 }, // Felicia's bounding box
    { left: 907, right: 930, top: 516, bottom: 541 }, // Hatter's bounding box
    { left: 246, right: 275, top: 566, bottom: 589 }, // Claw's bounding box
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