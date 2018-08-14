import React from 'react';
import Album from './album'
export default class Review extends React.Component {

  render() {
    return (
      
      <div className="review">
        <Album album={this.props.album} />
      <div className="review-user">
        Reviewed by: <a href={`/users/${this.props.user.id}`}>{this.props.user.username}</a> {this.props.rating}/5
      </div>
        <span className="review-text">{this.props.content}</span>
      </div>
    )
  }

}
