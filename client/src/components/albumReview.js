import React from 'react';
import User from './user';

export default class AlbumReview extends React.Component {

    render() {
        return (
            <span className="album-review">
            <div>
                <User user={this.props.user} />
                <label> gives this album: </label> {this.props.rating}/5
                </div>
                <span> {this.props.content} </span>
            </span>
        )
    }
}