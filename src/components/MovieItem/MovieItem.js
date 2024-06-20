import "../MovieItem/MovieItem.scss";

function MovieItem({ movie }) {
  return (
    <section className="movie-item" key={movie.id}>
      <h3 className="movie-item__title">{movie.title}</h3>
      <div className="movie-item__year-duration">
        <p className="movie-item__year">{movie.year}</p>
        <p className="movie-item__duration">{movie.duration}</p>
      </div>
    </section>
  );
}

export default MovieItem;
