// favorites.js

// Action Types
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const ADD_USER_RATING = 'ADD_USER_RATING';

// Action Creators
export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

export const addUserRating = (movieId, rating) => ({
  type: ADD_USER_RATING,
  payload: { movieId, rating },
});

// Reducer
const favoritesReducer = (state = { favorites: [], userRatings: {} }, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload),
      };
    case ADD_USER_RATING:
      return {
        ...state,
        userRatings: {
          ...state.userRatings,
          [action.payload.movieId]: action.payload.rating,
        },
      };
    default:
      return state;
  }
};

export default favoritesReducer;
