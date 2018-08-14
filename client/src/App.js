import React, { Component } from 'react';
import './App.css';
import Artist from './components/artists';
// import {Review} from './components/review';
import ReviewContainer from './containers/reviewContainer';
// import { Router, Route, Link, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <br/><br/>
        <Artist/>
        <ReviewContainer/>
      </div>
    );
  }
}

export default App;
