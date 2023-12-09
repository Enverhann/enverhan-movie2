import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

const MovieList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm) {
        return;
      }
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=090adc2af78685ae1ee0053d742d0405&query=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Movies data:", data);
        setMovies(data.results);
      } catch (error) {
        console.error("Error while fetching movies", error.message);
      }
    };
    fetchMovies();
  }, [searchTerm]);
  const addToFavorites = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      console.log("Movie is already in favorites");
      return;
    }

    setFavorites((prevFavorites) => [...prevFavorites, movie]);
    console.log("Added to favorites:", movie);
  };
  return (
    <Stack spacing={4} sx={{ m: "16px" }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          addToFavorites={addToFavorites}
        />
      ))}
    </Stack>
  );
};

export default MovieList;
