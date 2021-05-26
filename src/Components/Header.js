import React from "react";
import "./Header.css";
import logo from "./../images/logo.jpg";
import tech from "./../images/tech.png";
import { Link } from "react-router-dom";

function Header({ text }) {
  return (
    <div className="header">
      <div className="left-corner">
        <img className="profileImg" src={tech} alt="" />
        <h1>{text}</h1>
      </div>
      <div className="right-corner">
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <Link to="contact">
            <li>Contact Us</li>
          </Link>
        </ul>
        <img src={logo} alt="oops" />
      </div>
    </div>
  );
}

export default Header;
