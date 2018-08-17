import React from 'react';
import Review from './review'

export default class ReviewList extends React.Component {

    render() {

            if (this.props.reviews) {
            const formattedReviews = this.props.reviews.map((review, index) => {
                return (
                    <div id={index}>
                        <Review key={index.toString()} review_id={review.review_id} rating={review.rating} content={review.content} album={review.album} user={review.user} />
                    </div>
                )
            })

            return (
                <div className="reviewsList"> {formattedReviews} </div>
            )
            } 
            else {
                return null;
            }

    }
}
