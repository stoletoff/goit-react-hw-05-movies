import axios from 'axios';

const API_KEY = '3dd9518c386fd347d5f1ac2580a699a4';

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return data;
};
