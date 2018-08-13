import React from 'react';

export default const Review = ({
  review_id,
  user_id,
  rating,
  content,
  album
}) => {
    return (
      <div className="review">
      <div className="review-album-title">

      <Link to={`/albums/${album.id}`}>{album.title}</Link>
       by: <Link to={`/artists/${album.artist_id}`} -- {rating}/5 </div>
      <br>
      <br>
      <img src={album.art_url}/>
      <div className="review-user">
      Reviewed by: <Link to={`/users/${user_id}`}>{user.username}</Link>
      </div>
      <div className="review-text">{content}</div>
      </div>
    )

}
