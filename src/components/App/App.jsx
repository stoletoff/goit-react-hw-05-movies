import { NavLink, Routes, Route } from 'react-router-dom';
import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>HomePage</div>}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>
      </Routes>
    </Container>
  );
};
