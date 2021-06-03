import React from "react";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import { HeaderText, SidebarText } from "./content.js";

function Portfolio() {
  return (
    <div className="government">
      <Header text={HeaderText.company} />
      <div className="gov-body">
        <div className="gov-left">
          <Sidebar tabText={SidebarText.company} />
        </div>
        <div className="gov-mid">
          <Body
            class1="portfolio"
            c11="Weekly Progress"
            c21="hide"
            class3="portfolio"
            c31="Monthly Progress and projections"
            c41="hide"
            btn
            invest={true}
          />
        </div>
        <div className="gov-right">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
