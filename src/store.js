// store.js
import { createStore } from 'redux';
import favoritesReducer from './favorites';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('favorites');
    if (serializedState === null) {
      return []; // Return an empty array as the default initial state
    }
    const parsedState = JSON.parse(serializedState);
    return Array.isArray(parsedState) ? parsedState : [];
  } catch (err) {
    return []; // Return an empty array on error
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
  favoritesReducer,
  loadState(), // Load initial state from localStorage
);

store.subscribe(() => {
  saveState(store.getState()); // Save state to localStorage on every state change
});

export default store;
