import React from "react";

const Msme = () => {
  return (
    <div className="msme">
      <div className="card">
        <div className="title">
          <p>MSME Schemes & Subsidies</p>
        </div>
        <div className="subtitle">
          <p>
            MSME Bharat Manch is a nationwide initiative of Rupeeboss Financial
            Services Pvt Ltd. to empower MSMEs in becoming self-reliant and
            scaling up their business while availing end to end business
            support.
          </p>
        </div>

        <div class="dropdown">
          <div className="buttonmsme">
            <button>Check</button>
          </div>
          <div class="dropdown-content">
            <a href="https://www.msmebharatmanch.com/subsidy/subsidy-sc" target="_blank">SC/ST</a>
            <a href="https://www.msmebharatmanch.com/subsidy/subsidy-women" target="_blank">Women</a>
            <a href="https://www.msmebharatmanch.com/subsidy/subsidy-central" target="_blank">Central</a>
            <a href="https://www.msmebharatmanch.com/subsidy/subsidy-state" target="_blank">State</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Msme;
