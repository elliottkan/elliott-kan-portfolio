import React from 'react';
import { socialsIcons } from "./icons/socials-icons";
import { emailIcons } from "./icons/socials-icons";
import "./icons/icons.scss"
import "./footer.scss"

const Icons = (
  socialsIcons.map(({ name, icon, link }) => (
    <a className="clickable-icon" href={link} target="_blank" rel="noopener noreferrer" aria-label={name}>
      {icon}
    </a>
  ))
)

const Email = (
  emailIcons.map(({ name, icon, link }) => (
    <a className="clickable-icon" aria-label={name} href={`mailto:${link}`}>{icon}</a>
  ))
)



const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons-container">
        {Icons}
        {Email}
      </div>
      <div>
        <p>© 2022 -  Coded and designed by Elliott Kan</p>
      </div>
    </div>
  )
}
export default Footer;
