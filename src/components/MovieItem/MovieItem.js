import "../MovieItem/MovieItem.scss";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/api";
// import { useEffect } from "react";
import axios from "axios";

function MovieItem({ movie }) {
  const { movieId } = useParams;
  const deleteMovie = async (movieId) => {
    try {
      await axios.delete(`${API_URL}/horror/${movieId}`);
      console.log("Item deleted:", movieId);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <section className="movie-item" key={movie.id}>
      <h3 className="movie-item__title">{movie.title}</h3>
      <div className="movie-item__year-duration">
        <p className="movie-item__year">{movie.year}</p>
        <p className="movie-item__duration">{movie.duration}</p>
      </div>
      <button
        className="movie-item__button"
        onClick={() => deleteMovie(movieId)}
      >
        delete
      </button>
    </section>
  );
}

export default MovieItem;
