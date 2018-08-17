export default function reviewsReducer(state = {
    // loading: false,
    // loaded: false,
    reviews: []
    }, action) {
    switch (action.type) {
        // case 'LOADING_POSTS':
        //     return Object.assign({}, state, { loading: true, loaded: false })
        case 'ADD_REVIEW':
            const review = Object.assign({}, action.review)
            return { reviews: state.reviews.concat(review) }
        case 'FETCH_REVIEWS':
            return {  reviews: action.reviews}
           // loading: false, loaded: true,
        default:
            return state;
    }
}