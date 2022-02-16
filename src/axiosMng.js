import axios from "axios";

const reqInstance = axios.create({
  baseURL: "",
});

export default reqInstance;
