import React from 'react'
import circle from "../assets/circle3.png";
const HomeLoan = () => {
  return (
    <div className="Mainbox">
    <p className="loanTitle">
    Calculate your Home Loan EMI and Eligibility Status Due in a snap!
    </p>
    <div className="homeloanbox">
      <form action="">
        <div className="homebox">
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
              placeholder="Property Cost"
            />
          </div>
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
  )
}

export default HomeLoan
