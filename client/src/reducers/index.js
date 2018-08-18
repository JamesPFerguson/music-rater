import { combineReducers } from 'redux';
import reviewsReducer from './reviews';
import albumReviewsReducer from './albumReviews';
import artistsReducer from './artists';

const rootReducer = combineReducers({
    reviews: reviewsReducer, album_reviews: albumReviewsReducer, artist_albums: artistsReducer
  })

 export default rootReducer 