import React, { useState } from "react";
import "./jobs.scss"

const Jobs = () => {
  // Declare a state variable called 'activeIndex' with an initial value of 0
  const [activeIndex, setActiveIndex] = useState(0);

  // Declare an array of 5 items
  const items = [
    { company: "Current", range: "December 2022 - Now " },
    { company: "Anchor Homes", range: "December 2021 - December 2022" },
    { company: "Henley Properties", range: "February 2018 - December 2021" },
    { company: "Earthlift Excavations", range: "July 2017 - March 2018" },
  ];

  const CurrentJob = () => (
    <>
    <h3>Kando Studio | Freelancing | Contracting</h3>
    <h4>Web Development</h4>
    <ul>
      <li>Website design and development</li>
      <li></li>
      <li></li>
    </ul>
    </>
  )
  const AnchorHomes = () => (
    <>
    <h3>Building Designer</h3>
    <ul>
      <li>Website design and development</li>
      <li></li>
      <li></li>
    </ul>
    </>
  )
  const HenleyHomes = () => (
    <>
    <h3>Architectural Draftsperson</h3>
    <ul>
      <li>Website design and development</li>
      <li></li>
      <li></li>
    </ul>
    </>
  )
  const EarthliftExcavations = () => (
    <>
    <h3>Estimating and Drafting</h3>
    <ul>
      <li>Website design and development</li>
      <li></li>
      <li></li>
    </ul>
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
        return <CurrentJob />;
      case 1:
        return <AnchorHomes />;
      case 2:
        return <HenleyHomes />;
      case 3:
        return <EarthliftExcavations />;
      default:
        return <CurrentJob />;
    }
  }

  return (
    <div className="experience-container">
      <div>
        <h3>Experience</h3>
        <span></span>
      </div>
      <div className="jobs-container">
        <div className="job-list">
          {items.map((item, index) => (
            <div className="job-tab">
              <div key={item.index} className="selectable-jobs" onClick={() => setActiveIndex(index)} >
                <p>{item.company}</p>
                {activeIndex === index && <p>{item.range}</p>}
              </div>
              { activeIndex === index ? <StyledHighlight/> : <GrayHighlight/> }
            </div>
          ))}
        </div>
        <div className="job-description">
          {/* Render the description of the active selection */}
          <RenderCurrentJob/>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
