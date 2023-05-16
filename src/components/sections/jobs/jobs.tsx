import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./jobs.scss"

const Jobs = () => {
  // Declare a state variable called 'activeIndex' with an initial value of 0
  const [activeIndex, setActiveIndex] = useState(0);

  // Declare an array of 5 items
  const items = [
    { role: "Junior Developer", company: "Convert Digital", range: "2023 -  " },
    { role: "Web Developer & Designer", company: "Kando Studio", range: "2022 -  " },
    { role: "Building Designer", company: "Anchor Homes", range: "2021 - 2022" },
    { role: "Architectural Draftsperson", company: "Henley Properties", range: "2018 - 2021" },
    { role: "Estimator & Draftsperson", company: "Earthlift Excavations", range: "2017 - 2018" },
  ];

  const ConvertDigital = () => (
    <>
      <p>I am currently a developer at ConvertDigital, where I have the opportunity to work on multiple features and projects concurrently for some super cool clients</p>
      <p>My job involves developing software solutions for clients. I get to make technical decisions, solve problems, write code, and create awesome digital products.</p>
      <p>I collaborate with the Project Managers and the Client Success team to improve e-commerce sites and software for our clients. This means customizing modules, configuring platforms, and integrating new systems into the e-commerce setup.</p>
      <p>You can find out more about what I do at <a href="https://www.convertdigital.com.au" aria-label="Convert Digital Link" rel="noopener noreferrer" target="_blank">this link.</a> </p>
    </>
  )

  const KandoStudio = () => (
    <>
      <p> I am a web designer and developer at KandoStudio for my work outside of work. Each day brings new and exciting challenges as I work on a diverse range of projects for clients seeking to establish or enhance their online presence.</p>
      <p>These projects encompass a wide range of responsibilities, including sales, market research, design, development and hosting. </p>
      <p>To accomplish these tasks, I utilize tools such as Figma, React and GatsbyJS for design and development.</p>
      <p>You can find out more about what I do at <a href="https://www.kandostudio.com.au" aria-label="Kando Studio Link" rel="noopener noreferrer" target="_blank">www.kandostudio.com.au</a> </p>


      {/* <p>Background in the Shopify platform for e-commerce clients.</p> */}
    </>
  )

  const AnchorHomes = () => (
    <>
      <p>Building Designer for a Prefab Transportable Modular Home builder where my role was to communicate with multi-disciplinary teams of engineers, consultants, tradespeople, council and clients on a daily basis.</p>
      <p>My main responsibility was to produce quality and accessible working drawings for a diverse array of clients. Additionally, I also worked to improve company drafting practices and processes to ensure that the company was providing the best service to clients.</p>
      <p>You can find out more about what I did by clicking on <a href="https://anchorhomes.com.au/projects/" aria-label="Anchor Homes Link" rel="noopener noreferrer" target="_blank">this link.</a></p>
    </>
  )
  const HenleyHomes = () => (
    <>
      <p>As an Architectural Draftsperson for one of Victoria's largest award-winning builders, I had the opportunity to acquire a wide range of technical and interpersonal skills during my tenure at Henley Properties. </p>
      <p>My main focus was meeting deadlines, KPIs and providing great customer service, while also seeking to improve my skills. My responsibilities included preparing detailed drawings and managing interactions with team members, contractors and stakeholders involved in the project.</p>
      <p>You can find out more about what I did by clicking on <a href="https://henley.com.au/" aria-label="Henley Homes Link" rel="noopener noreferrer" target="_blank">this link.</a></p>
    </>
  )
  const EarthliftExcavations = () => (
    <>
      <p>Estimator and Draftsperson at a civil earthmoving company.</p>
      <p>I was responsible for preparing cost estimates and working drawings for site operations, reviewing outsourced work for quality control, communicating with other builders to ensure requirements are met, investigating queries and escalating errors for resolution.</p>
    </>
  )

  const StyledHighlight = () => (
    <div className="active-job"></div>
  )
  const GrayHighlight = () => (
    <div className="non-active-job"></div>
  )

  const RenderCurrentJob = () => {
    switch (activeIndex) {
      case 0:
        return <ConvertDigital />;
      case 1:
        return <KandoStudio />;
      case 2:
        return <AnchorHomes />;
      case 3:
        return <HenleyHomes />;
      case 4:
        return <EarthliftExcavations />;
      default:
        return <ConvertDigital />;
    }
  }

  const options = {
    threshold: 0.3,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options);

  return (
    <div ref={ref} className={`${'fade-in-up experience-container'} ${inView && 'appear'}`} id="experience">
      <div className="flex align-center">
        <h3>Experience<span className="orange">.</span></h3>
      </div>
      <div className="jobs-container">
        <div className="job-list">
          {items.map((item, index) => (
            <div className="job-tab" key={index}>
              <div className="selectable-jobs" onClick={() => setActiveIndex(index)} >
                <p>{item.range}</p>
                <p>{item.role}</p>
                <p>{item.company}</p>
              </div>
              { activeIndex === index ? <StyledHighlight/> : <GrayHighlight/> }
            </div>
          ))}
        </div>
        <div className="job-description">
          {/* Render the description of the active selection */}
          <RenderCurrentJob/>
          {/* <p>Got an opportunity to discuss? Chuck us an email < EmailLink /> or check out my resume, < ResumeLink/></p> */}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
