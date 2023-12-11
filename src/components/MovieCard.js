import React,{useState, useEffect} from "react";
import { Typography, Card, CardContent, CardMedia, CardActions, Button, Rating } from "@mui/material";
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites, addUserRating } from '../../src/favorites';

const MovieCard = ({ movie, addToFavorites, removeFromFavorites, addUserRating, isFavoritesPage, userRatings, favorites }) => {
  const { id, title, poster_path, overview, release_date, vote_average } = movie;
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

  const isInFavorites = favorites.some((favMovie) => favMovie.id === id);

  const [addedToFavorites, setAddedToFavorites] = useState(isInFavorites);

  useEffect(() => {
    setAddedToFavorites(isInFavorites);
  }, [isInFavorites]);
  
  const handleAddToFavorites = () => {
    addToFavorites(movie);
    setAddedToFavorites(true)
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
    setAddedToFavorites(true)
  };

  const handleRatingChange = (event, newValue) => {
    addUserRating(id, newValue);
  };

  return (
    <Card sx={{ display: 'flex', alignSelf: 'start', border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', width: '95vw' }}>
      <CardMedia
        component="img"
        alt={title}
        image={poster_path ? posterBaseUrl + poster_path : "placeholder-image-url"}
        sx={{ width: '150px', height: '225px', objectFit: 'cover', borderRadius: '5px', marginRight: '10px' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Typography variant="h6" color='primary' sx={{ fontSize: '1.5em', marginBottom: '5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: '600' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '0.9em', marginBottom: '3px', color: '#e57373' }}>
          Release Date: {release_date}
        </Typography>
        <Typography sx={{ fontSize: '0.9em', marginBottom: '3px', color: '#4fc3f7' }}>
          Rating: {vote_average}
        </Typography>
        <Typography sx={{ fontSize: '0.9em', color: '#333', flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {overview}
        </Typography>
        <Typography component="legend">
        <Rating
          name={`userRating-${id}`}
          value={userRatings && userRatings[id] ? userRatings[id] : 0}
          precision={0.5}
          onChange={handleRatingChange}
        />
        </Typography>
        <CardActions>
          {isFavoritesPage ? (
            <Button onClick={handleRemoveFromFavorites} color="secondary">
              Remove from Favorites
            </Button>
          ) : (
            addedToFavorites ? (
              <Typography color="primary">Added</Typography>
            ) : (
              <Button onClick={handleAddToFavorites} color="primary">
                Add to Favorites
              </Button>
            )
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
  userRatings: state.favorites.userRatings,
});

export default connect(mapStateToProps, { addToFavorites, removeFromFavorites, addUserRating })(MovieCard);
