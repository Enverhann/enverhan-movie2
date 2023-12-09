import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box,Typography } from "@mui/material";

const MovieDetails = () => {
    const {id}=useParams()
    const[movie,setMovie]=useState({})

    useEffect(() => {
        const fetchMovieDetails = async () => {
          try {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${id}?api_key=090adc2af78685ae1ee0053d742d0405`
            );
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setMovie(data);
          } catch (error) {
            console.error('Error fetching movie details:', error.message);
          }
        };
    
        fetchMovieDetails();
      }, [id]);

    return (  
      <Box className="movie-details" sx={{ m: "16px" }}>
      <Typography variant="h4">Movie Details</Typography>
      <Typography variant="h5">{movie.title}</Typography>
      <Typography variant="body1">{movie.plot}</Typography>
      <Typography variant="body2">Release Date: {movie.release_date}</Typography>
      {/* Add more details later */}
    </Box>
    );
}
 
export default MovieDetails;