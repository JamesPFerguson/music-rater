import React from 'react';
import ReviewsListContainer from '../containers/reviewsListContainer';
import ReviewForm from './reviewForm';
import { connect } from 'react-redux';
import { renderForm } from '../actions/homeActions';

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            clicked: false
        }
    }

    render() {

        if (this.props.clicked === true) {
            return (
                <div>
                    <ReviewForm/>
                    <ReviewsListContainer/>
                </div>
            )
        }
        else {
            return (
            <div>
                <button onClick={this.props.renderform}>Add a Review</button>
                <ReviewForm/>
                <ReviewsListContainer/>
            </div>
            )
        } 
            
    }

}

const mapStateToProps = (state) => {
    return {
        clicked: state.clicked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderForm: () => {
            dispatch(renderForm())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
