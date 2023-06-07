import React from 'react';

const MovieList = ({ movies }) => {
  if (!movies) {
    return <div> </div>;
  }

  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container d-flex flex-column m-3" key={index} style={{ margin: '0.75rem' }}>
  <img src={movie.Poster} alt="movie" style={{ marginRight: '1rem' }} />
  <div className="movie-info" style={{ marginTop: '0.5rem' }}>
    <p className="release-year" style={{ marginBottom: '0.5rem' }}>Release Year: {movie.year}</p>
    <p className="genre">Genre: {movie.genre}</p>
  </div>
</div>

      ))}  
    </>
  );
};

export default MovieList;
