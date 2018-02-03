import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/pokemon" component={ Pokemon } />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
