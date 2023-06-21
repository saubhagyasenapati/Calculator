// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import CalculatorPage from "./Pages/CalculatorPage";
import ContactUs from "./Pages/ContactUs";
import HomePage from "./Pages/HomePage";
import MediaPage from "./Pages/MediaPage";
import Footer2 from "./component/Footer2";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/media" element={<MediaPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/calculator" element={<CalculatorPage/>} />
        </Routes>
        <Footer2/>
      </Router>
    </>
  );
}

export default App;
