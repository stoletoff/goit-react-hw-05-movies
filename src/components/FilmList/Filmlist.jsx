import FilmListItem from 'components/FilmList/Filmlist';
import { MoviesListStyle } from './Filmlist.styled';


const Filmlist = ({ movies }) => {
  return (
    <MoviesListStyle>
      {movies.map(movie => {
        return <FilmListItem key={movie.id} movie={movie} />;
      })}
    </MoviesListStyle>
  );
};
export default Filmlist;