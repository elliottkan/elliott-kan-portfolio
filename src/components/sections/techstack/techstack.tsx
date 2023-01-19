import React from 'react';
import { techStackIcons } from "../../icons/tech-stack-icons";
import './techstack.scss'
const TechStack = () => {
  return (
    <div className="techstack-container">
      <h2>Some of the technology I've used<span className="orange">.</span></h2>
      <ul className="icons">
        {techStackIcons.map(({ icon, name }) => (
            <li>
              <p>{icon}</p>
              <p className="tech-name"> { name }</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TechStack
