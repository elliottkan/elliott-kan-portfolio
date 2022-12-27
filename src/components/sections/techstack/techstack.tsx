import React from 'react';
import { techStackIcons } from "../../icons/tech-stack-icons";

const TechStack = () => {
  return (
    <ul>
      {techStackIcons.map(({ icon, name }) => (
          <li>
            {icon} {name}
          </li>
        ))}
    </ul>
  )
}

export default TechStack
