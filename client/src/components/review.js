import React from 'react';
import Album from './album'
import User from './user';
export default class Review extends React.Component {

  render() {
    return (
      
      <div className="review">
        <Album album={this.props.album} />
      <div className="review-user">
      <label>Reviewed by: </label> 
      <User user={this.props.user} />
      {this.props.rating}/5
      </div>
        <span className="review-text">{this.props.content}</span>
      </div>
    )
  }

}
