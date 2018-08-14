import React from 'react';
export default class Review extends React.Component {

  componentWillMount() {
    debugger
  }

  render() {
    return (
      
      <div className="review">
      <div className="review-album-title">

      <a href={`/albums/${this.props.album.id}`}>{this.props.album.title}</a>
       by: <a href={`/artists/${this.props.album.artist_id}`}>{this.props.album.artist_name}</a> -- {this.props.rating}/5 
       </div>
      <br/>
      <br/>
      <img src={this.props.album.art_url} alt="album art"/>
      <div className="review-user">
      Reviewed by: <a href={`/users/${this.props.user.id}`}>{this.props.user.username}</a>
      </div>
      <div className="review-text">{this.props.content}</div>
      </div>
    )
  }

}
