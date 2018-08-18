import React from 'react';
import User from './user';

export default class AlbumReview extends React.Component {

    render() {
        return (
            <div className="album-review">
            <User user={this.props.user} />
            <label> gives this album: </label> {this.props.rating}/5
            <div> {this.props.content} </div>
            </div>
        )
    }
}