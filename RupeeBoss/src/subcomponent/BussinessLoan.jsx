import React, { useState } from 'react';
import axios from 'axios';
import circle from '../assets/circle3.png';

const BussinessLoan = () => {
  const API = import.meta.env.VITE_API_URL;
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [incorporationDate, setIncorporationDate] = useState('');
  const [turnover, setTurnover] = useState('');
  const [interestPaid, setInterestPaid] = useState('');
  const [profitAfterTax, setProfitAfterTax] = useState('');
  const [depreciation, setDepreciation] = useState('');
  const [remuneration, setRemuneration] = useState('');
  const [currentEMIPaying, setCurrentEMIPaying] = useState('');
  const [numEMIPaid, setNumEMIPaid] = useState('');
  const [eligibiilty, setEligibiilty] = useState("")
  const [accept, setaccept] = useState(false)
  const handleSubmit = async(event) => {
    event.preventDefault();
  
    const requestData = {
     "Amount":loanAmount,
     "Tenure":loanTenure,
      "Date":incorporationDate,
     "Turnover":turnover,
     "InterestPaidonLoan":interestPaid,
     "PAT":profitAfterTax,
     "Depr":depreciation,
     "DirRemuration":remuneration,
      "TotalEMI":currentEMIPaying,
      "NoOfEMIPaid":numEMIPaid,
    };

    await axios.post(`${API}/api/v1/calculator/bussiness`,requestData)
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
        Calculate your Business Loan EMI and Eligibility Status Due in a snap!
      </p>
      <div className="bussinessloanbox">
        <form onSubmit={handleSubmit}>
          <div className="bussinessbox">
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
                type="date"
                name="incorporationDate"
                value={incorporationDate}
                onChange={(e) => setIncorporationDate(e.target.value)}
                placeholder="Date of Incorporation"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name="turnover"
                value={turnover}
                onChange={(e) => setTurnover(e.target.value)}
                placeholder="Turnover"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name="interestPaid"
                value={interestPaid}
                onChange={(e) => setInterestPaid(e.target.value)}
                placeholder="Interest Paid on Loans"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name="profitAfterTax"
                value={profitAfterTax}
                onChange={(e) => setProfitAfterTax(e.target.value)}
                placeholder="Profit After Tax"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name="depreciation"
                value={depreciation}
                onChange={(e) => setDepreciation(e.target.value)}
                placeholder="Depreciation"
              />
            </div>
            <div>
              <input
                className="Insertion"
                type="number"
                name="remuneration"
                value={remuneration}
                onChange={(e) => setRemuneration(e.target.value)}
                placeholder="Dir/Partners Remuneration"
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
              <input
                className="Insertion"
                type="number"
                name="numEMIPaid"
                value={numEMIPaid}
                onChange={(e) => setNumEMIPaid(e.target.value)}
                placeholder="No. of EMI Paid"
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

export default BussinessLoan;
