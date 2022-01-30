import React from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ poster_path, title, release_date }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`${base_url}${poster_path}`}
        alt={title}
      ></img>
      <div className="card-body text-center">
        <a href="#">
          <h5 className="card-title">{title}</h5>
          <p>
            Rlease-Date -{" "}
            <span className="font-weight-bold">{release_date}</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
