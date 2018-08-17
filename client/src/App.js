import React, { Component } from 'react';
import './App.css';
// import {Review} from './components/review';
// import ReviewContainer from './containers/reviewContainer';
// import { Router, Route, Link, NavLink} from 'react-router-dom';
import ReviewForm from './components/reviewForm';
import ReviewsListContainer from './containers/reviewsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <br/><br/>
      <ReviewForm/>
      <ReviewsListContainer />
      </div>
    );
  }
}

export default App;
