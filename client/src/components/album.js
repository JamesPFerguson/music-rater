import React from 'react';

export default class Album extends React.Component {


    render() {
        if (this.props.album !== null) {
            let albumArt = null
            if (this.props.album.art_url === "") {
                albumArt = <img className="review-album-art" src="https://media2.fishtank.my/app_themes/raaga/assets/images/default-album-art.png" alt="album art"/>
            }
            else {
                albumArt = <img className="review-album-art" src={this.props.album.art_url} 
                    onError="this.onError=null;this.src='https://media2.fishtank.my/app_themes/raaga/assets/images/default-album-art.png'"
                    alt="album art"/>
            }
                return (
                    <div className="">
                        <strong><a href={`/albums/${this.props.album.id}`}>{this.props.album.title}</a> by: </strong><label className="artist-name">
                        <a href={`/artists/${this.props.album.artist_id}`}>{this.props.album.artist_name}</a></label>
                        <br/>
                        {albumArt}
                    </div>
                )
        } else {
            return null
        }
    }
}