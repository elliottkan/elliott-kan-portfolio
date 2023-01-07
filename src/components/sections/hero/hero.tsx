import React from 'react';
import TypingText from './TypingText';
import './hero.scss'

const Hero = () => {


  return (
    <div className="hero-container">
      <h1>Hello, World! I'm <span className="name-effect">Elliott</span></h1>
      <div>
        <TypingText />
      </div>
    </div>
  )
}

export default Hero
