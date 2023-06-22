// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Footer2 from "./component/Footer2";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import AnimatedRoute from "./component/AnimatedRoute";

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
      <AnimatedRoute/>
        <Footer2/>
      </Router>
    </>
  );
}

export default App;
