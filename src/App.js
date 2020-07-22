<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, About } from './containers'
=======
import React from 'react';
import logo from './logo.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to KYBING 
        </h2>
      </header>
      <Link to="/about">About</Link>
      <div class="members">
        <h3>Board of Directors</h3>
        <ul>Uday Sravan Kumar Kamineni</ul>
        <ul>Amarendhar Ganji</ul>
        <ul>Anusha Patil</ul>
        <ul>Kalyan Pavan Kumar Kamineni</ul>
        <ul>Saritha Madala</ul>
      </div>
    </div>
  );
}
>>>>>>> 44a7b1206fb1b596fde61fbbba17f6b2a5ff9ccd

import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  </Router>
)

export default App
