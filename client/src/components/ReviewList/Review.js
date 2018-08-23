import React from 'react';
import Album from '../Album';
import AlbumReview from '../AlbumReviews/AlbumReview';

export default class Review extends React.Component {

  render() {

    if (this.props.user) {

    return (
      
      <div className="review row mx-auto">
        <div className="p-2 col-4">
          <Album album={this.props.album} />
        </div>
        <div className="col-8">
          <AlbumReview user={this.props.user} rating={this.props.rating} content={this.props.content} />
        </div>
      </div>
    )
   }
    else {
      return null

    }
  }

}
