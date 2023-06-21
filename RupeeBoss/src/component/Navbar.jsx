import React from "react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <div className="logo">
         <Link to='/'>
         <img src={logo} alt="" />
         </Link> 
        </div>
        <div className="menu">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/media'>Media</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbarRight">
        <div>
          <p className="signin">Sign In</p>
        </div>
        <div>
          <button>Check Offers</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
