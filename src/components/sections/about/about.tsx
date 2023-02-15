import React from 'react';
import './about.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { EmailLink, ResumeLink } from '../../shared/links';
import { useInView } from 'react-intersection-observer';

const About = () => {

  const options = {
    threshold: 0.2,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options);

  return (
    <div ref={ref} className="about-container" id="about">
      <div className={`${'fade-in-up text-container'} ${inView && 'appear'}`}>
        <h2>Who in the world is Elliott?</h2>
        <p>Hey there!</p>
        <p>I am a <strong>software developer</strong> with a love for technology and problem-solving. Outside of work, you can find me indulging my inner outdoor enthusiast through rock climbing and exploring the great outdoors. I'm an avid rock climber and love nothing more than getting out into nature and pushing myself to new heights (both literally and figuratively).</p>
        <p>My past experience in building design has sparked my desire to merge aesthetics and functionality in my work. I thrive in environments where I can use my problem-solving skills and I am passionate about bringing creative solutions to life through collaboration with others across various disciplines.</p>
        <p>I am a driven and dedicated individual who is always looking for ways to improve myself and those around me. I have a passion for creating solutions that not only contribute to a more positive and sustainable future, but also bring joy and functionality to the users. Whether I am tackling a difficult project or scaling a rock face, I approach everything with determination and a positive attitude.</p>
        <p>Want to know more? Check out my resume, < ResumeLink prop="here."/></p>
        <p>Or flick me an email at < EmailLink prop="elliottkan7@gmail.com." /></p>
      </div>
      <div className={`${'fade-in-down photo-container'} ${inView && 'appear'}`}>
        <StaticImage src='../../../assets/elliott-headshot.jpg' placeholder="blurred" alt="A Handsome man called Elliott" />
      </div>
    </div>
  )
}

export default About
