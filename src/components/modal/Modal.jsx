import React from "react";
import styles from "./Modal.module.scss";
import NewMovieForm from "../movie/newMovieForm/NewMovieForm";

const Modal = ({ movies, closeModalHandler, setMovies }) => {
  return (
    <div className={styles.modal}>
      <div onClick={closeModalHandler} className={styles.backdrop}></div>
      <div className={styles.formContainer}>
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
