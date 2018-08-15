


export function fetchReviews() {
    fetch('http://localhost:3000/reviews/1')
    .then(res => res.json())
    .then(response => dispatch({type: 'FETCH_REVIEWS', reviews: reviews})}
    );
}