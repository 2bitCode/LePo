import React from "react";
import "./Tab.css";
import { Link } from "react-router-dom";

function Tab({ text, to }) {
  return (
    <div className={`tab`}>
      <Link to={to}>
        <a href="/raise-funds">{text}</a>
      </Link>
    </div>
  );
}

export default Tab;
