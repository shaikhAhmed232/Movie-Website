import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import movieData from "../requestData";
import Pagination from "./Pagination";

const DisplayMovie = ({ fetchingUrl }) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  useEffect(() => {
    setLoading(true)
    movieData(`${fetchingUrl}&page=${page+1}`, setMovies, setTotalPages);
    setLoading(false)
  }, [fetchingUrl,page]);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-md-5 py-0">
          {
            loading ? <h3>Loading ...</h3> : (movies ? (
              movies.map((movie) => {
                return (
                  <div className="col-lg-3 col-sm-4 col-6 py-3">
                    <MovieCard
                      {...movie}
                      title={movie.title ? movie.title : movie.name}
                      release_date = {movie.release_date ? movie.release_date : movie.first_air_date}
                      poster_path = {movie.poster_path ? movie.poster_path : movie.backdrop_path} 
                      key={movie.id} type={movie.name ? "Tv" : "Movie"}
                    />
                  </div>
                );
              })
            ) : (
              <h1>No movies found!!</h1>
            ))
          }
        </div>
        <Pagination total_pages={totalPages} setPage={setPage} />
      </div>
    </>
  );
};

export default DisplayMovie;
