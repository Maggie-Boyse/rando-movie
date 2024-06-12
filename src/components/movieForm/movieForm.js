import "../movieForm/movieForm.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function MovieForm() {
  const [movieTitle, setMovieTitle] = useState("");
  const handleMovieTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const [movieYear, setMovieYear] = useState("");
  const handleMovieYearChange = (e) => {
    setMovieYear(e.target.value);
  };

  const [movieDuration, setMovieDuration] = useState("");
  const handleMovieDurationChange = (e) => {
    setMovieDuration(e.target.value);
  };

  const [movieLink, setMovieLink] = useState("");
  const handleMovieLinkChange = (e) => {
    setMovieLink(e.target.value);
  };

  const [movieDescription, setMovieDescription] = useState("");
  const handleMovieDescriptionChange = (e) => {
    setMovieDescription(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const newMovie = {
        title: movieTitle,
        year: movieYear,
        duration: movieDuration,
        link: movieLink,
        description: movieDescription,
      };
      await axios.post(`${API_URL}/horror`, newMovie);
    } catch (error) {
      console.log(error, "cannot post right now");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <h2 className="form__main-title">Add a new movie!</h2>
      <div className="form__input-fields">
        <input
          className="form__title"
          placeholder="title"
          onChange={handleMovieTitleChange}
        ></input>
        <input
          className="form__year"
          placeholder="year"
          onChange={handleMovieYearChange}
        ></input>
        <input
          className="form__duration"
          placeholder="duration"
          onChange={handleMovieDurationChange}
        ></input>
        <input
          className="form__link"
          placeholder="link"
          onChange={handleMovieLinkChange}
        ></input>
        <textarea
          className="form__description"
          placeholder="description"
          onChange={handleMovieDescriptionChange}
        ></textarea>
        <button className="form__button" type="submit">
          ADD MOVIE
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
