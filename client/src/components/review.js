import React from 'react';
export default class Review extends React.Component {

  render() {
    return (
      
      <span className="review">

      <span className="review-album-title">
      <a href={`/albums/${this.props.album.id}`}>{this.props.album.title}</a>
        by: <a href={`/artists/${this.props.album.artist_id}`}>{this.props.album.artist_name}</a> -- {this.props.rating}/5 
       </span>
      <br/>
      <br/>
      <img className="review-album-art" src={this.props.album.art_url} alt="album art"/>
      <span className="review-user">
      Reviewed by: <a href={`/users/${this.props.user.id}`}>{this.props.user.username}</a>
      </span>
      <span className="review-text">{this.props.content}</span>
      </span>
    )
  }

}
