import React from 'react';
import User from './user';

export default class AlbumReviews extends React.Component {

    componentWillMount() {
        
    }


    render() {
        return (
            <div className="album-reviews">
            <User user={this.props.user} />
            <label> Gives this album a </label> {this.props.rating}/5
            <div> {this.props.content} </div>
            </div>
        )
    }
}