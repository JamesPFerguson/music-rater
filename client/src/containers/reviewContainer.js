import React from 'react';
import Review from '../components/review'
// import { Router, Route, Link} from 'react-router';
export default class ReviewContainer extends React.Component {

constructor() {
    super();
    this.state = {
        review_id: "",
        rating: "",
        content: "",
        album: {},
        user: {},
    }
}

componentWillMount() {

    fetch('http://localhost:3000/reviews/1')
    .then(res => res.json())
    .then(response =>  this.setState({
        review_id: response.id,
        rating: response.rating,
        content: response.content,
        album: response.album,
        user: response.user
    })
);

}

render() {
    return (
        <div>
        <Review review_id={this.state.review_id} rating={this.state.rating} content={this.state.content} album={this.state.album} user={this.state.user} />
        </div>
    )
}

}