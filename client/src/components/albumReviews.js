import React from 'react';
import User from './user';

export default class AlbumReviews extends React.Component {

    componentDidMount() {
        
    }


    render() {
        if (this.props.album_reviews) {
            const formattedReviews = this.props.album_reviews.map((review, index) => {
                return (
                    <div id={index}>
                        <AlbumReview key={index.toString()} rating={review.rating} content={review.content} />
                    </div>
                )
            })
        return (
            <Album album={this.props.album} />
        )
    }

    }
    
}