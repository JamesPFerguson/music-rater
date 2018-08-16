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

        this.baseState = this.state

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetForm = () => {
        this.setState(this.baseState)
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // let reviewData = Object.assign({}, this.state)
        // this.props.addReview(this.state)
        // for (const key of Object.keys(this.refs)) {
        //     this.refs[key].value = '';
        // }
        this.resetForm();
       


    }

    render() {
        const {username, album, artist_name, rating, content} = this.state;
        return (
            <div className="review-form">
            <h3> Add a review </h3>

            <form name="add-review" onSubmit={this.handleSubmit}>
            <br/><br/>
            <label>Username: </label>
            <input type="text" ref="username" name="username" value={username} onChange={this.handleChange} />
            <br/><br/>
            <label>Album: </label>
            <input type="text" ref="album" name="album" value={album} onChange={this.handleChange} />
            <br/><br/>
            <label>Artist: </label>
            <input type="text" ref="artist_name" name="artist_name" value={artist_name} onChange={this.handleChange} />
            <br/><br/>
            <label>Rating: </label>
            <input type="text" ref="rating" name="rating" value={rating} onChange={this.handleChange} />
            <br/><br/>
            <label>Review: </label>
            <br/>
            <textarea rows="8" cols="80"  ref="content" name="content" value={content} onChange={this.handleChange} />
            <br/><br/>
            <input type="submit"/>

            </form>
            </div>
        )
    }

}