import React from 'react';

const Review = ({
  album,
  user,
  rating,
  content
}) => {
    return (
      <div className="review">
      <span className="review-album-title">{album.title} -- {rating}/5 </div>
      <img src={album.art_url}/>
      <div className="review-user">
      Reviewed by: <Link to={`/users/${user.id}`}>{user.username}</Link>
      </div>
      <div className="review-text">{content}</div>
      </div>
    )

}
