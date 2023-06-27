import React, { useState } from 'react';
import axios from 'axios';
import circle from '../assets/circle3.png';
import rupee from "../assets/rupee.png";

const BussinessLoan = () => {
  const API = import.meta.env.VITE_API_URL;
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [currentEMIPaying, setCurrentEMIPaying] = useState('');
  const [NetMonthlyIncome, setNetMonthlyIncome] = useState('');
  const [Interest, setInterest] = useState('');
  const [EMI, setEMI] = useState("")
  const [Loan, setLoan] = useState("")
  const [accept, setaccept] = useState(false)
  const handleSubmit = async(event) => {
    event.preventDefault();
  
    const requestData = {
      
        "NetMonthlyIncome":NetMonthlyIncome,
      "Obligations":currentEMIPaying,
    
    };

    await axios.post(`${API}/api/v1/calculator/bussiness`,requestData)
      .then((response) => {
        setEMI(response.data.EMI)
        setLoan(response.data.TotalAmount)
        console.log(EMI,Loan);
      })
      .catch((error) => {
        alert("Error Occured We Are Working on It")
      });
  };

  return (
    <div className="Mainbox">
      <p className="loanTitle">
        Calculate your Business Loan EMI and Eligibility Status Due in a snap!
      </p>
      <div className="bussinessloanbox">
        <form onSubmit={handleSubmit}>
          <div className="bussinessbox">
          <div>
              <input
                className="Insertion"
                type="number"
                name="NetMonthlyIncome"
                value={NetMonthlyIncome}
                onChange={(e) => setNetMonthlyIncome(e.target.value)}
                placeholder="Net Monthly Profit"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name="currentEMIPaying"
                value={currentEMIPaying}
                onChange={(e) => setCurrentEMIPaying(e.target.value)}
                placeholder="Total EMI Paying Currently"
              />
            </div>
            <div>
            <button className="loancheckbutton" type="submit">
              Check Eligibility
            </button>
          </div>
        
          </div>
         
        </form>
        <div className="box">
          <p className="heading">You Are Eligible For</p>
          <div className="emiresult">
            <div className="title">
              <p>Max Loan Amount</p>
            </div>

           <div className="boxinside">
           <p>
                <img src={rupee} alt="" />
                {Loan}
              </p>
            </div>
          </div>
          <div className="emiresult">
            <div className="title">
              <p>Proposed EMI</p>
            </div>

            <div className="boxinside">
            <p>
                <img src={rupee} alt="" />
              {EMI}
              </p>
            </div>
          </div>
          <div className="emiresult">
            <div className="title">
              <p>Rate of Interest</p>
            </div>

          <div className="boxinside">
            
              <p>
              18% 
              </p>

             
            </div>
          </div>
          <div className="emiresult">
            <div className="title">
              <p>Tenure</p>
            </div>

          <div className="boxinside">
            
              <p>
               36 Months
              </p>

             
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default BussinessLoan;
