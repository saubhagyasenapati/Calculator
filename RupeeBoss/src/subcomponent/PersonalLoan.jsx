import React, { useState } from "react";
import circle from "../assets/circle3.png";
import axios from "axios"
const PersonalLoan = () => {
  const API = import.meta.env.VITE_API_URL;
  const [eligibiilty, setEligibiilty] = useState("")
  const [accept, setaccept] = useState(false)
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [income, setIncome] = useState("");
  const [obligations, setObligations] = useState("");
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    // Create the request payload
    const requestData = {
      "Amount":loanAmount,
      "Tenure":loanTenure,
      "Income":income,
      "Obligation":obligations,
    };

    // Send the Axios request
    await axios.post(`${API}/api/v1/calculator/personal`,requestData)
      .then((response) => {
        setEligibiilty(response.data.message)
        setaccept(response.data.Accept)
        console.log(response.data);
      })
      .catch((error) => {
        alert("Error Occured We Are Working on It")
      });
  };
  return (
    <div className="Mainbox">
    <p className="loanTitle">
      Calculate your Personal Loan EMI and Eligibility Status Due in a snap!
    </p>
    <div className="personalloanbox">
      <form onSubmit={handleSubmit}>
        <div className="personalbox">
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
              name="loanTenure" 
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder="Loan Tenure"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Income"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name="obligations"
              value={obligations}
              onChange={(e) => setObligations(e.target.value)}
              placeholder="Obligations"
            />
          </div>
        </div>
        <div>
          <button className="loancheckbutton" type="submit">
            Check Eligibility
          </button>
        </div>
      </form>
      <div className="eligible">
      {
        eligibiilty&& <p className={accept?"Green":"Red"}>{eligibiilty}</p>
      }
      </div>
   
    </div>

    <img src={circle} alt="circle" className="loancircle" />
  </div>
  );
};

export default PersonalLoan;
