import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  if (!nowPlayingMovies || !popularMovies) {
    return null;
  }

  console.log(popularMovies);

  return (
    <div className="bg-black">
      <div className="-mt-48 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={[...popularMovies].reverse()} />
        <MovieList title={"Comedy Generes"} movies={nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={nowPlayingMovies} />
        <MovieList title={"Horror"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
