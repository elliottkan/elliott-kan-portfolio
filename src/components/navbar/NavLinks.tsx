import { Link } from "gatsby";
import React from "react";

const NavLinks = () => {

  const SectionLinks = () => {
    return (

      <ul>
        <li >
        <Link to="#about">
          About
        </Link>
        </li>
        <li>
        <Link to="#experience">
          Experience
        </Link>
        </li>
        <li>
        <Link to="#portfolio">
          Work
        </Link>
        </li>
        <li>
        <Link to="#contact">
          Contact
        </Link>
        </li>
      </ul>
    );
  };

  const ResumeLink = () => {
    return (
      <div>
        <a
          className="resume-button"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    );
  };

  return (
    <>
      <SectionLinks />
      <ResumeLink />
    </>
  );
};

export default NavLinks;
