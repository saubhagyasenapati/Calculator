import React, { useState } from 'react';
import axios from 'axios';
import circle from '../assets/circle3.png';

const HomeLoan = () => {
  const API = import.meta.env.VITE_API_URL;
  const [loanAmount, setLoanAmount] = useState('');
  const [propertyCost, setPropertyCost] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [obligations, setObligations] = useState('');
  const [eligibiilty, setEligibiilty] = useState("")
  const [accept, setaccept] = useState(false)

  const handleSubmit = async(event) => {
    event.preventDefault();

    const requestData = {
      loanAmount,
      propertyCost,
      loanTenure,
      obligations,
    };

    await axios.post(`${API}/api/v1/calculator/home`,requestData)
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
        Calculate your Home Loan EMI and Eligibility Status Due in a snap!
      </p>
      <div className="homeloanbox">
        <form onSubmit={handleSubmit}>
          <div className="homebox">
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
                name="propertyCost"
                value={propertyCost}
                onChange={(e) => setPropertyCost(e.target.value)}
                placeholder="Property Cost"
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
      {/* <img src={circle} alt="circle" className="loancircle" /> */}
    </div>
  );
};

export default HomeLoan;
