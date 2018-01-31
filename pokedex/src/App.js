import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={ Home } />
        </Router>
      </div>
    );
  }
}

export default App;
