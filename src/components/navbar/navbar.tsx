import React, { useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import "../icons/icons.scss";
import "./navbar.scss";
import { Link } from "gatsby";


const NavLinks = ({open, setOpen}) => {
  const links = [
    {
      name: "About",
      location: "#about"
    },
    {
      name: "Experience",
      location: "#experience"
    },
    {
      name: "Portfolio",
      location: "#portfolio"
    },
    {
      name: "Contact",
      location: "#contact"
    },
  ]

  const SectionLinksMobile = () => {
    return (
      <div className="mobile-link-container">
        <ul>
          {links.map((link)=>(
             <li onClick={()=>{setOpen(false)}}>
             <Link to={link.location}>
               {link.name}
             </Link>
             </li>
          ))}
        </ul>
        <ResumeLink />
      </div>
    );
  };

  const SectionLinksDesktop = () => {
    return (
      <div className="desktop-link-container">
        <ul>
          {links.map((link)=>(
             <li>
             <Link to={link.location}>
               {link.name}
             </Link>
             </li>
          ))}
        </ul>
        <ResumeLink />
      </div>
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
      <SectionLinksDesktop />
      { open && <SectionLinksMobile />}
    </>
  );
};

const HamburgerIconClosed = () => {
  return (
    <div
        className="burger-container-closed"
        id="burger"
      >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const HamburgerIconOpen = () => {
  return (
    <div
        className="burger-container-open"
        id="burger"
      >
      <div></div>
      <div></div>
    </div>
  );
};

const LogoLink = () => {
  return (
    <h2 id="logo">
      <a href="/">Elliott Kan</a>
    </h2>
  );
};

const Navbar = () => {

  const [ open, setOpen ] = useState(false)
  // 1. Call the useScroll hook to get the current scroll position and direction
  const { direction } = useScroll();

  // 2. Use the scroll position and direction to set the navbar's visibility
  const navbarClass =
    direction < 0 && open == false ? "navbar-container hidden" : "navbar-container";




  return (
    <header>
      <nav className={navbarClass}>
        <div className="title-container">
          <LogoLink />
        </div>
        <div>
        <p onClick={() => setOpen(!open)}>
          {open ? <HamburgerIconOpen/> : <HamburgerIconClosed/>}
        </p>
          <NavLinks setOpen={setOpen} open={open}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
