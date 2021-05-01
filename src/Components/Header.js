import React from 'react'
import './Header.css'
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom'

function Header({text}) {
    return (
        <div className="header">
            <h1>{text}</h1>
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <Link to="contact"><li>Contact Us</li></Link>
            </ul>
            <img
                src={logo}
                alt="oops" 
            />
        </div>
    )
}

export default Header
