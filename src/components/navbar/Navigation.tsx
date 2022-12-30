import React, { useState }from 'react';
import "./Navigation.scss"
import Hamburger from './hamburger';
import MobileNavigation from './MobileNavigation';
import NavLinks from './NavLinks';



const Navigation = () => {
  const ResumeLink = () => {
    return (
      <div>
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    )
  }

  const SectionLinks = () => {
    return (
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    )
  }

  const [ open, setOpen ] = useState(false)

  return (
    <div>
      <div open={open} onClick={() => setOpen(!open)}>
        <Hamburger/>
        {open && <MobileNavigation/>}
      </div>
      <div className="desktop-link-container">
       <NavLinks/>
      </div>
    </div>
  )
}

export default Navigation
