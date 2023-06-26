import React, { useState } from 'react'
import circle from "../assets/circle3.png";
import axios from "axios"

const WorkingCapital = () => {
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
    <div className="workingloanbox">
 
      <form onSubmit={handleSubmit}>
        <div className="workingbox">
          <div className='workingLeft'>
          <div>
            <input
              className="Insertion"
              type="number"
              name="loanAmount" 
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Turnover/Topline"
            />
          </div>

          <div>
            <input
              className="Insertion"
              type="number"
              name="loanTenure" 
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder="Profit Before Tax"
            />
          </div>
          
          <div>
            <input
              className="Insertion"
              type="number"
              name="loanTenure" 
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder="Depreciation"
            />
          </div>
          
          <div>
            <input
              className="Insertion"
              type="number"
              name="loanTenure" 
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder="Finance Cost"
            />
          </div>
          
          <div>
            <input
              className="Insertion"
              type="number"
              name="loanTenure" 
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder="Inventory"
            />
          </div>
          
          <div>
            <input
              className="Insertion"
              type="number"
              name="loanTenure" 
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder="Debtors"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Creditors"
            />
          </div>
          <div>
            <input
              className="Insertion"
              type="number"
              name="obligations"
              value={obligations}
              onChange={(e) => setObligations(e.target.value)}
              placeholder="Existing OD/CC"
            />
          </div>
        
          </div>
          <div className='workingRight'>
           <p className='eligible'> Eligible Loan Amount</p>
          </div>
        </div>
        <div>
          <button className="loancheckbutton" type="submit">
            Check Eligibility
          </button>
        </div>
      </form>
    
    </div>

    <img src={circle} alt="circle" className="loancircle" />
  </div>
  )
}

export default WorkingCapital
