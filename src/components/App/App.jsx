import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import Home from 'pages/Home/Home';
export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>
        <Route
          path="/movies/:moviesId"
          element={<div>Конкретный фильм</div>}
        ></Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </Container>
    
  );
};
