import React from "react";
import "./Contact.css";
import MessageIcon from "@material-ui/icons/Message";
import peopleImg from "./images/contactPageImage.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="leftContact">
        <div className="bgImg">
          <img src={peopleImg} alt="" />
        </div>
        <div className="chatIcon">
          <MessageIcon fontSize="large" />
        </div>
      </div>
      <div className="rightContact">
        <div className="head">
          <h2>Send Message</h2>
        </div>
        <div className="messageField">
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Your Email" />
          <textarea
            name="messafe"
            id="message"
            cols="20"
            rows="5"
            placeholder="Put your message here"
          ></textarea>
          <button>Send Email</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
