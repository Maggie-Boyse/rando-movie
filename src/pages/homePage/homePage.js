import "../homePage/homePage.scss";
import Header from "../../components/header/header";
import Form from "../../components/movieForm/movieForm";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Form />
    </div>
  );
}

export default HomePage;
