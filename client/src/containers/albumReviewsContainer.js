import React from 'react';
import Review from '../components/review';
import { bindActionCreators } from 'redux';
import {fetchAlbumReviews} from '../actions/albumReviewsActions'
import { connect } from 'react-redux'
import AlbumReviews from '../components/albumReviews';
import Album from '../components/album'

class AlbumReviewsContainer extends React.Component {

    constructor(props) {
        super();

        this.state = {
            album_reviews: []
        }
    }

    componentDidMount() {
        this.props.fetchAlbumReviews(this.props.match.params.id)
    }

    render() {
       let album = null
        if (this.props.album_reviews.album_reviews.length > 0) {
            album = this.props.album_reviews.album_reviews[0].album
        }
            return (
                <div className="albumReviewsContainer">
                <Album album={album} />
                <AlbumReviews album_reviews={this.props.album_reviews.album_reviews} />
                </div>
            )
    }

}

const mapStateToProps = (state) => {
    return {
        album_reviews: state.album_reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchAlbumReviews: fetchAlbumReviews
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumReviewsContainer)