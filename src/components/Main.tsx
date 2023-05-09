// Main.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Gameboards from "../pages/Gameboards";
import { GameboardOne } from "../pages/Gameboards/GameboardOne";
import { GameboardTwo } from "../pages/Gameboards/GameboardTwo";
import GameboardThree from "../pages/Gameboards/GameboardThree";
import Leaderboard from "../pages/Leaderboard";

const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Gameboards />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/the-temptation-of-saint-anthony" element={<GameboardOne />} />
        <Route path="/the-garden-of-earthly-delights" element={<GameboardTwo />} />
        <Route path="/the-last-judgement" element={<GameboardThree />} />
      </Routes>
    </div>
  );
};

export default Main;