import React from 'react';
import { bindActionCreators } from 'redux';
import {fetchArtistAlbums} from '../actions/artistActions'
import { connect } from 'react-redux'
import Artist from '../components/artist';
import Albums from '../components/albums'

class ArtistAlbumsContainer extends React.Component {

    constructor(props) {
        super();

        this.state = {
            artist_albums: []
        }
    }

    componentDidMount() {
        this.props.fetchArtistAlbums(this.props.match.params.id)
    }

    render() {
            return (
                <div className="albumReviewsContainer">
                <Artist album={this.props.artist_albums.artist} />
                <Albums albums={this.props.artist_albums.artist_albums} />
                </div>
            )
    }

}

const mapStateToProps = (state) => {
    return {
        artist_albums: state.artist_albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchArtistAlbums: fetchArtistAlbums
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistAlbumsContainer)