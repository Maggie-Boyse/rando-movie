import "../movieForm/movieForm.scss";
// import { API_URL } from "../../utils/api";
// import { Link } from "react-router-dom";

const Form = () => {
  return (
    <section className="form">
      <h2 className="form__main-title">Add a new movie!</h2>
      <div className="form__input-fields">
        <input className="form__title" placeholder="title"></input>
        <input className="form__year" placeholder="year"></input>
        <input className="form__duration" placeholder="duration"></input>
        <textarea
          className="form__description"
          placeholder="description"
        ></textarea>
        <input className="form__link" placeholder="link"></input>
      </div>
    </section>
  );
};

export default Form;
