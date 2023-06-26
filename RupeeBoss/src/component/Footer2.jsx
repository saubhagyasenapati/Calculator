import React from "react";
import { Link } from "react-router-dom";
import mail from "../assets/mail.png";
import logo from "../assets/logo.png";
import location from "../assets/location.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
const Footer2 = () => {
  return (
    <div className="contact">
      <div className="upperfooter">
        <div className="logo">
          <img src={logo} alt="" />
          <p className="description">
            Unlock your business potential with our tailored fintech solutions.
          </p>
        </div>
        <div className="footerlinks">
          <div className="links">
          <p className="linkheader">HomePage</p>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="links">
          <p className="linkheader">Locations</p>
            <ul>
              <li>
                <p>Delhi</p>
              </li>
              <li>
              <p>Ahmedabad, Indore</p>
              </li>
              <li>
               <p>Mumbai, Pune</p>
              </li>
              <li>
              <p>Bangalore, Chennai, Hyderabad</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="lowerfooter">
        <div className="social">
  <a href="https://www.facebook.com/rupeeboss/" target="_blank"><img src={facebook} alt="" /></a>
<a href="https://twitter.com/RupeeBoss" target="_blank"><img src={twitter} alt="" /></a>
<a href="https://www.instagram.com/rupeeboss/?hl=en" target="_blank"><img src={insta} alt="" /></a>

        </div>
        <div className="address">
          <div >
            <img src={mail} alt="" />
            <a href="mailto:Support@fintech.co">wecare@rupeeboss.com</a>
          </div>
          <div>
            <img src={location} alt="" />
            <a href="http://"> 619/620, The Summit Business Park , Western Express Highway Metro station, Opp. MAX Cinema, Andheri East, Mumbai, Maharashtra 400093.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
