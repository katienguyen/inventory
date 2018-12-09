import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { NavBar } from './components/NavBar';
// import { Router, Route, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            {/* <OriginalNavBar /> */}
            {/* <HomePage /> */}
            <Route exact path='/' component={ HomePage }></Route>
            <Route exact path='/login' component={ LoginPage }></Route>
          </div>
      </Router>
    );
  }
}

export default App;
