import React from "react";
import "./Contact.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="contact_section">
      <Navbar />

      <div className="contact-top">
        <p>reservation</p>
        <h1>book your table</h1>
      </div>
      <div className="contact-form">
        <img
          src={require("../images/form-burger-1.png")}
          alt="icon"
          className="form-img iten-1"
        />
        <img
          src={require("../images/form-burger-2.png")}
          alt="icon"
          className="form-img iten-2"
        />
        <div className="form">
          <input className="form-item" type={"text"} placeholder="name" />
          <input className="form-item" type={"date"} placeholder="date" />
          <input className="form-item" type={"text"} placeholder="people" />
          <input className="form-item" type={"email"} placeholder="email" />
          <input className="form-item" type={"time"} placeholder="time" />
          <button className="form-item btn-find">find a table</button>
        </div>

        <img
          src={require("../images/form-burger-3.png")}
          alt="icon"
          className="form-img iten-3"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
