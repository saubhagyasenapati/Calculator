import React, { useState } from "react";
import circle from "../assets/circle3.png";
import axios from "axios";

import rupee from "../assets/rupee.png";
import { PieChart  } from "./PieChart";
const LoanEMI = () => {
  const API = import.meta.env.VITE_API_URL;
  const [EMI, setEMI] = useState();
  const [Total, setTotal] = useState();
  const [success,setSuccess]=useState(false)
  const [loanAmount, setLoanAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [loanTenure, setLoanTenure] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      loanAmount: loanAmount,
      interest: interest,
      loanTenure: loanTenure
    };
    var data = [
        ["Task", "Hours per Day"],
        ["Loan EMI",loanAmount],
        ["Total Payable Interest",EMI],
        ["Total Payment(Principal + Int)",Total],
      ];
    axios.post(`${API}/api/v1/calculator/emi`, formData)
      .then((response) => {
        setEMI(response.data.Interest);
        setTotal(response.data.Total);
        setSuccess(response.data.success)
      })
      .catch((error) => {
        alert("Error Occured We Are Working on It");
      });
  };
  
  return (
    <div className="Mainbox">
      <p className="loanTitle">
        Calculate your  EMI!
      </p>
      <div className="EmiBox">
        <div className="box">
          <p className="heading">EMI Calculator</p>
          <form onSubmit={handleSubmit}>
      <div>
        <input
          className="Insertion"
          type="number"
          name="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Loan Amount"
        />
      </div>
      <div>
        <input
          className="Insertion"
          type="number"
          value={interest}
          name="interest"
          onChange={(e) => setInterest(e.target.value)}
          placeholder="Interest"
        />
      </div>
      <div>
        <input
          className="Insertion"
          type="number"
          name="loantenure"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          placeholder="Loan Tenure"
        />
      </div>
      <button className="loancheckbutton" type="submit">
        Submit
      </button>
    </form>
        </div>
        <div className="box">
          <p className="heading">Loan Details</p>
          <div className="emiresult">
            <div className="title">
              <p>Loan EMI</p>
            </div>

           {success&&<div className="boxinside">
              <p>
                <img src={rupee} alt="" />
                {loanAmount}
              </p>
            </div>} 
          </div>
          <div className="emiresult">
            <div className="title">
              <p>Total Payable Interest</p>
            </div>

            {success&&<div className="boxinside">
              <p>
                <img src={rupee} alt="" />
                {success&&EMI}
              </p>
            </div>}
          </div>
          <div className="emiresult">
            <div className="title">
              <p>Total Payment (Principal + Int)</p>
            </div>

           {success&&<div className="boxinside">
              <p>
                <img src={rupee} alt="" />
                {success&&Total}
              </p>
            </div>} 
          </div>
        </div>
        <div className="box">
          <p className="heading">Break up of Loan Details</p>
          <div className="upperbox">
            <div className="resultgraph">
             <div>
                <div className="round1"></div>
             </div>
             <div>
                <p>Loan EMI</p>
             </div>
            </div>
            <div className="resultgraph">
             <div>
                <div className="round2"></div>
             </div>
             <div>
                <p>Total Payable Interest</p>
             </div>
            </div>
            <div className="resultgraph">
             <div>
                <div className="round3"></div>
             </div>
             <div>
                <p>Total Payment(Principal + Int)</p>
             </div>
            </div>
            </div>  
            <div className="lowerbox">
                {success&&<PieChart amount={loanAmount} interest={EMI} total={Total} />}
            </div>
        </div>
      </div>
      <img src={circle} alt="circle" className="loancircle" />
    </div>
  );
};

export default LoanEMI;
