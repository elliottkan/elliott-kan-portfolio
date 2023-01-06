import React from 'react';
import { techStackIcons } from "../../icons/tech-stack-icons";
import './techstack.scss'
const TechStack = () => {
  return (
    <div className="techstack-container">
      <ul className="icons">
        {techStackIcons.map(({ icon, name }) => (
            <li>
              {icon}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TechStack
