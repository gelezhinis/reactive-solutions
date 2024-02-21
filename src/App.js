import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { useContext } from 'react';
import Home from './components/Home/Home';
import Code from './components/Code/Code';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext } from './context';

import './App.css';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // const appRef = useRef(null);
  return (
    <div
      style={{
        backgroundImage: darkMode
          ? 'linear-gradient(50deg, #333, #222)'
          : 'linear-gradient(50deg, #ccc, #fff)',
        color: darkMode && 'white'
      }}
      className="background"
    >
      <Toggle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
