import axios from "axios";

const reqInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default reqInstance;
