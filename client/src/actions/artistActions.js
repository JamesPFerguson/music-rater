export function fetchArtistAlbums(id) {
    return (dispatch) => {
        return fetch(`http://localhost:3000/artists/${id}`)
            .then(res => res.json())
            .then(response => {dispatch({type: 'FETCH_ARTIST_ALBUMS', artist_albums: response})}
        )
    }
}