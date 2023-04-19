// Nav.tsx

import React from "react";
import { Link } from "react-router-dom";
// import './style.css';

const Nav = () => {

  return (
    <nav>
      <h1 id="appName">Where's Hieronymus?</h1>
      <ul className="nav-links">
        <Link className="nav-link" to='/'>
          <li>Gameboards</li>
        </Link>
        <Link className="nav-link" to='/leaderboard'>
          <li>Leaderboard</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;