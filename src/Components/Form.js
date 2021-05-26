import React, { useState } from "react";
import "./Form.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Form() {
  const [on, setOn] = useState("c");
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    errors: {},
  });

  return (
    <div className="form">
      <div class="clickMe col-1000">
        <button className={on == "c" && "on"} onClick={() => setOn("c")}>
          Company
        </button>
        <button className={on == "i" && "on"} onClick={() => setOn("i")}>
          Investor
        </button>
        <button className={on == "g" && "on"} onClick={() => setOn("g")}>
          Government
        </button>
      </div>
      <div className="input-fields" onSubmit={() => console.log("submitted")}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => {
            setState({ email: e.target.value });
            const checker = /@gmail.com$/g;
            if (!checker.test(e.target.value)) {
              setState({ errors: { emailErr: "! Invalid Email" } });
            } else {
              setState({ errors: { email: "" } });
            }
          }}
          required
        />
        <span style={{ color: "red", fontWeight: "bold" }}>
          {state.errors["emailErr"]}
        </span>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.userame}
          onChange={(e) => {
            setState({ username: e.target.value });
            const checker = /\w{4,}/g;
            if (!checker.test(e.target.value)) {
              setState({
                errors: {
                  nameErr: "! Username must contain at least four characters",
                },
              });
            } else {
              setState({ errors: { nameErr: "" } });
            }
          }}
        />
        <span style={{ color: "red", fontWeight: "bold" }}>
          {state.errors["nameErr"]}
        </span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) => {
            setState({ password: e.target.value });
            const checker = e.target.value;
            if (checker.length == 0) {
              setState({
                errors: {
                  passwordErr: "Password should not be empty",
                },
              });
            } else {
              setState({ errors: { nameErr: "" } });
            }
          }}
        />
        <span
          style={{
            color: "red",
            fontWeight: "bold",
          }}
        >
          {state.errors["passwordErr"]}
        </span>
      </div>
      <p>
        Forget Password <strong style={{ color: "green" }}>Click here</strong>
      </p>
      <Link to={on == "c" ? "company" : on == "i" ? "investor" : "gov"}>
        <button className="signUp-btn">SIGN UP</button>
      </Link>
    </div>
  );
}

export default Form;
