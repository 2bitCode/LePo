import React, { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import "./Government.css";
import Body from "./Components/Body";
import Profile from "./Components/Profile";
import { HeaderText, SidebarText, CardBody } from "./content";

function Government() {
  return (
    <div className="government">
      <Header text={HeaderText.government} />
      <div className="gov-body">
        <div className="gov-left">
          <Sidebar tabText={SidebarText.government} />
        </div>
        <div className="gov-mid">
          <Body
            h1="Invest"
            c11="Serivce based businesses"
            c12="Buy Equity"
            c13="lend money"
            c14="Top Charts"
            h2="Your Portfolio"
            c21="Monthly Progress and projections"
            c22="Weekly Progress"
            c23="Contact the Entrepreneur"
            c24="Consult with us"
            h3="Niche hub"
            c31="See economically viable zones for different niches"
            c32="See what's your area good for"
            h4="Contact Us"
            c41="Fill contact form"
            btn
            bodyText={CardBody.government}
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

export default Government;
