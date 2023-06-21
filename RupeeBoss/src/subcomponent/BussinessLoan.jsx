import React from 'react'
import circle from "../assets/circle3.png";
const BussinessLoan = () => {
  return (
    <div className="Mainbox">
    <p className="loanTitle">
    Calculate your Business Loan EMI and Eligibility Status Due in a snap!
    </p>
    <div className="bussinessloanbox">
      <form action="">
        <div className="bussinessbox">
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
             type='date'
                name=""
                id=""
                placeholder="Date of Incorporation"
              />
            </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name=""
              id=""
              placeholder="Turnover"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name=""
              id=""
              placeholder="Interest Paid on Loans"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name=""
              id=""
              placeholder="Profit After Tax"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name=""
              id=""
              placeholder="Depreciation"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name=""
              id=""
              placeholder="Dir/Partners Remuneration"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name=""
              id=""
              placeholder="Total EMI Paying Currently"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name=""
              id=""
              placeholder="No. of EMI Paid"
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

export default BussinessLoan
