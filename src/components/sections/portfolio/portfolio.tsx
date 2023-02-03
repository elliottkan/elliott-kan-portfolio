import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./portfolio.scss"
import * as FiIcons from "react-icons/fi";
import { useInView } from 'react-intersection-observer';


const Portfolio = () => {

  const TakeStock = () => {

    const options = {
      threshold: 0.2,
      triggerOnce: true,
    }
    const { ref, inView } = useInView(options);

    return (
      <div ref={ref} className={`${'fade-in-up project'} ${inView && 'appear'}`} >
        <div className="project-content">
          <div className="project-label">Fullstack Application - Design & Development</div>
          <h4 className="project-title">TakeStock</h4>
          <div className="project-details">
            <p>A platform that serves as an aggregator for social media, news and price charts to allow users to perform quicker market research. The objective is for users to use 1 instead of 5 different tabs to do market research, built-in portfolio manager to manage assets, asset page has a timeline scroller that allows users to see correlation in data-points.</p>
            <p>Currently only optimised for Desktop</p>
            <ul>
              <li>Ruby on Rails</li>
              <li>Tailwind</li>
              <li>Javascript</li>
              <li>RESTful APIs</li>
              <li>PG Search</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/FACE-co/TakeStock" aria-label="GitHub Link">
                <FiIcons.FiGithub size={iconSize}/>
              </a>
              <a href="https://www.takestock.dev" aria-label="External Link" className="external">
                <FiIcons.FiExternalLink size={iconSize}/>
              </a>
            </div>
          </div>
        </div>
        <div className="project-img">
          <a href="https://www.takestock.dev">
          <StaticImage src='../../../assets/takestock.png' placeholder="blurred" alt="TakeStock Project" className="img"/>
          </a>
        </div>
    </div>
    )
  }

  const Gearless = () => {

    const options = {
      threshold: 0.2,
      triggerOnce: true,
    }

    const { ref, inView } = useInView(options);

    return (
      <div ref={ref} className={`${'fade-in-up project'} ${inView && 'appear'}`} >
      <div className="project-content">
        <div className="project-label">Fullstack Application - Design & Development</div>
        <h4 className="project-title">Gearless</h4>
        <div className="project-details">
          <p>A marketplace application for outdoor gear rental/hiring. Allows users to create, book, rent their outdoor gear.</p>
          <p>Currently only optimised for Desktop</p>
          <ul>
            <li>Ruby on Rails</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>PG Search</li>
            <li>Heroku</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/FACE-co/Gearless" aria-label="GitHub Link">
              <FiIcons.FiGithub size={iconSize}/>
            </a>
            {/* <a href="https://www.takestock.dev" aria-label="External Link" className="external">
              <FiIcons.FiExternalLink size={iconSize}/>
            </a> */}
          </div>
        </div>
      </div>
      <div className="project-img">
        <a href="https://github.com/FACE-co/Gearless">
        <StaticImage src='../../../assets/gearless.png' placeholder="blurred" alt="Gearless Project" className="img"/>
        </a>
     </div>
    </div>
    )
  }

  const PersonalWebsite = () => {
    const options = {
      threshold: 0.2,
      triggerOnce: true,
    }
    const { ref, inView } = useInView(options);

    return (
      <div ref={ref} className={`${'fade-in-up project'} ${inView && 'appear'}`} >
      <div className="project-content">
        <div className="project-label">Design & Development</div>
        <h4 className="project-title">Portfolio (The One You're On)</h4>
        <div className="project-details">
          <p>Well, just a place to showcase some of my works and what I'm up to.</p>
          <p>Still to come: Blog section and some more slick animations!</p>
          <ul>
            <li>React</li>
            <li>SCSS</li>
            <li>GatsbyJS</li>
            <li>Figma</li>
          </ul>
          <div className="project-links">
            <a href="#" aria-label="GitHub Link">
              <FiIcons.FiGithub size={iconSize}/>
            </a>
          </div>
        </div>
      </div>
      <div className="project-img">
        <a href="https://github.com/elliottkan/elliott-kan-portfolio">
        <StaticImage src='../../../assets/elliott-personal-website.png' placeholder="blurred" alt="Personal Portfolio Project" className="img"/>
        </a>
     </div>
    </div>
    )
  }

  const CommunityCode = () => {

    const options = {
      threshold: 0.2,
      triggerOnce: true,
    }
    const { ref, inView } = useInView(options);

    return (
      <div ref={ref} className={`${'fade-in-up project'} ${inView && 'appear'}`} >
        <div className="project-content">
          <div className="project-label">In Progress - Design & Development</div>
          <h4 className="project-title">CommunityCode</h4>
          <div className="project-details">
            <p>CommunityCode is the new way for developers to get their solutions. Ask any question for any language, save hours browsing google, and level up as a developer.</p>
            <p>Combining the power of ChatGPT and StackOverflow.</p>
            <ul>
              <li>NextJS</li>
              <li>Tailwind</li>
              <li>Supabase</li>
            </ul>
            {/* <div className="project-links">
              <a href="https://github.com/FACE-co/TakeStock" aria-label="GitHub Link">
              <FiIcons.FiGithub size={iconSize}/>
              </a>
              <a href="https://www.takestock.dev" aria-label="External Link" className="external">
              <FiIcons.FiExternalLink size={iconSize}/>
              </a>
            </div> */}
          </div>
        </div>
        <div className="project-img">
          <a href="#">
          <StaticImage src='../../../assets/communitycode.png' placeholder="blurred" alt="CommunityCode Project" className="img"/>
          </a>
        </div>
      </div>
    )
  }

  const iconSize = 20

  const options = {
    threshold: 0.2,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options);

  return (
    <div className="project-container" id="portfolio">
        <h3 ref={ref} className={`${'fade-in-up'} ${inView && 'appear'}`}>Some Stuff I've Built<span className="orange">.</span></h3>
      <TakeStock />
      <Gearless />
      <CommunityCode />
      <PersonalWebsite />
    </div>
   );
  }

  export default Portfolio;
