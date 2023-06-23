import axios from 'axios';

const API_KEY = '3dd9518c386fd347d5f1ac2580a699a4';
const TiME_WINDOW = 'week';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/${TiME_WINDOW}?api_key=${API_KEY}&page=1`
  );

  return data;
};
