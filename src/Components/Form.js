import React, {useState} from 'react'
import './Form.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Form() {

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [on, setOn] = useState("c");

    return (
        <div className="form">
            <div class="clickMe col-1000">
                <div className={on=='c' && "on"}>
                <button onClick={() => setOn("c")}>Company</button>
                </div>
                <div className={on=='i' && "on"}>
                <button onClick={() => setOn("i")}>Investor</button>
                </div>
                <div className={on=='g' && "on"}>
                <button onClick={() => setOn("g")}>Government</button>
                </div>
            </div>
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 

                type="text"
                placeholder="Username"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <p>Forget Password <strong style={{color: 'green'}}>Click here</strong></p>
            <div className="signUp-btn">
                <Link to={on=='c' ? 'company' : on=='i' ? 'investor' : 'gov'}><button className="col-1000" style={{backgroundColor: 'green', padding:'10px', width:'100%', color:'white', border:'none', cursor:'pointer'}}>SIGN UP</button></Link>
            </div>
        </div>
    )
}

export default Form
