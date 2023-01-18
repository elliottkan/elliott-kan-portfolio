import React from "react";
import "./portfolio.scss"

const Portfolio = () => {

  return (
    <div className="project-container">
      <h3>Some Stuff I've Built</h3>
      <div className="project">
        <div className="project-content">
          {/* <div className="project-label">Fullstack App</div> */}
          <h4 className="project-title">TakeStock</h4>
          <div className="project-details">
            <p>A platform that serves as an aggregator for social media, news and price charts to allow users to perform quicker market research.</p>
            <p>Check this project out on github, here.</p>
            <p>Or head to the website directly,</p>
            <ul>
              <li>Ruby on Rails</li>
              <li>Tailwind</li>
              <li>Javascript</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
        <div className="project-img">
          <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
        </div>
      </div>
    </div>
   );
}

export default Portfolio;
