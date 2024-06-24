import "../MovieList/MovieList.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import RandomReturn from "../RandomReturn/RandomReturn";

function MovieList() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);

  const fetchMovies = async () => {
    const movieReq = await axios.get(`${API_URL}/horror`);
    const movieData = movieReq.data;
    setMovieData(movieData);
    setMovieList(movieData);
  };
  useEffect(() => {
    fetchMovies();
  }, [movieId]);
  if (movieData.length === 0) {
    return <p>... Loading movie list ...</p>;
  }
  const movieToLoad = movieId ? movieId : movieList[0].id;

  // const generateRandomQuote = () => {
  //   const randomIndex = Math.floor(Math.random() * quotes.length)
  //   setRandomQuote(quotes[randomIndex])
  //   console.log(quotes[randomIndex]);
  // }
  const fetchRandomMovie = async () => {
    const randomMovieReq = await axios.get(`${API_URL}/horror`);
    const randomMovie = randomMovieReq.data;
    const randomIndex = Math.floor(Math.random() * movieData.length);
    setRandomMovie(randomMovie[randomIndex]);
  };
  useEffect(() => {
    fetchRandomMovie();
  }, [movieId]);
  if (movieData.length === 0) {
    return <p>... Loading random movie ...</p>;
  }
  const randomMovieToLoad = movieId ? movieId : movieList[0].id;

  return (
    <div className="movie-list">
      {movieData.map((movie) => (
        <div>
          <MovieItem 
          key={movie.id} 
          movie={movie} 
          movieToLoad={movieToLoad} />
          <RandomReturn
            key={movie.id}
            randomMovie={randomMovie}
            randomMovieToLoad={randomMovieToLoad}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
