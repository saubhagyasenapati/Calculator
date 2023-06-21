import React from "react";
import Home from "../component/Home";
import Feature from "../subcomponent/Feature";
import Features from "../component/Features";
import Offers from "../component/Offers";
import Msme from "../component/Msme";
import Work from "../component/Work";
import Footer from "../component/Footer";
import Footer2 from "../component/Footer2";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Features />
      <Offers />
      <Msme />
      <Work />
      <Footer />
    
    </div>
  );
};

export default HomePage;
