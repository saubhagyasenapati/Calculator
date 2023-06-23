import React, { useState } from "react";
import mail from "../assets/mail2.png";
import call from "../assets/call.png";
import circle from "../assets/circle2.png";
import address from "../assets/registeredaddress.png";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Fade, Slide, Zoom, Flip } from "react-awesome-reveal";
const ContactUs = () => {
  const API = import.meta.env.VITE_API_URL;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      number: number,
    };

    axios
      .post(`${API}/api/v1/mail/contact`, formData)
      .then((response) => {
        if (response.data.success) {
          toast.success(
            "Submitted Successfully,We will get back to you Soon!",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      })
      .catch((error) => {
        if (error) {
          toast.warn(
            "There is some error from our end feel free to contact us at wecare@rupeeboss.com",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      });
  };

  return (
    <motion.div
      className="contacts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Fade delay={300}>
        <div className="box1">
          <div className="content">
            <p className="title">Contact Us</p>
            <p className="subtitle">We are here to help you</p>
          </div>
          <div className="contactcard">
            <div className="card">
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
                  Regd. Off. : C-605, Titanium Square, Near BMW Showroom,
                  Thaltej, Ahmedabad - 380054, Gujarat
                </p>
              </div>
            </div>
            <div className="card">
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
              <div className="img">
                <img src={mail} alt="" />
              </div>
              <div className="title">
                <p>EMAIL ADDRESS</p>
              </div>
              <div className="subtitle">
                <a
                  href="mailto:wecare@rupeeboss.com"
                  style={{ fontWeight: 600 }}
                >
                  wecare@rupeeboss.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="box2">
        <Slide>
          <p className="title">Get in Touch</p>
          <p className="subtitle">
            Reach out to us & we will respond as soon as we can.
          </p>
          <div className="contactus">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                name="number"
                id=""
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <div className="centerbtn">
                <button type="submit">Call me Back</button>
              </div>
            </form>
          </div>
        </Slide>
      </div>
      <Fade delay={1000}>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241267.56432193847!2d72.69310211469652!3d19.116178318308265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87d64ffffff%3A0x52070606740f342d!2sRupeeboss%20Financial%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1687428388371!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Fade>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.div>
  );
};

export default ContactUs;
