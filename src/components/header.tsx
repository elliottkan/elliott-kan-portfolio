import React from 'react';
import { useScroll } from "../hooks/useScroll"
import "./icons/icons.scss"
import "./header.scss"



const Header = () => {

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

  const LogoLink = () => {
    return (
      <h2>
        <a href="/">Elliott Kan</a>
      </h2>
    )

  }

  const { direction, position } = useScroll()

  return (
    <header>
      <nav className="navbar-container">
        <div className="link-container">
          <ResumeLink />
          <SectionLinks/>
        </div>
        <div className="title-container">
          <LogoLink/>
        </div>
      </nav>
    </header>
  )
}

export default Header
