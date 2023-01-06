import React from 'react';
import './about.scss';
import Headshot from '../../../assets/elliott-headshot.jpg';

const About = () => {

  const ResumeLink = () => {
    return (
      <a
          className=""
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
      </a>
    )
  }

  const EmailLink = () => {
    return (
      <a href="mailto:elliottkan7@gmail.com">elliottkan7@gmail.com</a>
    )
  }


  return (
    <div className="about-container">
      <div className="text-container">
        <h2>Who in the world is Elliott?</h2>
        <p>Hey there!</p>
        <p>I'm a <strong>software developer</strong> with a love for coding and problem-solving. When I'm not working on projects, you can find me indulging my inner outdoor enthusiast through rock climbing and exploring the great outdoors. I'm an avid rock climber and love nothing more than getting out into nature and pushing myself to new heights (both literally and figuratively).</p>
        <p>Outside of work, I also enjoy reading self-help books and constantly seeking out new knowledge and skills to learn. I bring a laid back and casual vibe to everything I do and always try to find the humor in life's journey.</p>
        <p>Overall, I'm a driven and dedicated individual who is always looking for ways to improve myself and those around me. I have a passion for creating solutions that not only contribute to a more positive and sustainable future, but also bring joy and functionality to the users. Whether I'm tackling a difficult coding challenge or scaling a rock face, I approach everything with determination and a positive attitude.</p>
        <p>Want to know more? Check out my resume, < ResumeLink /> </p>
        <p>Or flick me an email at < EmailLink />.</p>
      </div>
      <div className="photo-container">
        <img src={Headshot} alt="handsome man headshot" />
      </div>
    </div>
  )
}

export default About
