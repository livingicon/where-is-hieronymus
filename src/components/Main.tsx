// Main.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Gameboards from "../pages/Gameboards";
import Leaderboard from "../pages/Leaderboard";

const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Gameboards />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default Main;