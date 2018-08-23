import { combineReducers } from 'redux';
import reviewsReducer from './ReviewsReducer';
import albumReviewsReducer from './AlbumReviewsReducer';
import artistsReducer from './ArtistAlbumsReducer';
import homeReducer from './HomeReducer';

const rootReducer = combineReducers({
    reviews: reviewsReducer, album_reviews: albumReviewsReducer, artist_albums: artistsReducer, clicked: homeReducer
  })

 export default rootReducer