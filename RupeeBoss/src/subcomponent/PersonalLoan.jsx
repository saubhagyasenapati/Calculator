import React from "react";
import circle from "../assets/circle3.png";
const PersonalLoan = () => {
  return (
    <div className="Mainbox">
      <p className="loanTitle">
        Calculate your Personal Loan EMI and Eligibility Status Due in a snap!
      </p>
      <div className="personalloanbox">
        <form action="">
          <div className="personalbox">
            <div>
              <input
                className="Insertion"
                type="number"
                name=""
                id=""
                placeholder="Loan Amount"
              />
            </div>
            
            <div>
              <input
                className="Insertion"
                type="number"
                name=""
                id=""
                placeholder="Loan Tenure"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name=""
                id=""
                placeholder="Income"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name=""
                id=""
                placeholder="Obligations"
              />
            </div>
          </div>
          <div>
            <button className="loancheckbutton">Check Eligibility</button>
          </div>
        </form>
      </div>

      <img src={circle} alt="circle" className="loancircle" />
    </div>
  );
};

export default PersonalLoan;
