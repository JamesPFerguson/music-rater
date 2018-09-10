import React from 'react';
import { bindActionCreators } from 'redux';
import {fetchArtistAlbums} from '../../actions/artistActions';
import { connect } from 'react-redux';
// import Artist from '../components/artist';
import Albums from './Albums';
import Artist from '../Artist';

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
                <h1><Artist name={this.props.artist_albums.artist_albums.name} /></h1>
                <Albums albums={this.props.artist_albums.artist_albums} />
                <div><strong>Artist Views: {this.props.artist_albums.artist_albums.page_views}</strong></div>
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