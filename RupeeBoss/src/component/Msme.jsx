import React, { useState } from "react";
import arrow from "../assets/upperarrow.png"
const Msme = () => {
  const [dropdown, setdropdown] = useState(false)

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
        <div>
          <div className="buttonmsme" onClick={()=>setdropdown(!dropdown)}>
          <a >Check <img src={arrow} className={dropdown?"showbutton":"noshowbutton"} alt="" /> </a>  
          </div>
        </div>
        <div className={dropdown?"dropdown":"nodropdown"}  >
        <div> <a href="https://www.msmebharatmanch.com/subsidy/subsidy-sc" target="_blank">SC/ST</a></div>
        <div><a href="https://www.msmebharatmanch.com/subsidy/subsidy-women" target="_blank">Women</a></div>
        <div><a href="https://www.msmebharatmanch.com/subsidy/subsidy-central" target="_blank">Central</a></div>
        <div><a href="https://www.msmebharatmanch.com/subsidy/subsidy-state" target="_blank">State</a></div>
         </div>
      </div>
   

    </div>
  );
};

export default Msme;
