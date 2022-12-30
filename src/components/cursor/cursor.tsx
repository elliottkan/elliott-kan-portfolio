import "./cursor.scss";
import React, { useEffect, useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";

const Cursor: React.FC = () => {
  // 1.
  const { x, y } = useMousePosition();

  // 2. Use useRef to store a reference to the DOM elements
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  // 3. Use useEffect to add and remove event listeners
  useEffect(() => {
    const a = document.querySelectorAll("a");
    const burger = document.querySelectorAll("#burger");

    function handleMouseOver() {
      if (dotRef.current) dotRef.current.classList.add("hover");
      if (ringRef.current) ringRef.current.classList.add("hidden");
    }

    function handleMouseLeave() {
      if (dotRef.current) dotRef.current.classList.remove("hover");
      if (ringRef.current) ringRef.current.classList.remove("hidden");
    }

    a.forEach(item => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    burger.forEach(item => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    // 4. Return a function that removes the event listeners when the component unmounts
    return () => {
      a.forEach(item => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });

      burger.forEach(item => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // 5. Add an empty dependency array to only run this effect once when the component mounts

  return (
    <>
      <div ref={ringRef} style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>
      <div ref={dotRef} className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};

export default Cursor;
