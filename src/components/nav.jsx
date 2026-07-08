import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './nav.css'

function Nav() {
  return (
    <header className="navbar">
      <div className="nav content-wrapper">
        <div className="logo">
          <img src={logo} alt="company logo" />
        </div>
        <div className="links">
          <Link to="/" className="link link__hover-effect">Home</Link>
          <Link to="/games" className="link link__hover-effect">Find your next game</Link>
        </div>
      </div>
    </header>
  )
}

export default Nav