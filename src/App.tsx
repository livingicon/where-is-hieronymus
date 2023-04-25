// App.tsx

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Nav from "./components/Nav";
import Main from "./components/Main";
// import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    display: grid;
    grid-template-rows: auto 1fr;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
        <Router>
          <div>
            <Nav />
            <Main />
          </div>
        </Router>
    </>
  );
}

export default App;