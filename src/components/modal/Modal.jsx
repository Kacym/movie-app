import React from "react";
import "./Modal.css";
import NewMovieForm from "../movie/newMovieForm/NewMovieForm";

const Modal = ({ movies, closeModalHandler, setMovies }) => {
  return (
    <div className="modal">
      <div onClick={closeModalHandler} className="backdrop"></div>
      <div className="formContainer">
        <NewMovieForm
          closeModalHandler={closeModalHandler}
          movies={movies}
          setMovies={setMovies}
        />
      </div>
    </div>
  );
};

export default Modal;
