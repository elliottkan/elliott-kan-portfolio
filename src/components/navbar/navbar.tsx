import React, { useState } from "react";
import Navigation from "./Navigation";
import { useScroll } from "../../hooks/useScroll";
import "../icons/icons.scss";
import "./navbar.scss";

const Navbar = () => {
  // 1. Call the useScroll hook to get the current scroll position and direction
  const { direction } = useScroll();

  // 2. Use the scroll position and direction to set the navbar's visibility
  const navbarClass =
    direction < 0 ? "navbar-container hidden" : "navbar-container";

  const LogoLink = () => {
    return (
      <h2 id="logo">
        <a href="/">Elliott Kan</a>
      </h2>
    );
  };


  return (
    <header>
      <nav className={navbarClass}>
        <div className="title-container">
          <LogoLink />
        </div>
        <Navigation />
      </nav>
    </header>
  );
};

export default Navbar;
