// Nav.tsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav: React.FC = () => {

  return (
    <NavWrapper>
      <nav>
        <div>
          <img src={require("../images/hieronymus-bosch-portrait.jpg")} alt="Portrait of Hieronymus Bosch" />
          <h1 id="appName">Where's Hieronymus?</h1>
        </div>
        <ul className="nav-links">
          <Link className="nav-link" to='/'>
            <li>Gameboards</li>
          </Link>
          <Link className="nav-link" to='/leaderboard'>
            <li>Leaderboard</li>
          </Link>
        </ul>
      </nav>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
    width: 100vw;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 25px;
    border: 2px solid black;
    border-radius: 10%;
    margin: 0 3px;
  }

  h1 {
    font-size: 1.2rem;
    margin: 0;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.1);
  }
`

export default Nav;

