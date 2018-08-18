export default function albumReviewsReducer(state = {
    artist_albums: []
    }, action) {
    switch (action.type) {
        case 'FETCH_ARTIST_ALBUMS':  
        return {artist_albums: action.artist_albums}
        default:
            return state;
    }
}