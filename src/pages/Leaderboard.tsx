// // Leaderboard.tsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import db from "../config/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface LeaderboardEntry {
  name: string;
  time: string;
}

const Leaderboard: React.FC = () => {
  const [leaderboardOne, setLeaderboardOne] = useState<LeaderboardEntry[]>([]);
  const [leaderboardTwo, setLeaderboardTwo] = useState<LeaderboardEntry[]>([]);
  const [leaderboardThree, setLeaderboardThree] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchLeaderboardOne = async () => {
      const leaderboardOneRef = collection(db, "leaderboardOne");
      const leaderboardOneQuery = query(leaderboardOneRef, orderBy("time", "asc"));
      const leaderboardOneSnapshot = await getDocs(leaderboardOneQuery);
      const leaderboardOneEntries: LeaderboardEntry[] = leaderboardOneSnapshot.docs.map((doc) => doc.data() as LeaderboardEntry);
      setLeaderboardOne(leaderboardOneEntries);
    };

    const fetchLeaderboardTwo = async () => {
      const leaderboardTwoRef = collection(db, "leaderboardTwo");
      const leaderboardTwoQuery = query(leaderboardTwoRef, orderBy("time", "asc"));
      const leaderboardTwoSnapshot = await getDocs(leaderboardTwoQuery);
      const leaderboardTwoEntries: LeaderboardEntry[] = leaderboardTwoSnapshot.docs.map((doc) => doc.data() as LeaderboardEntry);
      setLeaderboardTwo(leaderboardTwoEntries);
    };

    const fetchLeaderboardThree = async () => {
      const leaderboardThreeRef = collection(db, "leaderboardThree");
      const leaderboardThreeQuery = query(leaderboardThreeRef, orderBy("time", "asc"));
      const leaderboardThreeSnapshot = await getDocs(leaderboardThreeQuery);
      const leaderboardThreeEntries: LeaderboardEntry[] = leaderboardThreeSnapshot.docs.map((doc) => doc.data() as LeaderboardEntry);
      setLeaderboardThree(leaderboardThreeEntries);
    };

    fetchLeaderboardOne();
    fetchLeaderboardTwo();
    fetchLeaderboardThree();
  }, []);

  return (
    <LeaderboardWrapper>
      <h1>Leaderboard!</h1>
      <h2>Leaderboard One</h2>
      <LeaderboardTable>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardOne.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </LeaderboardTable>
      <h2>Leaderboard Two</h2>
      <LeaderboardTable>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardTwo.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </LeaderboardTable>
      <h2>Leaderboard Three</h2>
      <LeaderboardTable>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardThree.map((entry, index) => (
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
  margin: 0 auto;;
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