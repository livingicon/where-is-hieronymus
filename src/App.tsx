// App.tsx

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Main 
        />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
