import React from 'react';
import './about.scss';
import Headshot from '/assets/elliott-headshot.jpg';

const About = () => {


  return (
    <div className="about-container">
      <div className="text-container">
        <h2>Who in the world is Elliott?</h2>
        <p></p>
      </div>
      <div className="photo-container">
        <img src={Headshot} />
      </div>
    </div>
  )
}

export default About
