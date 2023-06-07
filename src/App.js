import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';

const App = () => {
  // State variables
  
  const [movies, setMovies] = useState([]); // Stores the list of movies
  const [searchValue, setSearchValue] = useState(''); // Stores the search input value

  // Function to fetch movies based on search value
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e827f436`;

    const response = await fetch(url);
    const responseJson = await response.json();
  
  let movie_list = responseJson.Search;
  
  for(let m in movie_list){
    let genre_url = `http://www.omdbapi.com/?i=${movie_list[m]['imdbID']}&apikey=e827f436`;
    let response_genre = await fetch(genre_url);
    let response_genreData = await response_genre.json();
    movie_list[m]['genre'] = response_genreData['Genre'];
    movie_list[m]['year'] = response_genreData['Year'];
    }
    if (responseJson.Search) {
      setMovies(movie_list);
    }
  };

  // useEffect hook to fetch movies when the search value changes
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // Render the component
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        {/* MovieListHeading component */}
        <MovieListHeading heading="Movies" />

        {/* SearchBox component */}
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        {/* MovieList component for displaying movies */}
        <MovieList
          movies={movies}
        />
      </div>
	  <div>
	
	  <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ color: 'gray', fontSize: '20px' }}> <strong> Made by Ahmed Shaikh</strong></p>
      </footer>
	  </div>
    </div>
	
  );
};
export default App;