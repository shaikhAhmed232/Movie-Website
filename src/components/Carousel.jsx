import React from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

const Carousel = ({ name, profile_path }) => {
  return (
    <div className="card w-100 h-100">
      <div className="img-container">
        <img src={`${base_url}${profile_path}`} alt="" />
      </div>
      <div className="name">
        <h6>{name}</h6>
      </div>
    </div>
  );
};

export default Carousel;
