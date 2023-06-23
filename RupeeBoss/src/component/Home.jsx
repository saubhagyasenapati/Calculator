import React from "react";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Home = ({calculator,setCalculator}) => {
  return (
    <div className="home">
      <div className="homeText">
        <div className="CIBIL">
          <a href="https://cibilrank.cibil.com/rupeeboss" target="_blank">Get 30% OFF On CIBIL Commercial report by clicking here.</a>
        </div>
        <div>
          <div>
            <p className="title">
              Empowering small businesses with Quick loans:
            </p>
          </div>
          <div>
            <p className="subtitle">
              Unlock your business potential with our tailored fintech
              solutions.
            </p>
          </div>
          <div>
           
              <button className="loanButton" onClick={()=>setCalculator(true)}>Loan Calculator</button>
           
          </div>
        </div>
        <div className="lowersec">
          <div className="info">
            <p className="num">2943</p>
            <p className="text">Disbursals Done</p>
          </div>
          <div className="hrr"></div>
          <div className="info">
            <p className="num">$1M+</p>

            <p className="text">Happy Customers</p>
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
