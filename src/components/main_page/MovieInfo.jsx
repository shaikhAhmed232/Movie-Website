import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGoogle } from "@fortawesome/free-brands-svg-icons";
const base_url = "https://image.tmdb.org/t/p/original/";
const youtube_url = "https://www.youtube.com/watch";

const MovieInfo = ({
  movieId,
  displayInfo,
  setDisplayInfo,
  mediaType,
  setMovieInfo,
}) => {
  const [content, setContent] = useState({});
  const [video, setVideo] = useState();

  const fetchMovieContent = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchMovieContent();
    fetchVideo();
  }, []);

  const hideMovieInfo = (e) => {
    if (e.target.classList.contains("movie-info-background")) {
      setDisplayInfo(false);
    } else {
      return;
    }
  };
  return (
    <div className="movie-info-background" onClick={hideMovieInfo}>
      <div className="movie-info-container">
        <div className="img-container">
          <img src={`${base_url}${content.poster_path}`} alt="img" />
        </div>
        <div className="info py-sm-5 py-2 px-4">
          <h3 className="movie-title">{content.title || content.name}</h3>
          <h5 className="release-date">
            <strong>released-on</strong>:{" "}
            {content.release_date || content.release_date}
          </h5>
          <p className="adult">adult: {content.adult ? "18+" : "non-adult"}</p>
          <div className="movie-overview my-5">
            <p>
              <strong>overview</strong>: {content.overview}
            </p>
          </div>
          <div className="movie-info-buttons d-flex justify-content-center">
            <a
              href={`https://www.themoviedb.org/${mediaType}/${movieId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mx-3"
            >
              <FontAwesomeIcon icon={faGoogle} />
              <span> </span>know More
            </a>
            <a
              href={`${youtube_url}?v=${video}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger mx-3"
            >
              <FontAwesomeIcon icon={faYoutube} />
              <span> </span>Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
