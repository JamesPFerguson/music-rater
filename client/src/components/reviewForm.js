import React from 'react';

export default class ReviewForm extends React.Component {

    constructor(props) {

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

        this.setState({ submitted: true });
        // const { dispatch } = this.props;

        // dispatch(userActions.login(username, password))
    }

    render() {
        return (
            <div className="review-form">
            <h3> Add a review </h3>

            <form name="add-review" onSubmit={this.handleSubmit}>

            <label>Username</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />

            <label>album</label>
            <input type="text" name="album" value={album} onChange={this.handleChange} />

            <label>artist</label>
            <input type="text" name="artist" value={artist} onChange={this.handleChange} />

            <label>rating</label>
            <input type="text" name="rating" value={rating} onChange={this.handleChange} />

            <label>review</label>
            <input type="textarea" name="content" value={content} onChange={this.handleChange} />

            </form>
            </div>
        )
    }

}