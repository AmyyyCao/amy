/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import './App.css';

export default function Body() {
  const [showText, setShowText] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <>
      <div className="App-body">
        <img src="/pfp.jpeg" alt="Profile" style={{maxWidth: '12vw', marginBottom: 20}}/>
        {showText && (
          <div>Hi, I&apos;m Amy
            <div className="typing-cursor">|</div>
          </div>
        )}
      </div>
      <div className="App-body-small">
            I am a Computer Engineering graduate from the University of Toronto and have previously interned as a Software Engineer at Facebook and Boss Insights.
            With my experience in frontend web and mobile development, I am constantly seeking new opportunities for career growth and to make a positive
            impact in the industry.
      </div>
      <div className="App-body-icons">
        <a href="https://www.linkedin.com/in/amyyycao">
          <img src="/linkedin.png" alt="clickable"/>
        </a>
        <a href="mailto:amyyy.cao@mail.utoronto.ca">
          <img src="/mailbox.png" alt="clickable"/>
        </a>
      </div>

      <div className="App-body-icons">
        <div style={{marginBottom: '10px'}}>
          What do you call this:
          <div className="App-body-code-block">
             [&apos;hip&apos;, &apos;hip&apos;]
          </div>
          <button onClick={() => setShowJoke(true)} className="joke-button">Reveal</button>
        </div>
      </div>
      <div className="App-body-icons">
        {showJoke && <div>
          Hip, Hip, Hooray!
        </div>}
      </div>
    </>
  );
}
