import React from "react";
import Form from "./Components/Form";
import "./Login.css";
import logo from "./images/logo.jpg";

function Login() {
  return (
    <div className="login">
      <div className="left">
        <img src={logo} alt="oops" />
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
