export function fetchReviews() {

    return (dispatch) => {
        return fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(response => {dispatch({type: 'FETCH_REVIEWS', reviews: response})}
        )
    }
}