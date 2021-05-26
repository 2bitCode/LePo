import React from "react";
import Form from "./Components/Form";
import "./Login.css";
import logo from "./images/logo.jpg";

function Login() {
  return (
    <div className="login">
      <div className="left">
        <img
          // src="https://scontent.fbwa4-1.fna.fbcdn.net/v/t1.15752-0/p206x206/179960273_293829555572971_6510021243387125947_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=58c789&_nc_ohc=CFp31ckieq0AX98aR0i&_nc_ht=scontent.fbwa4-1.fna&tp=6&oh=67c5a5dd98c14a6b8787a6f250a2aeee&oe=60B185E3"
          src={logo}
          alt="oops"
        />
        <h1>Welcome</h1>
        <span>Please enter your details here</span>
      </div>
      <div className="right">
        <Form />
      </div>
    </div>
  );
}

export default Login;
