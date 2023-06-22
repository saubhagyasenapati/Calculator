import React from "react";
import hero from "../assets/abouthero.png";
import logo from "../assets/AboutLogo.png";
import Milestone from "../assets/journey.png";
import "../styles/About.css";
import { motion } from "framer-motion";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
const AboutPage = () => {
  return (
    <motion.div
      className="aboutPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Fade delay={300}>
      <div className="about">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <p>When you need a loan</p>
          <p>You are not alone!</p>
        </div>
      </div>
      </Fade>
 
      <div className="contentWho">
        <Slide direction="left">
        <div className="title">
          <p>Who We Are</p>
        </div>
        </Slide>
      <Slide direction="right">
      <div className="subtitle">
          <p>
            <span className="company">RupeeBoss.com</span> aspires to be India’s
            preferred destination for the widest range of financial products
            including Retail loans, SME loans, Credit Cards, Credit Score,
            Rectify Credit, Elite services and mutual funds. Along with the
            quality service, we have been guided towards customer-first
            philosophy. This guiding principle is a reflection of our commitment
            towards ensuring the most hassle-free experience in procuring a
            loan, be it for personal needs, or that of your business.
          </p>
          <p>
            At <span className="company">RupeeBoss.com</span> ,we are committed
            to ensure the best experience in terms of customer service and
            satisfaction with our selfless attitude and humble approach.
          </p>
        </div>
      </Slide>
   
      </div>
      
      <div className="Milestone">
        <Slide  direction="right">
        <div className="title">
          <p>Milestones</p>
        </div>
        </Slide>
       
        <Slide direction="left">
        <div className="journey">
          <img src={Milestone} alt="" />
        </div>
        </Slide>
      </div>
      
      
   
 
    </motion.div>
  );
};

export default AboutPage;
