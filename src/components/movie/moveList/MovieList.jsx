import React from "react";
import MovieItem from "../movieItem/MovieItem";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
