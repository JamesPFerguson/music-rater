
export function fetchReviews() {

    return (dispatch) => {
        return fetch('http://localhost:3000/reviews/1')
            .then(res => res.json())
            .then(response => dispatch({type: 'FETCH_REVIEWS', reviews: response})
        );
    }
}

export function addReview(reviewData) {

    return (dispatch) => {
        return fetch('http://localhost:3000/reviews/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => dispatch({type: 'ADD_REVIEW', review: response})
        );
    }
}