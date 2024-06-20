import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "../src/pages/homePage/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
