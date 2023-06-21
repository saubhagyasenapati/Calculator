import React from "react";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="homeText">
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
            <Link to="/calculator">
              <button className="loanButton">Loan Calculator</button>
            </Link>
          </div>
        </div>
        <div className="lowersec">
          <div className="info">
            <p className="num">2943</p>

            <p className="text">Disbursals Done</p>
          </div>
          <hr />
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
