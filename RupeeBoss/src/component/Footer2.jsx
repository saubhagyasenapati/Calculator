import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="contact">
      <div className="box1">
        <div>
          <p className="title">Make secure payment & grow your online business</p>
        </div>
        <div className="address">
          <div >
            <img src="../src/assets/mail.png" alt="" />
            <a href="mailto:Support@fintech.co">wecare@rupeeboss.com</a>
          </div>
          <div>
            <img src="../src/assets/location.png" alt="" />
            <a href="http://"> 619/620, The Summit Business Park , Western Express Highway Metro station, Opp. MAX Cinema, Andheri East, Mumbai, Maharashtra 400093.</a>
          </div>
        </div>
      </div>
      <hr className="line"/>
      <div className="box2">
        <ul>
        <li><Link to='/'>Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/media'>Media</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
