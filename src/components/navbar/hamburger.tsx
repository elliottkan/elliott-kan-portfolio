import React, { useState } from 'react';
import "./hamburger.scss"

const Hamburger = () => {

  // Default state is closed
  const [ open, setOpen ] = useState(false)
  let burger = document.querySelectorAll('#burger');

  burger.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('grey-out');
    });
  })

  return (
    <div className="burger-container" id="burger" open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Hamburger
