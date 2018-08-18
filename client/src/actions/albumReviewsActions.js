export function fetchAlbumReviews(id) {
    return (dispatch) => {
        return fetch(`http://localhost:3000/albums/${id}`)
            .then(res => res.json())
            .then(response => {dispatch({type: 'FETCH_ALBUM_REVIEWS', album_reviews: response})}
        )
    }
}