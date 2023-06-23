import React, { useState } from 'react';
import './MobileNavbar.css'; // Import your CSS file for styling

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-brand">Logo</div>
      <button className="mobile-navbar-toggle" onClick={toggleNavbar}>
        <span className={`mobile-navbar-toggle-icon ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`mobile-navbar-collapse ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-navbar-nav">
          <li className="mobile-navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="mobile-navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="mobile-navbar-item">
            <a href="#services">Services</a>
          </li>
          <li className="mobile-navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
