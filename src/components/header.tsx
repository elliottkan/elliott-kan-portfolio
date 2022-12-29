import React from 'react';
import { useScroll } from "../hooks/useScroll"
import "./icons/icons.scss"
import "./header.scss"



const Header = () => {

  const ResumeLink = () => {
    return (
      <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    )
  }

  const { direction, position } = useScroll()

  return (
    <header>
      <nav className="navbar-container">
        <div className="link-container">
          <ul>
            <li><ResumeLink /></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="title-container">
          <h2>Elliott Kan</h2>
        </div>
      </nav>
    </header>
  )
}

export default Header
