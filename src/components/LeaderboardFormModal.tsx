// LeaderboardFormModal.tsx

import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

interface LeaderboardModalProps {
  // setIsVisible: (isVisible: boolean) => void;
  // startTimer: () => void;
}

const LeaderboardFormModal: React.FC<LeaderboardModalProps> = ({}) => { 
  
  return (
  <LeaderboardFormWrapper>
    <section className="modal-main">
      <h2>Register Time with Leaderboard</h2>
      <p>THIS WILL BE A FORM</p>
    </section>
  </LeaderboardFormWrapper>
  );
};

const LeaderboardFormWrapper = styled.div`
  z-index: 2;
  display: flex;  
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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