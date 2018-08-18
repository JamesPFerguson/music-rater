import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {Review} from './components/review';
// import ReviewContainer from './containers/reviewContainer';
// import { Router, Route, Link, NavLink} from 'react-router-dom';
import ReviewForm from './components/reviewForm';
import ReviewsListContainer from './containers/reviewsListContainer';
import Home from './components/home'
import AlbumReviewsContainer from './containers/albumReviewsContainer';
import albumReviewsContainer from './containers/albumReviewsContainer';

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/albums/:id" component={AlbumReviewsContainer} />
            <Route exact path="/artists/:id" component={ArtistContainer} /> */}
            <Route exact path="/" component={albumReviewsContainer} />
            <div> p </div>
         </div>
       </Router>
    );
  }
}

export default App;
