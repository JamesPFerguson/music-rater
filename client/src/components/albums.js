import React from 'react';
import Album from './review'

export default class ReviewList extends React.Component {

    render() {

            if (this.props.albums) {
                const formattedAlbums = this.props.reviews.map((album, index) => {
                return (
                    <div id={index}>
                        <Album key={index.toString()} album={album} />
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