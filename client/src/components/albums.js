import React from 'react';
import ArtistAlbum from './artistAlbum'

export default class ReviewList extends React.Component {

    render() {
            if (this.props.albums.albums) {
                const formattedAlbums = this.props.albums.albums.map((album, index) => {
                return (
                    <div id={index} className="holder mx-auto">
                        <ArtistAlbum key={index.toString()} album={album} />
                    </div>
                )
            })
            return (
                <div className="albumsList"> {formattedAlbums} </div>
            )
            } 
            else {
                return null;
            }

    }
}