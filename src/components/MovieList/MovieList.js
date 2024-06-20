import "../MovieList/MovieList.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";

function MovieList() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [movieList, setMovieList] = useState([]);

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

  return (
    <div className="movie-list">
      {movieData.map((movie) => (
        <MovieItem key={movie.id} movie={movie} movieToLoad={movieToLoad} />
      ))}
    </div>
  );
}

export default MovieList;
