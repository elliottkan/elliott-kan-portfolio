import React, { useState } from 'react';
import Navigation from './Navigation';
import { useScroll } from "../hooks/useScroll"
import "../icons/icons.scss"
import "./navbar.scss"
import Hamburger from './hamburger';



const Navbar = () => {

  
  const LogoLink = () => {
    return (
      <h2>
        <a href="/">Elliott Kan</a>
      </h2>
    )

  }

  const []

  return (
    <header>
      <nav className="navbar-container">
        <div className="title-container">
          <LogoLink/>
        </div>
          <Hamburger/>
          <Navigation />
      </nav>
    </header>
  )
}

export default Navbar
