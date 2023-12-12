// store.js
import { createStore, combineReducers } from 'redux';
import favoritesReducer from './favorites';
import authReducer from './auth';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  auth:authReducer,
  // Add other reducers here if needed
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('favorites');
    if (serializedState === null) {
      return { favorites: [], userRatings: {} }; // Return an empty state object
    }
    const parsedState = JSON.parse(serializedState);
    return parsedState;
  } catch (err) {
    return { favorites: [], userRatings: {} }; // Return an empty state object on error
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('favorites', serializedState);
  } catch (err) {
    // Handle errors while saving state
  }
};

const store = createStore(
  rootReducer,
  loadState(), // Load initial state from localStorage
);

store.subscribe(() => {
  saveState(store.getState()); // Save state to localStorage on every state change
});

export default store;
