// LeaderboardFormModal.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/database";

interface LeaderboardModalProps {
  time: number;
}

const LeaderboardFormModal: React.FC<LeaderboardModalProps> = ({ time }) => { 
  const [name, setName] = useState("");

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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRegisterClick = () => {
    const db = firebase.database();
    const leaderboardRef = db.ref("leaderboard");

    leaderboardRef.push({
      name,
      time,
    });
  };

  return (
  <LeaderboardFormWrapper>
    <section>
      <h2>Register Your Time for The Leaderboard</h2>
      <p>Time: {formatTime(time)}</p>
      <form>
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
          <button onClick={handleRegisterClick}>Register</button>
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