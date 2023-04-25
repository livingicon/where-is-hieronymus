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
    /* add any other styles you want to apply to the html and body elements here */
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
            {/* <Footer /> */}
          </div>
        </Router>
    </>
  );
}

export default App;
