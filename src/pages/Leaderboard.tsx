// Leaderboard.tsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import db from "../config/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface LeaderboardEntry {
  name: string;
  time: string;
}

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const leaderboardRef = collection(db, "leaderboard");
      const leaderboardQuery = query(leaderboardRef, orderBy("time", "asc"));
      const leaderboardSnapshot = await getDocs(leaderboardQuery);
      const leaderboardEntries: LeaderboardEntry[] = leaderboardSnapshot.docs.map((doc) => doc.data() as LeaderboardEntry);
      setLeaderboard(leaderboardEntries);
    };

    fetchLeaderboard();
  }, []);

  return (
    <LeaderboardWrapper>
      <h1>Leaderboard!</h1>
      <LeaderboardTable>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </LeaderboardTable>
    </LeaderboardWrapper>
  );
};

const LeaderboardWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const LeaderboardTable = styled.table`
  border-collapse: collapse;
  margin-top: 20px;

  th {
    text-align: left;
  }

  td, th {
    padding: 5px 10px;
    border: 1px solid black;
  }
`;

export default Leaderboard;