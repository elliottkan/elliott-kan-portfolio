import React from 'react';
import "./Navigation.scss"



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

  return (
    <div>
      <div className="desktop-link-container">
        <SectionLinks/>
        <ResumeLink />
      </div>
      <div className="mobile-link-container" id="mobile-nav">
        <SectionLinks/>
        <ResumeLink />
      </div>
    </div>
  )
}

export default Navigation
