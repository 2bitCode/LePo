import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Profile from "./Components/Profile";
import "./Government.css";
import { HeaderText, SidebarText } from "./content";

function Investor() {
  return (
    <div className="government">
      <Header text={HeaderText.investor} />
      <div className="gov-body">
        <div className="gov-left">
          <Sidebar tabText={SidebarText.investor} page="investor" />
        </div>
        <div className="gov-mid">
          <Body
            c11="Serivce-Based Business"
            c21="Buy Equity"
            c31="Lend Money"
            c41="Investment Groups"
            invest
          />
        </div>
        <div className="gov-right">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Investor;
