import React, { useState } from "react";
import Home from "../component/Home";
import Feature from "../subcomponent/Feature";
import Features from "../component/Features";
import Offers from "../component/Offers";
import Msme from "../component/Msme";
import Work from "../component/Work";
import Footer from "../component/Footer";
import Footer2 from "../component/Footer2";
import { motion, useScroll } from "framer-motion";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Calculator from "../component/Calculator";
import Partner from "../component/Partner";

const HomePage = () => {
  const [calculator, setCalculator] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!calculator&&
       
        <Home calculator={calculator} setCalculator={setCalculator}/>
      
    }
    {calculator&&
     <Fade delay={300} >
     <Calculator calculator={calculator} setCalculator={setCalculator}/>
     </Fade>
    }
      <Fade delay={300}>
        <Features />
      </Fade>
      <Fade delay={300}>
        <Offers />
      </Fade>
      <Fade delay={200}>
        <Msme />
      </Fade>
      <Slide delay={300}>
        <Work />
      </Slide>
      <Fade delay={300}>
      <Partner/>
      </Fade>
      <Fade delay={300}>
        <Footer />
      </Fade>
    
    </motion.div>
  );
};

export default HomePage;
