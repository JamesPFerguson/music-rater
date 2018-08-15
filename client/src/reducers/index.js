import { combineReducers } from 'redux';
import reviewsReducer from './reviews';
import albumReviewsReducer from './albumReviews';

export const rootReducer = combineReducers({
    reviews: reviewsReducer, album_reviews: albumReviewsReducer
  })