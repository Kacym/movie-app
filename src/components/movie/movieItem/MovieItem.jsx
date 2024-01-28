import React from "react";
import "./MovieItem.css";
import Button from "../../UI/button/Button";

const MovieItem = ({ movie }) => {
  return (
    <li className="movie_item">
      <div className="movie_img">
        <img src={movie.url} alt={movie.title} />
      </div>
      <div className="movie_info">
        <h2>{movie.title}</h2>
        <span className="movie_rating">{movie.rating}/5</span>
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
