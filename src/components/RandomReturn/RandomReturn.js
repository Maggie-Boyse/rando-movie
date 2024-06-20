import "../RandomReturn/RandomReturn.scss";

function RandomReturn({ movie }) {
  return (
    <section className="random-return" key={movie.id}>
      <h3 className="random-return__title">{movie.title}</h3>
      <div className="random-return__year-duration">
        <p className="random-return__year">{movie.year}</p>
        <p className="random-return__duration">{movie.duration}</p>
      </div>
    </section>
  );
}

export default RandomReturn;
