import React, { useEffect, useState } from "react";

const MovieFilter = ({ movies, setMovies, filtered, setFiltered }) => {
  const [filteredMovieGenre, setFilteredMovieGenre] = useState();

  const getFilteredMovieGenreValue = (e) => {
    const selected = e.target.value;

    setFilteredMovieGenre(selected);

    if (selected === "все") {
      setMovies(movies);
    } else {
      const selectedMovieGenre = movies.filter(
        (movie) => movie.genre === selected
      );

      setFiltered(selectedMovieGenre);
    }
  };

  useEffect(() => {
    setFiltered(movies);
  }, [movies]);
  console.log(filtered, "jhjkhkj");

  return (
    <select value={filteredMovieGenre} onChange={getFilteredMovieGenreValue}>
      <option value="все">все</option>
      <option value="романтика">романтика</option>
      <option value="мультики">мультики</option>
      <option value="боевики">боевики</option>
      <option value="драма">драма</option>
    </select>
  );
};

export default MovieFilter;
