import React, { useState } from "react";
import Tab from "./Tab";
import "./Sidebar.css";
import tech from "./../images/tech.png";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

function Sidebar({ tabText, page }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="sidebar">
      <button
        className={`${clicked && "btn-clicked"}`}
        onClick={() => setClicked(!clicked)}
      >
        <MenuOpenRoundedIcon fontSize="large" />
      </button>
      <img className={`${clicked && "showImg"}`} src={tech} alt="oops" />
      <div className={`list ${clicked && "showList"}`}>
        {tabText.map((item, index) => (
          <Tab
            text={item}
            to={`${
              item === "Raise Funds"
                ? "raise-funds"
                : item === "Get Debt"
                ? "get-debt"
                : item === "Portfolio"
                ? "portfolio"
                : page
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
