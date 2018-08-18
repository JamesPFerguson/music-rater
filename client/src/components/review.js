import React from 'react';
import Album from './album'
import User from './user';
import AlbumReview from './albumReview';

export default class Review extends React.Component {

  render() {

    if (this.props.user) {

    return (
      
      <div className="review card">
        <Album album={this.props.album} />
        <AlbumReview user={this.props.user} 
        rating={this.props.rating} content={this.props.content} />
      </div>
    )
   }
    else {
      return null

    }
  }

}
