import "../homePage/homePage.scss";
import Header from "../../components/Header/Header";
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieList from "../../components/MovieList/MovieList";
import RandomReturn from "../../components/RandomReturn/RandomReturn";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <MovieForm />
      <RandomReturn/>
      <MovieList />
    </div>
  );
}

export default HomePage;
