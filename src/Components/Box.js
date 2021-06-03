import React from "react";
import "./Box.css";
import { Link } from "react-router-dom";

function Box({ extraClass, img, head, c1, c2, c3, c4, btn, invest, gov }) {
  return (
    <div
      className={`box ${invest && "invest"} ${gov && "gov"} ${extraClass} ${
        c1 === "hide" && "hide-box"
      }`}
    >
      <h2>{head}</h2>
      <p>{c1}</p>
      <p>{c2}</p>
      <p>{c3}</p>
      <p>{c4}</p>
      <div className={`clk-btn ${!btn && "hide-btn"}`}>
        <Link to={`${extraClass ? extraClass : ""}`}>
          <button
            id="clk-btn"
            style={{
              color: "white",
              backgroundColor: "green",
              border: "none",
              padding: "10px",
            }}
          >
            Click here
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Box;
