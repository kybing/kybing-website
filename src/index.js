<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import App from './App'
import { Header, Footer } from './containers'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
    </Switch>
    </Router>
>>>>>>> 44a7b1206fb1b596fde61fbbba17f6b2a5ff9ccd
  </React.StrictMode>,
  document.getElementById('kybing-web-app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
