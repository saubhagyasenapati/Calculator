import React from "react";
import mail from "../assets/mail2.png";
import call from "../assets/call.png";
import circle from "../assets/circle2.png";
import address from "../assets/registeredaddress.png";
import "../styles/Contact.css";
const ContactUs = () => {
  return (
    <div className="contacts">
      <div className="box1">
        <div className="content">
          <p className="title">Contact Us</p>
          <p className="subtitle">We are here to help you</p>
        </div>
        <div className="contactcard">
          <div className="card">
            <img src={circle} className="circle" alt="" />
            <div className="img">
              <img src={address} alt="" />
            </div>
            <div className="title">
              <p>REGISTERED OFFICE</p>
            </div>
            <div className="subtitle">
              <p style={{ textAlign: "center", fontWeight: 600 }}>
                [CIN No.: U74140GJ2016PTC086271]
              </p>
              <p style={{ textAlign: "center" }}>
                Regd. Off. : C-605, Titanium Square, Near BMW Showroom, Thaltej,
                Ahmedabad - 380054, Gujarat
              </p>
            </div>
          </div>
          <div className="card">
            <img src={circle} className="circle" alt="" />
            <div className="img">
              <img src={call} alt="" />
            </div>
            <div className="title">
              <p>CALL US AT</p>
            </div>
            <div className="subtitle">
              <a
                href="tel:+1800-267-629-6"
                style={{ color: "#FF4141", fontWeight: 600 }}
              >
                1800-267-629-6
              </a>
            </div>
          </div>
          <div className="card">
            <img src={circle} className="circle" alt="" />
            <div className="img">
              <img src={mail} alt="" />
            </div>
            <div className="title">
              <p>EMAIL ADDRESS</p>
            </div>
            <div className="subtitle">
              <a href="mailto:wecare@rupeeboss.com" style={{ fontWeight: 600 }}>
                wecare@rupeeboss.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="box2">
        <p className="title">Get in Touch</p>
        <p className="subtitle">
          Reach out to us & we will respond as soon as we can.
        </p>
        <div className="contactus">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="number" name="" id="" placeholder="Number"/>
            <div className="centerbtn">
            <button>Call me Back</button>
            </div>
          </form>
        </div>
       
      </div>
      <div>
        MAP
      </div>
    </div>
  );
};

export default ContactUs;
