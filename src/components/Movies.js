import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
