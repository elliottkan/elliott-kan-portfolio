import React, { useState } from "react";

const Jobs = () => {
  // Declare a state variable called 'activeIndex' with an initial value of 0
  const [activeIndex, setActiveIndex] = useState(0);

  // Declare an array of 5 items
  const items = [
    { id: 1, content: "Content 1" },
    { id: 2, content: "Content 2" },
    { id: 3, content: "Content 3" },
    { id: 4, content: "Content 4" },
    { id: 5, content: "Content 5" },
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
        <p>{items[activeIndex].content}</p>
      </div>
    </div>
  );
}

export default Jobs;
