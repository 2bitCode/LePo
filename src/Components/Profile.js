import React from "react";
import "./Profile.css";
import tech from "./../images/tech.png";

function Profile() {
  return (
    <div className="profile">
      <div className="profileImg">
        <img src={tech} alt="" />
      </div>
      <div className="profileName">
        <span>Jake Lark, CEO</span>
      </div>
      <div className="description">
        <h4>PERLANTON SERVICES</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ullam
          eius beatae? Magnam, eum. Minus excepturi, corporis, neque rem, animi
          rerum dolorum porro ratione dolor quas quam veritatis tempore?
          Doloremque.
        </p>
      </div>
    </div>
  );
}

export default Profile;
