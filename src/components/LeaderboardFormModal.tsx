// LeaderboardFormModal.tsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LeaderboardModalProps {
  time: number;
}

const LeaderboardFormModal: React.FC<LeaderboardModalProps> = ({ time }) => { 
  
  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
  <LeaderboardFormWrapper>
    <section>
      <h2>Register Time for Leaderboard</h2>
      <p>Time: {formatTime(time)}</p>
      <form>
        <label htmlFor="school">Name</label>
        <input 
          type="text" 
          id="school" 
          name={'time'}
          autoComplete="off"
        />
      </form>
      <Link to="/leaderboard">
        <button>Leaderboard</button>
      </Link>
      <Link to="/">
        <button>Gameboards</button>
      </Link>
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