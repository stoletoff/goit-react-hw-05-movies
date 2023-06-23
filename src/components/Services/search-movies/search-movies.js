import axios from 'axios';

const API_KEY = '3dd9518c386fd347d5f1ac2580a699a4';

export const fetchSearchMovie = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return data;
};