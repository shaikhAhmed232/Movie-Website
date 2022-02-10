import React from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ poster_path, title, release_date, vote_average, type }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`${base_url}${poster_path}`}
        alt={title}
      ></img>
      <div className="card-body">
        <a href="#">
          <h6 className="card-title">{title}</h6>
          <span>
            Release Date: {release_date}
          </span>
          <div className="rating">
            <span>{type}</span>
            <span>Rating: {vote_average}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
