import React from 'react'
import Calculator from '../component/Calculator'
import "../styles/Calculator.css"
import Features from "../component/Features";
import Offers from "../component/Offers";
import Msme from "../component/Msme";
import Work from "../component/Work";
import Footer from "../component/Footer";

const CalculatorPage = () => {
  return (
    <div>  
     <Calculator/>
     <Features />
      <Offers />
      <Msme />
      <Work />
      <Footer />
    </div>
  )
}

export default CalculatorPage
