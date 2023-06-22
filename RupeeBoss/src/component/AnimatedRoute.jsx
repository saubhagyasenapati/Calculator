import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import AboutPage from '../Pages/AboutPage';
import CalculatorPage from '../Pages/CalculatorPage';
import ContactUs from '../Pages/ContactUs';
import MediaPage from '../Pages/MediaPage';
import HomePage from '../Pages/HomePage';
function AnimatedRoute() {
    const location =useLocation();
  return (
    <AnimatePresence>
   <Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/media" element={<MediaPage/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/calculator" element={<CalculatorPage/>} />
  </Routes>
    </AnimatePresence>
 
  )
}

export default AnimatedRoute
