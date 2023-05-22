/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import Weather from './Weather';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="App-header" style={{'margin-top': 20}}>
          <>
            <li>visuals</li>
            <li><Weather /></li>
          </>
        </div>
      </nav>
    </header>
  );
}
