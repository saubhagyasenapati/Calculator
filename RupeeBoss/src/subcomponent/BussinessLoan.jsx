import React, { useState } from 'react';
import axios from 'axios';
import circle from '../assets/circle3.png';

const BussinessLoan = () => {
  const API = import.meta.env.VITE_API_URL;
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [currentEMIPaying, setCurrentEMIPaying] = useState('');
  const [NetMonthlyIncome, setNetMonthlyIncome] = useState('');
  const [Interest, setInterest] = useState('');
  const [EMI, setEMI] = useState("")
  const [accept, setaccept] = useState(false)
  const handleSubmit = async(event) => {
    event.preventDefault();
  
    const requestData = {
      
        "NetMonthlyIncome":NetMonthlyIncome,
      "Obligations":currentEMIPaying,
    
    };

    await axios.post(`${API}/api/v1/calculator/bussiness`,requestData)
      .then((response) => {
        setEMI(response.data.TotalAmount)
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
          </div>
          <div>
            <button className="loancheckbutton" type="submit">
              Check Eligibility
            </button>
          </div>
        </form>
        <div className="emi">
      {
        EMI&& <p >You are eligible for a max loan amount upto <span className='emiamount'>{EMI}</span></p>
      }
      </div>
      </div>
      {/* <img src={circle} alt="circle" className="loancircle" /> */}
    </div>
  );
};

export default BussinessLoan;
