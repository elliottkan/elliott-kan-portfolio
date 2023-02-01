import React from 'react';
import TypingText from './TypingText';
import './hero.scss'
import { useInView } from 'react-intersection-observer';

const Hero = () => {

  const options = {
    threshold: 0.2,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options);

  return (
    <div ref={ref} className="hero-container">
      <h1 className={`${'fade-in-up'} ${inView && 'appear'}`}>Hello, World! I'm <span className="name-effect">Elliott</span></h1>
      <div>
        <TypingText />
      </div>
    </div>
  )
}

export default Hero
