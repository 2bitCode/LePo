import React from 'react'
import Form from './Components/Form'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="left">
            <img 
                src="https://scontent.fbwa4-1.fna.fbcdn.net/v/t1.15752-0/p206x206/179960273_293829555572971_6510021243387125947_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=58c789&_nc_ohc=CFp31ckieq0AX98aR0i&_nc_ht=scontent.fbwa4-1.fna&tp=6&oh=67c5a5dd98c14a6b8787a6f250a2aeee&oe=60B185E3"
                alt="oops"
            />
            <h1>Welcome</h1>
            <p1>Please enter your details here</p1>
            </div>
            <Form />
        </div>
    )
}

export default Login
