import React from 'react';

export default class ReviewForm extends React.Component {

    constructor(props) {
        super();

        this.state = {
            username: '',
            rating: '',
            content: '',
            album: '',
            artist_name: '',
            art_url: '',
            submitted: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        // this.setState({ submitted: true });

        debugger
        // const { dispatch } = this.props;

        // dispatch(userActions.login(username, password))
    }

    render() {
        const {username, album, artist, rating, content} = this.state;
        return (
            <div className="review-form">
            <h3> Add a review </h3>

            <form name="add-review" onSubmit={this.handleSubmit}>
            <br/><br/>
            <label>Username: </label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
            <br/><br/>
            <label>Album: </label>
            <input type="text" name="album" value={album} onChange={this.handleChange} />
            <br/><br/>
            <label>Artist: </label>
            <input type="text" name="artist" value={artist} onChange={this.handleChange} />
            <br/><br/>
            <label>Rating: </label>
            <input type="text" name="rating" value={rating} onChange={this.handleChange} />
            <br/><br/>
            <label>Review: </label>
            <br/>
            <textarea rows="4" cols="50" name="content" value={content} onChange={this.handleChange} />
            <br/><br/>
            <input type="submit"/>

            </form>
            </div>
        )
    }

}