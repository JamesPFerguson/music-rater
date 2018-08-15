export default function manageReviews(state = {
    reviews: []
    }, action) {
    switch (action.type) {
        case 'ADD_REVIEW':
            const review = Object.assign({}, action.review)
            return { reviews: state.reviews.concant(review) }
        default:
            return state;
    }
}