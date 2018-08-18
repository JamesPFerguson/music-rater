import React from 'react';
import Review from '../components/review';

class albumReviewsContainer extends React.Component {

    constructor(props) {
        super();

        this.state = {
            album_reviews: []
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="albumReviewsContainer">
            <AlbumReviews album_reviews={this.props.album_reviews} />
            </div>
        )
    }
}