import React from 'react';
import { bindActionCreators } from 'redux';
import {fetchAlbumReviews} from '../../actions/albumReviewsActions'
import { connect } from 'react-redux'
import AlbumReviews from './AlbumReviews';
import Album from '../Album'

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
        if (album !== null) {
            return (
                <div className="albumReviewsContainer row">
                    <div className="col-4">
                        <Album album={album} />
                        <br/>
                       <div> {album.page_views} </div>
                    </div>
                    <div className="col-7">
                        <AlbumReviews album_reviews={this.props.album_reviews.album_reviews} />
                    </div>
                </div>
            )
        }
        else {
            return null
        }
           
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