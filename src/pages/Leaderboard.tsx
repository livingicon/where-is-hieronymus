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
      <LeaderboardContainer>
        <LeaderboardSection>
          <h2>Board One</h2>
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
        </LeaderboardSection>
        <LeaderboardSection>
          <h2>Board Two</h2>
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
        </LeaderboardSection>
        <LeaderboardSection>
          <h2>Board Three</h2>
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
        </LeaderboardSection>
      </LeaderboardContainer>
    </LeaderboardWrapper>
  );
};

const LeaderboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: calc(100vh - 60px); 
  margin: 0 auto;
  background-color: #52525b;
  padding: 10px;
`;

const LeaderboardContainer = styled.div`
  display: flex;
  height: 95%;
`;

const LeaderboardSection = styled.div`
  flex: 1;
  margin-right: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;

const LeaderboardTable = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  background-color: orange;

  th {
    text-align: left;
  }

  td,
  th {
    // padding: 5px 10px;
    // border: 1px solid black;
  }
`;

export default Leaderboard;

