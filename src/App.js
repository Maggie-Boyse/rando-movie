import "./App.scss";
import Header from "../src/components/header/header";
import Form from "./components/movieForm/movieForm";

function App() {
  return (
    <div className="home-page">
      <Header />
      <Form />
    </div>
  );
}

export default App;
