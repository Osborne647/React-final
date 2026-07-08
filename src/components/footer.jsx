import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import "./footer.css"

function Footer() {
    return (
        <div className="footer">
        <div className="logo">
            <img src={logo} alt="company logo" />
        </div>
        <div className="row">
        <div className="footer-links">
            <Link to="/" className="footer-link link__hover-effect">Home</Link>
            <Link to="/games" className="footer-link link__hover-effect">Find your next game</Link>
        </div>
        <div className="copyright">PLAYFREE © 2026 |  Created by Nick Osborne</div>
        </div>
        </div>
    )
}

export default Footer