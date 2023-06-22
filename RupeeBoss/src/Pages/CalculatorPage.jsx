import React from 'react'
import Calculator from '../component/Calculator'
import "../styles/Calculator.css"
import Features from "../component/Features";
import Offers from "../component/Offers";
import Msme from "../component/Msme";
import Work from "../component/Work";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
const CalculatorPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >  
     <Calculator/>
     <Features />
      <Offers />
      <Msme />
      <Work />
      <Footer />
    </motion.div>
  )
}

export default CalculatorPage
