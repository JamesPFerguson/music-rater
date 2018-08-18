import React from 'react';
import ReviewsListContainer from 'react';
import ReviewForm from './reviewForm';

export default class Home extends React.Component {

    render() {
        return (
            <div>
            <ReviewForm/>
            <ReviewsListContainer/>
            </div>
        )
    }
}
