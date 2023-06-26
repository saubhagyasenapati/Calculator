import React, { useState } from "react";
import circle from "../assets/circle3.png";
import axios from "axios";

import rupee from "../assets/rupee.png";
import { PieChart } from "./PieChart";
const LoanEMI = () => {
  const API = import.meta.env.VITE_API_URL;
  const [eligibiilty, setEligibiilty] = useState("");
  const [accept, setaccept] = useState(false);
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [income, setIncome] = useState("");
  const [obligations, setObligations] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create the request payload
    const requestData = {
      Amount: loanAmount,
      Tenure: loanTenure,
      Income: income,
      Obligation: obligations,
    };

    // Send the Axios request
    await axios
      .post(`${API}/api/v1/calculator/personal`, requestData)
      .then((response) => {
        setEligibiilty(response.data.message);
        setaccept(response.data.Accept);
        console.log(response.data);
      })
      .catch((error) => {
        alert("Error Occured We Are Working on It");
      });
  };
  return (
    <div className="Mainbox">
      <p className="loanTitle">
        Calculate your Personal Loan EMI and Eligibility Status Due in a snap!
      </p>
      <div className="EmiBox">
        <div className="box">
          <p className="heading">EMI Calculator</p>

          <form action="">
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
                name="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="Interest"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
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

            <div className="boxinside">
              <p>
                <img src={rupee} alt="" />
              </p>
            </div>
          </div>
          <div className="emiresult">
            <div className="title">
              <p>Total Payable Interest</p>
            </div>

            <div className="boxinside">
              <p>
                <img src={rupee} alt="" />
              </p>
            </div>
          </div>
          <div className="emiresult">
            <div className="title">
              <p>Total Payment (Principal + Int)</p>
            </div>

            <div className="boxinside">
              <p>
                <img src={rupee} alt="" />
              </p>
            </div>
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
        <PieChart/>
            </div>
        </div>
      </div>
      <img src={circle} alt="circle" className="loancircle" />
    </div>
  );
};

export default LoanEMI;
