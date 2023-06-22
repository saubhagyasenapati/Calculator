import React from "react";
import phone from "../assets/phone.png";
import person from "../assets/person.png";
import working from "../assets/working.png";
import circle from "../assets/circle.png";
import arrow from "../assets/arrow.png";
import Secured from "../assets/Secured.png";
import Unsecured from "../assets/Unsecured.png";

const Offers = () => {
  const offer = [
    {
      title: "Secured Loans",
      description:
        "Unlock funds using your property's value with our easy Loan Against Property. Enjoy competitive rates and flexible terms. Apply now with Rupee Boss!",
      imageUrl: Secured,
    },
    {
      title: "Unsecured Loans",
      description:
        "Unlock funds using your property's value with our easy Loan Against Property. Enjoy competitive rates and flexible terms. Apply now with Rupee Boss!",
      imageUrl: Unsecured,
    },
  ];
  return (
    <div className="offer">
      <div className="offermain">
        <div className="titlediv">
          <p className="title">MSME Loans</p>
        </div>
      </div>
      <div className="offercards">
            <div className="card">
              <div className="img">
                <img src={offer[0].imageUrl} alt="" />
              </div>
              <div className="content">
                <p className="title">{offer[0].title}</p>
                <p className="subtitle">{offer[0].description}</p>
              </div>
              <div className="buttonoffer">
                <a href="https://www.rupeeboss.com/business-loan" target="_blank" rel="noopener noreferrer">Check <img src={arrow} alt="" /></a>  
              </div>
                
            </div>
            <div className="card">
              <div className="img">
                <img src={offer[1].imageUrl} alt="" />
              </div>
              <div className="content">
                <p className="title">{offer[1].title}</p>
                <p className="subtitle">{offer[1].description}</p>
              </div>
            
              <div class="dropdown">
              <div className="buttonoffer">
                <a >Check <img src={arrow} alt="" /></a>  
              </div>
          <div class="dropdown-content">
            <a href="https://www.rupeeboss.com/loan-against-property" target="_blank">LAP/Residential/Commercial</a>
            <a href="https://www.rupeeboss.com/home-loan" target="_blank">Home Loans</a>
            <a href="https://www.rupeeboss.com/working-capital-emi-calculator" target="_blank">Working Capital</a>
          </div>
        </div>
            </div>
         
       
      </div>
    </div>
  );
};

export default Offers;
