import React from 'react';
import Album from './album'
import User from './user';
import AlbumReview from './albumReview';

export default class Review extends React.Component {

  render() {

    if (this.props.user) {

    return (
      
      <div className="review clearfix row">
        <div className="album-art p-2 col-md-4">
          <Album album={this.props.album} />
        </div>
        <div className="mx-auto p-2 col-md-7">
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
