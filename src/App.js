import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import requests from "./request";
import Header from "./components/Header";
import Trending from "./components/main_page/Trending";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Trending fetchingUrl={requests.fetchTrending} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
