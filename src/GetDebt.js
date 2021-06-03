import React from "react";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import { HeaderText, SidebarText } from "./content.js";

function GetDebt() {
  return (
    <div className="government">
      <Header text={HeaderText.company} />
      <div className="gov-body">
        <div className="gov-left">
          <Sidebar tabText={SidebarText.company} />
        </div>
        <div className="gov-mid">
          <Body
            class1="get-debt"
            c11="Get debt from LePo"
            c21="hide"
            class3="get-debt"
            c31="Contact the entrepreneur"
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

export default GetDebt;
