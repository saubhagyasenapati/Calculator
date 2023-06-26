import React, { useState } from "react";
import phone from "../assets/phone.png";
import person from "../assets/person.png";
import working from "../assets/working.png";
import circle from "../assets/circle.png";
import Secured from "../assets/Secured.png";
import Unsecured from "../assets/Unsecured.png";
import arrow from "../assets/upperarrow.png"

const Offers = () => {
const [dropdown, setdropdown] = useState(false)
  const handleDrop=()=>{
if(dropdown===true){
  setdropdown(false)
}
else{
  setdropdown(false)
}
  }
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
                <img src={offer[1].imageUrl} alt="" />
              </div>
              <div className="content">
                <p className="title">{offer[1].title}</p>
                <p className="subtitle">{offer[1].description}</p>
              </div>
              <div className="buttonoffer">
                <a href="https://www.rupeeboss.com/business-loan" target="_blank" rel="noopener noreferrer">Check</a>  
              </div>  
            </div>
            <div className="card">
              <div className="img">
                <img src={offer[0].imageUrl} alt="" />
              </div>
              <div className="content">
                <p className="title">{offer[0].title}</p>
                <p className="subtitle">{offer[0].description}</p>
              </div>
            
              <div>
              <div className="buttonoffer" onClick={()=>setdropdown(!dropdown)}>
                <a >Check <img src={arrow} className={dropdown?"showbutton":"noshowbutton"} alt="" /> </a>  
              </div>
            </div>
            {
             <div className={dropdown?"dropdown":"nodropdown"} >
              <div>
              <a href="https://www.rupeeboss.com/loan-against-property" target="_blank">Loan Against Property</a>
              </div>
            <div>
            <a href="https://www.rupeeboss.com/home-loan" target="_blank">Home Loans</a>
            </div>
           <div>
           <a href="https://www.rupeeboss.com/working-capital-emi-calculator" target="_blank">Working Capital</a>
           </div>
           </div>
            } 
            </div>
            
         
       
      </div>
    </div>
  );
};

export default Offers;
