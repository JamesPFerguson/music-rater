import React from 'react';
import { connect } from 'react-redux';
import {addReview} from '../../actions/reviewActions'
import { bindActionCreators } from 'redux';

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

    render() {
        const {username, album, art_url, artist_name, rating, content} = this.state;
        return (
            <div className="review-form-container mx-auto">
                <div> <h3 className="col-sm-4"> Add a review </h3> <br/>
                    <div className="review-form">
                        <form name="add-review" onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Username: </label>
                                <div className="col-sm-2">
                                    <input type="text" size="25" className="form-control" ref="username" name="username" value={username} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Album: </label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control" ref="album" name="album" value={album} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Album Art Image URL:</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" ref="art_url" name="art_url" value={art_url} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Artist: </label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control" ref="artist_name" name="artist_name" value={artist_name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Rating: </label>
                                <div className="col-sm-1">
                                    <input type="text" className="form-control" ref="rating" name="rating" value={rating} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Review: </label>
                                <div className="col-sm-10">
                                    <textarea rows="8" cols="80" className="form-control" ref="content" name="content" value={content} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-7">
                                <input type="submit" name="Add Review" value="Add Review" />
                                <br/><br/>
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