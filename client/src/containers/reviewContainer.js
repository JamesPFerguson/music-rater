import React from 'react';
import {Review} from '../components/review'
import { Router, Route, Link} from 'react-router';
export default class ReviewContainer extends React.Component {

constructor() {
    super();

    this.state = {
        review: {}
    }
}

componentWillMount() {
    fetch('http://localhost:3000/reviews/1')
    .then(res => res.json())
    .then(response =>  this.setState({review: response}));
}

render() {
    return (
        <Review {...this.state.review} />
    )
}

}