import React from 'react';
import AlbumReview from './albumReview';

export default class AlbumReviews extends React.Component {

    render() {
        if (this.props.album_reviews) {
            const formattedReviews = this.props.album_reviews.map((review, index) => {
                return (
                    <div id={index}>
                        <AlbumReview key={index.toString()} rating={review.rating} content={review.content} user={review.user} />
                    </div>
                )
            })
            return (
                <div> {formattedReviews} </div>
            )
        } else {
            return null
        }

    }
    
}