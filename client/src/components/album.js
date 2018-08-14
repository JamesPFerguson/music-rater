import React from 'react';

export default class Album extends React.Component {


    render() {
        return (
            <div className="album">
            <a href={`/albums/${this.props.album.id}`}>{this.props.album.title}</a> by: {this.props.album.artist_name}
            <br/>
            <img className="review-album-art" src={this.props.album.art_url} alt="album art"/>
            </div>
        )
    }
}