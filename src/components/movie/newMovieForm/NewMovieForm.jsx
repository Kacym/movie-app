import React, { useState } from "react";
import "./NewMovieForm.css";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

const NewMovieForm = ({ closeModalHandler, movies, setMovies }) => {
  const [movieNameValue, setMovieNameValue] = useState("");
  const [movieImgValue, setMovieImgValue] = useState("");
  const [movieRatingValue, setMovieRatingValue] = useState(0);
  const [movieGenreValue, setMovieGenreValue] = useState("");

  const getMovieNameValue = (e) => {
    setMovieNameValue(e.target.value);
    console.log(movieNameValue);
  };

  const getMovieImgValue = (e) => {
    setMovieImgValue(e.target.value);
  };

  const getMovieRatingValue = (e) => {
    setMovieRatingValue(e.target.value);
  };

  const getMovieGenreValue = (e) => {
    setMovieGenreValue(e.target.value);
  };

  const addNewMovieHandler = (e) => {
    e.preventDefault();

    if (movieNameValue && movieImgValue && movieGenreValue) {
      const newMovie = {
        id: Math.floor(Math.random() * 200000),
        title: movieNameValue,
        url: movieImgValue,
        rating: movieRatingValue,
        genre: movieGenreValue,
      };
      setMovies([...movies, newMovie]);
      console.log(newMovie);
      setMovieNameValue("");
      setMovieImgValue("");
      setMovieGenreValue("");
      closeModalHandler();
    }
  };
  return (
    <form className="newMovieForm">
      <Input placeholder="movie title" onChange={getMovieNameValue} />
      <Input placeholder="movie url" onChange={getMovieImgValue} />
      <Input placeholder="movie rating" onChange={getMovieRatingValue} />
      <select
        className="movie_genre"
        value={movieGenreValue}
        onChange={getMovieGenreValue}
      >
        <option value="все">все</option>
        <option value="романтика">романтика</option>
        <option value="мультики">мультики</option>
        <option value="боевики">боевики</option>
      </select>
      <Button
        onClick={addNewMovieHandler}
        style={{ backgroundColor: "orange", padding: "10px" }}
      >
        Add
      </Button>
    </form>
  );
};

export default NewMovieForm;
