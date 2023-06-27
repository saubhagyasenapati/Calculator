import React, { useState } from "react";
import phone from "../assets/phone.png";
import person from "../assets/person.png";
import working from "../assets/working.png";
import circle from "../assets/circle.png";
import Secured from "../assets/Secured.png";
import Unsecured from "../assets/Unsecured.png";
import arrow from "../assets/upperarrow.png"

const Offers = () => {
  const APIOLD = import.meta.env.VITE_APIOLD;
  const URL1=`${APIOLD}/loan-against-property`
  const URL2=`${APIOLD}/home-loan`
  const URL3=`${APIOLD}/working-capital-emi-calculator`
  const URL4=`${APIOLD}/business-loan`
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
      title: "Unsecured Loans",
      description:
        "Unlock funds using your property's value with our easy Loan Against Property. Enjoy competitive rates and flexible terms. Apply now with Rupee Boss!",
      imageUrl: Unsecured,
    },
    {
      title: "Secured Loans",
      description:
        "Unlock funds using your property's value with our easy Loan Against Property. Enjoy competitive rates and flexible terms. Apply now with Rupee Boss!",
      imageUrl: Secured,
    }
  
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
            
              <div>
              <div className="buttonoffer" onClick={()=>setdropdown(!dropdown)}>
                <a >Check <img src={arrow} className={dropdown?"showbutton":"noshowbutton"} alt="" /> </a>  
              </div>
            </div>
            {
             <div className={dropdown?"dropdown":"nodropdown"} >
              <div>
              <a href={URL1} target="_blank">Loan Against Property</a>
              </div>
            <div>
            <a href={URL2} target="_blank">Home Loans</a>
            </div>
           <div>
           <a href={URL3} target="_blank">Working Capital</a>
           </div>
           </div>
            } 
            </div>
            <div className="card">
              <div className="img">
                <img src={offer[0].imageUrl} alt="" />
              </div>
              <div className="content">
                <p className="title">{offer[0].title}</p>
                <p className="subtitle">{offer[0].description}</p>
              </div>
              <div className="buttonoffer">
                <a href={URL4} target="_blank" rel="noopener noreferrer">Check</a>  
              </div>  
            </div>
        
      </div>
    </div>
  );
};

export default Offers;
