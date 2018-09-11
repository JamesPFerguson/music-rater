export default function reviewsReducer(state = {
    reviews: []
    }, action) {
    switch (action.type) {
        case 'ADD_REVIEW':
            // const review = Object.assign({}, action.review)
            return { reviews: state.reviews.concat(action.review) }
        case 'FETCH_REVIEWS':
            return {  reviews: action.reviews}
        default:
            return state;
    }
}