import React, { useState } from "react";

const Jobs = () => {
  // Declare a state variable called 'activeIndex' with an initial value of 0
  const [activeIndex, setActiveIndex] = useState(0);

  // Declare an array of 5 items
  const items = [
    { id: 1, content: "Current -" },
    { id: 2, content: "Anchor Homes" },
    { id: 3, content: "Henley Properties" },
    { id: 4, content: "Earthlift Excavations" },
  ];
  
  return (
    <div>
      {/* Render the 5 selectable containers */}
      {items.map((item) => (
        <div
          key={item.id}
          className="selectable-container"
          onClick={() => setActiveIndex(item.id - 1)}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: item.id - 1 === activeIndex ? "darkgray" : "lightgray",
          }}
        >
          {/* Render the content of the item */}
          <p>{item.content}</p>
        </div>
      ))}

      {/* Render the main container */}
      <div
        className="container"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightgray",
        }}
      >
        {/* Render the content of the current item */}
        <p>{ items[activeIndex].content}</p>
      </div>
    </div>
  );
}

export default Jobs;
