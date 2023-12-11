import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Stack, Box, Typography, Paper, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../../src/favorites';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ m: "16px" }}>
          <Link to="/" className="favorites-link">
            <Paper
              elevation={3}
              sx={{
                display: "inline-block",
                padding: "8px",
                borderRadius: "4px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <Typography variant="h6" color="info">
                Homepage
              </Typography>
            </Paper>
          </Link>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Box sx={{ m: "16px" }} className="favorites-page">
          <Typography variant="h4">My Favorites</Typography>
          <Box className="favorites-list">
            {favorites.length === 0 ? (
              <Typography variant="body1">No Favorites</Typography>
            ) : (
              favorites.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFavoritesPage={true}
                  removeFromFavorites={() => handleRemoveFromFavorites(movie.id)}
                />
              ))
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FavoritesPage;
