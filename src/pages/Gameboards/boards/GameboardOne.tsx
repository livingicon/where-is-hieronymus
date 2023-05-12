// // GameboardOne.tsx

// import React, { useState, useEffect } from "react";
// import styled from 'styled-components';
// import temptation from '../../../images/temptation_of_saint_anthony.jpg';
// import Alice from "../../../images/TemptAlice.png";
// import Tinbird from "../../../images/TemptTinbird.png";
// import Frank from "../../../images/TemptFrank.png";
// import Key from "../../../components/Key";
// import Image from "../../../components/Image";
// import StartGameModal from "../../../components/StartGameModal";
// import LeaderboardFormModal from "../../../components/LeaderboardFormModal";

// const GameboardOne: React.FC = () => {
//   const [isVisible, setIsVisible] = useState<boolean>(true);
//   const [counter, setCounter] = useState<number>(0);
//   const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
//   const [dropdownLocation, setDropdownLocation] = useState<{ x: number; y: number } | null>(null);
//   const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
//   const [remainingCharacters, setRemainingCharacters] = useState(["Alice", "Tinbird", "Frank"]);
//   const [time, setTime] = useState<number>(0);
//   const [isKeyVisible, setIsKeyVisible] = useState<boolean>(true);
  
//   const aliceBox = {left: 434, right: 455, top: 210, bottom: 255};
//   const tinbirdBox = {left: 714, right: 730, top: 283, bottom: 305};
//   const frankBox = {left: 795, right: 806, top: 340, bottom: 355};
//   const characters = [["Alice", Alice], ["Tinbird", Tinbird], ["Frank", Frank]];
//   const gameBoard = 1;

//   useEffect(() => {
//     if (remainingCharacters.length === 0) {
//       // console.log("game over!");
//       setIsTimerStarted(false);
//       setTime(counter);
//       // console.log(`Time taken: ${counter} seconds`);
//     }
//   }, [remainingCharacters, counter]);

//   const startTimer = (): void => {
//     setIsVisible(false);
//     setIsTimerStarted(true);
//   };

//   const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
//     const imgRect = event.currentTarget.getBoundingClientRect();
//     const x = event.clientX - imgRect.left;
//     const y = event.clientY - imgRect.top;
//     if (!isDropdownVisible) {
//       setDropdownLocation({ x, y });
//       setIsDropdownVisible(true); 
//     }
//   };

//   const handleDropImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
//     if ((dropdownLocation && dropdownLocation.x >= aliceBox.left 
//       && dropdownLocation.x <= aliceBox.right && dropdownLocation.y >= aliceBox.top 
//       && dropdownLocation.y <= aliceBox.bottom && e.currentTarget.alt === 'Alice')
//       || (dropdownLocation && dropdownLocation.x >= tinbirdBox.left 
//       && dropdownLocation.x <= tinbirdBox.right && dropdownLocation.y >= tinbirdBox.top 
//       && dropdownLocation.y <= tinbirdBox.bottom && e.currentTarget.alt === 'Tinbird')
//       || (dropdownLocation && dropdownLocation.x >= frankBox.left 
//       && dropdownLocation.x <= frankBox.right && dropdownLocation.y >= frankBox.top 
//       && dropdownLocation.y <= frankBox.bottom && e.currentTarget.alt === 'Frank')) {
//       //console.log(`Clicked at location: (${dropdownLocation.x}, ${dropdownLocation.y})`);
//       const updatedCharacters = remainingCharacters.filter((char) => char !== e.currentTarget.alt);
//       setRemainingCharacters(updatedCharacters);
//       setTimeout(() => {
//         setIsDropdownVisible(false);
//       }, 300);
//     } else {
//       setIsDropdownVisible(false);
//     }
//   }

//   const handleCloseClick = () => {
//     setIsDropdownVisible(false);
//   }

//   const toggleKeyVisibility = () => {
//     setIsKeyVisible(!isKeyVisible);
//   };

//   return (
//     <GameboardOneContainer>

//       {isVisible &&
//         <StartGameModal
//           setIsVisible={setIsVisible}
//           startTimer={startTimer}
//           characters={characters}
//         />
//       }

//       <Key 
//         toggleKeyVisibility={toggleKeyVisibility}
//         isKeyVisible={isKeyVisible}
//         isTimerStarted={isTimerStarted}
//         counter={counter}
//         setCounter={setCounter}
//         remainingCharacters={remainingCharacters}
//         characters={characters}
//       />
      
//       <Image
//         src={temptation}
//         handleImageClick={handleImageClick}
//         isDropdownVisible={isDropdownVisible}
//         dropdownLocation={dropdownLocation}
//         handleCloseClick={handleCloseClick}
//         handleDropImageClick={handleDropImageClick}
//         characters={characters}
//         remainingCharacters={remainingCharacters}
//       />

//       {remainingCharacters.length === 0 && (
//         <LeaderboardFormModal 
//           time={time}
//           gameBoard={gameBoard}
//         />
//       )}

//     </GameboardOneContainer>
//   );
// };

// const GameboardOneContainer = styled.div` 
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 15px;
// `;

// export default GameboardOne;

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