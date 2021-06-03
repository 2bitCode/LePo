import React from "react";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import { HeaderText, SidebarText } from "./content.js";

function RaiseFunds() {
  return (
    <div className="government">
      <Header text={HeaderText.company} />
      <div className="gov-body">
        <div className="gov-left">
          <Sidebar tabText={SidebarText.company} />
        </div>
        <div className="gov-mid">
          <Body
            class1="raise-funds"
            c11="Equity based"
            class2="raise-funds"
            c21="Service asset based"
            class3="raise-funds"
            c31="Get funds from Lepo"
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

export default RaiseFunds;
