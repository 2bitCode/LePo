import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Profile from "./Components/Profile";
import "./Government.css";
import { HeaderText, SidebarText } from "./content";

function Company() {
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
            h1="Raise funds"
            c11="Equity based"
            c12="Service asset based"
            c13="Get funds from LePo"
            class2="portfolio"
            h2="Portfolio"
            c21="Weekly Progress"
            c22="Monthly Progress and projections"
            class3="get-debt"
            h3="Get Debt"
            c31="Get debt from LePo"
            c32="Contact the entrepreneur"
            c33="Get debt from government"
            class4="contact-us"
            h4="Contact Us"
            c41="Fill the form"
            c41="Live chat"
            invest={false}
          />
        </div>
        <div className="gov-right">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Company;
