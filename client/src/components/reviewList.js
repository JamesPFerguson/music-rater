import React from 'react';
import Review from './review'

    const ReviewsList = ({reviews}) => {

        if (reviews) {
            const reviews = reviewsList.map((review, index) => {
                return (
                    <div id={index}>
                        <Review review_id={review.review_id} rating={review.rating} content={review.content} album={review.album} user={review.user} />
                    </div>
                )
            })

            return (
                <div className="reviewsList"> {posts} </div>
            )
       

        } else {
            return null;
        }
    }

    export default ReviewsList
