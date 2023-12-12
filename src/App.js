import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import FavoritesPage from "./components/FavoritesPage";
import SearchPage from "./components/SearchPage";
import MovieDetails from "./components/MovieDetails";
import { Provider } from 'react-redux';
import store from './store';
import LoginComponent from "./components/LoginComponent";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [favorites, setFavorites] = useState([])
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginComponent />} />
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
