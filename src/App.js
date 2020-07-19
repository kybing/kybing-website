import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  const [date, setDate] = useState(String(new Date));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to KYBING 
        </h2>
      </header>
      <div className="members">
        <h3>Board of Directors</h3>
        <ul>Uday Sravan Kumar Kamineni</ul>
        <ul>Amarendhar Ganji</ul>
        <ul>Anusha Patil</ul>
        <ul>Kalyan Pavan Kumar Kamineni</ul>
        <ul>Saritha Madala</ul>
      </div>
      <div>{date}</div>
      <button 
        onClick={() => {
          setDate(String(new Date));
        }}
      >
        Update Date
      </button>
    </div>
  );
}

export default App;
