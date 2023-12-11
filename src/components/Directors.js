import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director, index) => {
    return (
      <div key={index}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  )
}

export default Directors;
