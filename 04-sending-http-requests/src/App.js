import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const BASE_URL = 'https://swapi.dev/api/';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovies() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BASE_URL}films`);

      if (!res.ok) throw new Error('Something went wrong⛔');

      const data = await res.json();
      const newData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovies(newData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <p>No movie data found.</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
