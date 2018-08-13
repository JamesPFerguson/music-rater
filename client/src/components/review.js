import React from 'react';
import {Link} from 'react-router-dom';
export const Review = (
  review_id,
  rating,
  content,
  album,
  artist,
  user
) => {
    return (
      {debugger}
      <div className="review">
      <div className="review-album-title">

      <Link to={`/albums/${album.id}`}>{album.title}</Link>
       {/* by: <Link to={`/artists/${artist.id}`}{artist.name}</Link> -- {rating}/5  */}
       </div>
      <br/>
      <br/>
      <img src={album.art_url} alt="album art"/>
      <div className="review-user">
      Reviewed by: <Link to={`/users/${user.id}`}>{user.username}</Link>
      </div>
      <div className="review-text">{content}</div>
      </div>
    )

}
