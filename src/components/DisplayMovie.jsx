import React, { useState, useEffect } from "react";
import MovieInfo from "./main_page/MovieInfo";

import MovieCard from "./MovieCard";
import movieData from "../requestData";
import Pagination from "./Pagination";
import Genres from "./Genres";
import useGenres from "../CustomHooks/useGenres";

const DisplayMovie = ({ fetchingUrl, fetchGenresList }) => {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const genresForUrl = useGenres(selectedGenres);
  const [movieInfo, setMovieInfo] = useState({});
  const [displayInfo, setDisplayInfo] = useState(false);

  const sendMovieIdToMovieInfo = (movieId) => {
    const movieDetail = movies.map((m) => {
      if (m.id === movieId) {
        return m;
      } else {
        return null;
      }
    });
    const movie_info = Object.assign({}, ...movieDetail);
    setMovieInfo(movie_info);
    setDisplayInfo(true);
  };

  useEffect(() => {
    setLoading(true);
    movieData(
      `${fetchingUrl}&page=${page + 1}&with_genres=${genresForUrl}`,
      setTotalPages,
      setMovies
    );
    setLoading(false);
  }, [fetchingUrl, page, genresForUrl]);

  return (
    <>
      <div className="container">
        <Genres
          fetchGenresList={fetchGenresList}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <div className="row justify-content-center py-md-3 py-0">
          {loading ? (
            <h3>Loading ...</h3>
          ) : movies ? (
            movies.map((movie) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-8 py-3"
                  onClick={() => sendMovieIdToMovieInfo(movie.id)}
                >
                  <MovieCard
                    {...movie}
                    title={movie.title ? movie.title : movie.name}
                    release_date={
                      movie.release_date
                        ? movie.release_date
                        : movie.first_air_date
                    }
                    poster_path={
                      movie.poster_path
                        ? movie.poster_path
                        : movie.backdrop_path
                    }
                    key={movie.id}
                    type={movie.name ? "tv" : "movie"}
                  />
                </div>
              );
            })
          ) : (
            <h1>No movies found!!</h1>
          )}
        </div>
        <Pagination total_pages={totalPages} setPage={setPage} />
      </div>
      {displayInfo ? (
        <MovieInfo
          movieId={movieInfo.id}
          setDisplayInfo={setDisplayInfo}
          mediaType={movieInfo.title ? "movie" : "tv"}
          setMovieInfo={setMovieInfo}
        />
      ) : null}
    </>
  );
};

export default DisplayMovie;
