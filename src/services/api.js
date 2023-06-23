import axios from 'axios';
import PropTypes from 'prop-types';
const API_KEY = '3dd9518c386fd347d5f1ac2580a699a4';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

function fetchMoviesWithId(id) {
  const response = axios.get(
    `/movie/${id}?api_key=${API_KEY}`
  );
  return response;
}

function fetchMoviesWithQuery(query) {
  const response = axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response;
}

function fetchCast(id) {
  const response = axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response;
}

function fetchReview(id) {
  const response = axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response;
}

const api = {
  getTrendingMovies,
  fetchMoviesWithId,
  fetchMoviesWithQuery,
  fetchCast,
  fetchReview,
};

export default api;

fetchMoviesWithId.propTypes = {
  id: PropTypes.number.isRequired,
};

fetchMoviesWithQuery.propTypes = {
  query: PropTypes.string.isRequired,
};

fetchCast.propTypes = {
  id: PropTypes.number.isRequired,
};

fetchReview.propTypes = {
  id: PropTypes.number.isRequired,
};
