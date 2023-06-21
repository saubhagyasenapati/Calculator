import React from "react";
import phone from "../assets/phone.png"
import person from "../assets/person.png"
import working from "../assets/working.png"
import circle from "../assets/circle.png"
import arrow from "../assets/arrow.png"
const Offers = () => {
    const offer = [
        {   
          title: "Unsecured Loans",
          description: "Get an unsecured loan effortlessly with Rupee Boss. No collateral required. Quick and convenient financing for your business.",
          imageUrl: phone
        },
        {
          title: "Loan Against Property",
          description: "Unlock funds using your property's value with our easy Loan Against Property. Enjoy competitive rates and flexible terms. Apply now with Rupee Boss!",
          imageUrl: person
        },
        {
          title: "Working Capital Loan",
          description: "Secure the working capital your business requires with our flexible and convenient Working Capital Loan. Benefit from competitive interest rates, expedited approvals, and personalized repayment options. Empower your business with enhanced cash flow management and drive growth with the Rupee boss.",
          imageUrl: working
        }
      ];
  return (
    <div className="offer">
      <div className="offermain">
        <div className="titlediv">
            <div>
            <hr />
            </div>
            <div>
            <p className="title">Our Offers</p>
            </div>
         
        </div>

      </div>
      <div className="offercards">
        {
            offer.map((item)=>{
                return(
                   <div className="card">
                    <img src={circle} className="circle" alt="" />
                    <div className="img">
                        <img src={item.imageUrl} alt="" />
                    </div>
                    <div className="title">
                        <p>{item.title}</p>
                    </div>
                    <div className="subtitle">
                        <p>{item.description}</p>
                    </div>
                    <div className="buttonoffer"><button>Check <img src={arrow} alt="" /></button></div>
                   
                   </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Offers;
