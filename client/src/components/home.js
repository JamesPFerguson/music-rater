import React from 'react';
import ReviewsListContainer from './ReviewList/ReviewsListContainer';
import ReviewForm from './ReviewList/ReviewForm';
import { connect } from 'react-redux';
import { toggleForm } from '../actions/homeActions';
import { bindActionCreators } from 'redux';

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleForm(this.props.clicked.clicked)
    }


    render() {
        if (this.props.clicked.clicked === true) {
            return (
                <div>
                    <button onClick={this.handleClick}>Hide Review Form</button>
                    <ReviewForm/>
                    <ReviewsListContainer/>
                </div>
            )
        }
        else if (this.props.clicked.clicked === false) {
            return (
            <div>
                <button onClick={this.handleClick}>Add a Review</button>
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
    return bindActionCreators({
        toggleForm: toggleForm
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
