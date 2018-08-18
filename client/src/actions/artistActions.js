export function fetchArtistAlbums(id) {
    return (dispatch) => {
        return fetch(`http://localhost:3000/artists/1`)
            .then(res => res.json())
            .then(response => {dispatch({type: 'FETCH_ARTIST_ALBUMS', artist_albums: response})}
        )
    }
}