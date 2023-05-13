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
          <div className="boardHeader">
            <h2>Board One</h2>
          </div>
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
          <div className="boardHeader">
            <h2>Board Two</h2>
          </div>
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
          <div className="boardHeader">
            <h2>Board Three</h2>
          </div>
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
  align-items: flex-start;
  height: calc(100vh - 60px); 
  margin: 0 auto;
  background-color: #52525b;
  padding: 10px;
`;

const LeaderboardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 95%;
  width: 100%; 
`;

const LeaderboardSection = styled.div`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  min-width: 310px; 
  max-width: 400px;
  overflow-y: auto; /* Enable vertical scrolling */

  .boardHeader {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #ca8a04;
    text-align: center;
    color: white;
  }

  h2 {
    margin: 0px;
  }
`;

const LeaderboardTable = styled.table`
  border-collapse: collapse;
  margin: 10px;

  td,
  th {
    font-size: 20px;
    padding: 5px;
  }
`;

export default Leaderboard;