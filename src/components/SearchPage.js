import React from "react";
import { useState } from "react";
import { Typography, Stack, Grid, Box, Paper } from "@mui/material";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToFavorites } from '../../src/favorites';

const SearchPage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleAddToFavorites = (movie) => {
    addToFavorites(movie)
    console.log("asdasd", movie);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Stack spacing={4} sx={{ m: "16px" }}>
          <Typography variant="h4" color="info">
            Movie Search App
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ m: "16px" }}>
          <Link to="/favorites" className="favorites-link">
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
                My Favorites
              </Typography>
            </Paper>
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <SearchBar onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <MovieList
          searchTerm={searchTerm}
          addToFavorites={handleAddToFavorites}
          favorites={props.favorites}
        />
      </Grid>
    </Grid>
  );
};

export default connect(null, { addToFavorites })(SearchPage);

