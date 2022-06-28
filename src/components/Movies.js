import React from "react";
import { movies } from "../data";

function Movies() {

  // reutrning a seperate div for each movie object in the array.
  // And then, creating different li's for each genre within each div. 
  // Good shit for figuring this out on your own imo. 
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
      return <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <ul>
          {(movie.genres).map(genre => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    })}
  </div>)
}

export default Movies;
