// LeaderboardFormModal.tsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Leaderboard from "../pages/Leaderboard";
import styled from "styled-components";
import db from "../config/config";
import { collection, addDoc } from 'firebase/firestore';

interface LeaderboardModalProps {
  time: number;
  gameBoard: number;
}

const LeaderboardFormModal: React.FC<LeaderboardModalProps> = ({ 
  time, 
  gameBoard,
 }) => { 
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const timeString = formatTime(time);
    try {
      let collectionName;
      if (gameBoard === 1) {
        collectionName = "leaderboardOne";
      } else if (gameBoard === 2) {
        collectionName = "leaderboardTwo";
      } else if (gameBoard === 3) {
        collectionName = "leaderboardThree";
      } else {
        throw new Error("Invalid game board number.");
      }
      const docRef = await addDoc(collection(db, collectionName), { name, time: timeString });
      console.log("Document written with ID: ", docRef.id);
      setName("");
      navigate("/leaderboard");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <LeaderboardFormWrapper>
      <section>
        <div className="leaderRegisterHeader">
          <h2>Leaderboard Registration</h2>
        </div>
        <p>Congratulations! You found all three characters in {formatTime(time)}.</p>
        <form onSubmit={handleRegisterSubmit}>
          <label htmlFor="name">Name </label>
          <input 
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={handleNameChange}
          />
          <div className="buttons">
            <button type="submit">Register</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    </LeaderboardFormWrapper>
  );
};

const LeaderboardFormWrapper = styled.div`
  z-index: 2;
  display: grid;  
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.85);

  section {
    width: 75%;
    border-radius: 5px;
    background-color: #f0f0f0;
    font-weight: bold;
    color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: auto;
    max-height: 100vh;
  }

  .leaderRegisterHeader {
    width: 100%;
    background-color: #52525b;
    margin: 0px;
    color: white;
  }

  button {
    width: 100px;
    margin: 10px;
    padding: 5px;
    background-color: #ca8a04;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 15px #333;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default LeaderboardFormModal;