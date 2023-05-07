// LeaderboardFormModal.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
import db from "../config/config";
import { collection, addDoc } from 'firebase/firestore';

interface LeaderboardModalProps {
  time: number;
}

const LeaderboardFormModal: React.FC<LeaderboardModalProps> = ({ time }) => { 
  const [name, setName] = useState("");
  // const [values, setValues] = useState({ name: "", time: "" });
  // const [values, setValues] = useState<{ [key: string]: string }>({ name: "", time: "" });
  

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
      const docRef = await addDoc(collection(db, "leaderboard"), { name, time: timeString });
      console.log("Document written with ID: ", docRef.id);
      setName("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  return (
  <LeaderboardFormWrapper>
    <section>
      <h2>Register Your Time for The Leaderboard</h2>
      <p>Time: {formatTime(time)}</p>
      <form onSubmit={handleRegisterSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
        />
      </form>
      <div className="buttons">
        <Link to="/leaderboard">
          <button type="submit">Register</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
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
    color: black; // change
    padding: 10px;
    display: flex; // change to block?
    flex-direction: column;
    text-align: center;
    overflow: auto;
    max-height: 100vh;
  }

  h2 {
    margin: 0;
  }
`;

export default LeaderboardFormModal;