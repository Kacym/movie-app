import React from "react";
import style from "./MovieItem.module.scss";
import Button from "../../UI/button/Button";

const MovieItem = ({ movie }) => {
  return (
    <li className={style.movie_item}>
      <div className={style.movie_img}>
        <img src={movie.url} alt={movie.title} />
      </div>
      <div className={style.movie_info}>
        <h2>{movie.title}</h2>
        <span className={style.movie_rating}>{movie.rating}/5</span>
        <p>{movie.genre}</p>
        <div>
          <Button
            style={{
              backgroundColor: "blue",
              padding: "10px 20px",
              marginRight: "20px",
            }}
          >
            UPDATE
          </Button>
          <Button style={{ backgroundColor: "red", padding: "10px 20px" }}>
            REMOVE
          </Button>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
