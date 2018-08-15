export default function albumReviewsReducer(state = {
    album_reviews: []
    }, action) {
    switch (action.type) {
        case 'FETCH_ALBUM_REVIEWS':  
        return {album_reviews: state.album_reviews}
        default:
            return state;
    }
}