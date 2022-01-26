import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=galaxy`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Search searchMovies={searchMovies}></Search>
      {loading ? <Preloader></Preloader> : <Movies movies={movies}></Movies>}
    </main>
  );
}

export { Main };
