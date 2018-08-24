import React from 'react';
import { connect } from 'react-redux';
import {addReview} from '../../actions/reviewActions'
import { bindActionCreators } from 'redux';
import isUrl from 'is-url';

class ReviewForm extends React.Component {


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
        this.validInputs = this.validInputs.bind(this);
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
        this.props.addReview(this.state)
        this.resetForm();
    }

    validInputs = () => {
        let valid = true
        for (const key of Object.keys(this.state)) {
           if (this.state[key] === "") {
             valid = false
           }
        }
        if (parseInt(this.state.rating, 10) > 5 || parseInt(this.state.rating, 10) < 0 || Number.isNaN(parseInt(this.state.rating, 10)) ) {
            valid = false
        }
        if (!isUrl(this.state.art_url)) {
            valid = false
        }
        if (this.state.content.length < 100) {
            valid = false
        }
        return valid
    }

    render() {
        let errors = null
        if (!this.validInputs()) {
            errors = <span>
                    Rating must between 0 and 5
                    <br/>
                    All Fields must be filled
                    <br/>
                    An album art URL must be provided
                    <br/>
                    Review must be Longer than 100 characters
                    </span>
        }
        this.validInputs()
        const {username, album, art_url, artist_name, rating, content} = this.state;
        return (
            <div className="review-form-container ">
                <div> <h3 className=""> Add a review </h3> <br/>
                    <div className="review-form">
                        <form name="add-review" onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Username: </label>
                                <div className="col-2">
                                    <input type="text" size="25" className="form-control" ref="username" name="username" value={username} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Album: </label>
                                <div className="col-2">
                                    <input type="text" className="form-control" ref="album" name="album" value={album} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Album Art Image URL:</label>
                                <div className="col-4">
                                    <input type="text" className="form-control" ref="art_url" name="art_url" value={art_url} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Artist: </label>
                                <div className="col-3">
                                    <input type="text" className="form-control" ref="artist_name" name="artist_name" value={artist_name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Rating: </label>
                                <div className="col-1">
                                    <input type="text" size="5" className="form-control" ref="rating" name="rating" value={rating} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Review: </label>
                                <div className="col-6">
                                    <textarea rows="8" cols="50" className="col form-control" ref="content" name="content" value={content} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="p-3">
                                    {errors}
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="">
                                <input type="submit" disabled={!this.validInputs()} name="Add Review" value="Add Review" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addReview: addReview
    }, dispatch)
  }

  export default connect(null, mapDispatchToProps)(ReviewForm);