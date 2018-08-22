import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import './css/bootstrap-grid.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {Review} from './components/review';
// import ReviewContainer from './containers/reviewContainer';
// import { Router, Route, Link, NavLink} from 'react-router-dom';
import ReviewForm from './components/reviewForm';
import ReviewsListContainer from './containers/reviewsListContainer';
import Home from './components/home'
import AlbumReviewsContainer from './containers/albumReviewsContainer';
import ArtistAlbumsContainer from './containers/artistAlbumsContainer';
import NavBar from './components/navBar'

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
         <NavBar />
         <br/><br/>
            <Route exact path="/" component={Home} />
            <Route exact path="/albums/:id" component={AlbumReviewsContainer} />
            <Route exact path="/artists/:id" component={ArtistAlbumsContainer} />
            <Route exact path="/reviews/new" component={ReviewForm} />
         </div>
       </Router>
    );
  }
}

export default App;
