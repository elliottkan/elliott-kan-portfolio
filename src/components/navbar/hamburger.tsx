import React, { useState } from 'react';
import "./hamburger.scss"

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const HamburgerIconClosed = () => {
    return (
      <div
          className="burger-container-closed"
          id="burger"
          onClick={toggleOpen}
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
          onClick={toggleOpen}
        >
        <div></div>
        <div></div>
      </div>
    );
  };

  return (
  <>
   {open ? <HamburgerIconOpen /> : <HamburgerIconClosed />}
  </>
  );
};

export default Hamburger;
