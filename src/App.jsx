import "./App.css";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="SOS-MWASI-React/" element={<Home />} />
        <Route path="SOS-MWASI-React/about" element={<About />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
