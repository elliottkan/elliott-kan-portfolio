import React from 'react'

const NavLinks = () => {

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

  const ResumeLink = () => {
    return (
      <div>
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    )
  }

  return (
    <>
      <SectionLinks/>
      <ResumeLink />
    </>
  )

}

export default NavLinks
