import React, { useState, useEffect } from "react";
import reqInstance from "../axiosMng";
import requests from "../request";

const trendingData = async () => {
  const { data } = await reqInstance.get(requests.fetchTrending);
  return data.results;
};
const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const data = trendingData();
    setTrending(data);
  }, []);
  return (
    <>
      {trending.map((movie) => {
        return <p>{movie.original_title}</p>;
      })}
    </>
  );
};

export default Trending;
