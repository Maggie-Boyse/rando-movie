import "../homePage/homePage.scss";
import Header from "../../components/Header/Header";
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <MovieForm />
      <MovieList />
    </div>
  );
}

export default HomePage;
