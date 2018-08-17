import React from 'react';
import { fetchReviews } from '../actions/reviewActions';
import ReviewList from '../components/reviewList';
import { connect } from 'react-redux'
import LoadingPage from '../components/loadingPage';

class ReviewsListContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        this.props.fetchReviews();
    }

    render() {
        if (this.props.reviews.loaded === true) {
            return (
             <div className="reviews-list-container">
                <ReviewList reviews={this.props.reviews.reviews}/>
                </div>
            )
        }
        else {
            return <LoadingPage />
        }
    }

}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: () => {
            dispatch(fetchReviews())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsListContainer)