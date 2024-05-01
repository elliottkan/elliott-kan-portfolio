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
        <p>I am a currently a <strong>software developer</strong> with a love for technology, problem-solving, and the great outdoors. Outside of work, you can often find me rock climbing and exploring nature, where I indulge my passion for pushing myself to new heights, both literally and figuratively.</p>
        <p>My background in building design has instilled in me a desire to merge aesthetics with functionality, a principle I apply to my work as a developer. I thrive in collaborative environments where I can leverage my problem-solving skills to bring creative solutions to life.</p>
        <p>Proficient in a variety of technologies including React, HTML, CSS, JavaScript, and more, I am adept at building responsive and intuitive user interfaces. Passionate about contributing to a more positive and sustainable future, I am driven to create solutions that not only function seamlessly but also bring joy to users.</p>
        <p>Whether I'm tackling a challenging project or scaling a rock face, I approach everything with determination and a positive attitude. I am committed to continuous improvement, both personally and professionally, and am always seeking opportunities to grow and learn.</p>
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
