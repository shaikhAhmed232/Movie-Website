const { REACT_APP_API_KEY } = process.env;
const requests = {

  fetchMovies: `
  https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US`,
};

export default requests;
