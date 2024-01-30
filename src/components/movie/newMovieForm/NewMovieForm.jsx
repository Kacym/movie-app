import React, { useState } from "react";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import styled from "styled-components";

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
    <NewMovieFormStyled>
      <Input placeholder="movie title" onChange={getMovieNameValue} />
      <Input placeholder="movie url" onChange={getMovieImgValue} />
      <Input placeholder="movie rating" onChange={getMovieRatingValue} />
      <MovieGenreStyled value={movieGenreValue} onChange={getMovieGenreValue}>
        <StyledOption  value="все">все</StyledOption>
        <StyledOption  value="романтика">романтика</StyledOption>
        <StyledOption  value="мультики">мультики</StyledOption>
        <StyledOption  value="боевики">боевики</StyledOption>
      </MovieGenreStyled>
      <Button
        onClick={addNewMovieHandler}
        style={{ backgroundColor: "orange", padding: "10px" }}
      >
        Add
      </Button>
    </NewMovieFormStyled>
  );
};

const NewMovieFormStyled = styled.form({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const MovieGenreStyled = styled.select({
  width: "200px",
  height: "40px",
});

const StyledOption = styled.option({
  width: "200px",
  height: "40px",
});
export default NewMovieForm;
