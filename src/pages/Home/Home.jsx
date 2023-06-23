import { useEffect, useState } from 'react';
import { HomeTitle } from './Home.styled';
import { fetchTrendingMovies } from 'components/Services/get-trending/get-trending';
import Filmlist from 'components/FilmList/Filmlist';
import Loader from 'components/Loader/Loader.styled';
import ImgErorView from 'components/ImgErrorView/ImgErrorView';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchTrendingMovies();
        setTrendingMovies([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);
  return (
    <>
      <HomeTitle>The most popular movies today</HomeTitle>
      <div>
        <Filmlist movies={trendingMovies} />
      </div>
      {loading && <Loader />}
      {error && <ImgErorView error={error} />}
    </>
  );
};
export default Home;
