/* eslint-disable require-jsdoc */
import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Thoughts from './Thoughts';
import Visuals from './Visuals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/amy' element={<Body />} />
          <Route exact path='/thoughts' element={<Thoughts />} />
          <Route exact path='/visuals' element={<Visuals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
