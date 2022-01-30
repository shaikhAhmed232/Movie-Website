import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import movieData from "../requestData";

const DisplayMovie = ({ fetchingUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieData(fetchingUrl).then(data => setMovies(data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row py-5">
          {movies ? (
            movies.map((movie) => {
              return (
                <div className="col-lg-2 col-sm-4 col-6 py-3">
                  <MovieCard
                    {...movie}
                    title={movie.title ? movie.title : movie.date}
                    key={movie.original_title}
                  />
                </div>
              );
            })
          ) : (
            <h1>No movies trending these day</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayMovie;
