import React from 'react';
import { useInView } from 'react-intersection-observer';
import { techStackIcons } from "../../icons/tech-stack-icons";
import './techstack.scss'

const TechStack = () => {

  const options = {
    threshold: 0.4,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options);

  return (
    <div ref={ref} className={`${'techstack-container fade-in-up'} ${inView && 'appear'}`} >
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
