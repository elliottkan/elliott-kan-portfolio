import "./cursor.scss";
import React from "react";
import useMousePosition from "../../hooks/useMousePosition";

const Cursor = () => {
    // 1.
  const { x, y } = useMousePosition();

  let ring = document.querySelector('.ring');
  let dot = document.querySelector('.dot');
  const a = document.querySelectorAll('a');
  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      dot.classList.add('hover');
      ring.classList.add('hidden');
    });
    item.addEventListener('mouseleave', () => {
      dot.classList.remove('hover');
      ring.classList.remove('hidden');
    });
  })

  return (
    <>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      ></div>
            {/* 3. */}
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
