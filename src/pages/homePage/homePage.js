import "../homePage/homePage.scss";
import Header from "../../components/header/header";
import MovieForm from "../../components/movieForm/movieForm";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <MovieForm />
    </div>
  );
}

export default HomePage;
