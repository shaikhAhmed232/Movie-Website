import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./request";
import Header from "./components/Header";
import Movies from "./components/main_page/Movies";
import TvSeries from "./components/main_page/TvSeries";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Movies
                fetchingUrl={requests.fetchMovies}
                fetchGenresList={requests.fetchMovieGenresList}
              />
            }
          />
          <Route
            path="/tvseries"
            element={
              <TvSeries
                fetchingUrl={requests.fetchTvSeries}
                fetchGenresList={requests.fetchTvGenresList}
              />
            }
          />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
