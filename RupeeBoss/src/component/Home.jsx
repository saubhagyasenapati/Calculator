import React from "react";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Home = ({calculator,setCalculator}) => {
  return (
    <div className="home">
      <div className="homeText">
      <a href="https://cibilrank.cibil.com/rupeeboss" target="_blank" className="CIBIL">
        <div >
         Get 30% OFF On CIBIL Commercial report by clicking here.
        </div>
        </a>
        <div>
          <div>
            <p className="title">
            Empowering MSMEs with Quick Loans
            </p>
          </div>
          <div>
            <p className="subtitle">
              Unlock your business potential with our tailored fintech
              solutions.
            </p>
          </div>
          <div>
           <Link to="/calculator"> <button className="loanButton">Loan Calculator</button></Link>
             
           
          </div>
        </div>
        <div className="lowersec">
          <div className="info">
            <p className="num">16000 cr+</p>
            <p className="text">Loan Disbursals Done</p>
          </div>
          <div className="hrr"></div>
          <div className="info">
            <p className="num">18K+</p>

            <p className="text">MSME & Retail Customers</p>
          </div>
        </div>
      </div>
      <div className="HomeImg">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
