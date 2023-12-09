import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import FavoritesPage from "./components/FavoritesPage";
import SearchPage from "./components/SearchPage";
import MovieDetails from "./components/MovieDetails";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [favorites, setFavorites] = useState([])
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchPage setFavorites={setFavorites} />} />
          <Route exact path="/movie/:id" element={<MovieDetails />} />
          <Route exact path="/favorites" element={<FavoritesPage favorites={favorites} />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
