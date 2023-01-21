// import "./cursor.scss";
// import React from "react";
// import useMousePosition from "../../hooks/useMousePosition";

// const Cursor = () => {
//     // 1.
//   const { x, y } = useMousePosition();

//   let ring = document.querySelector('.ring');
//   let dot = document.querySelector('.dot');
//   const a = document.querySelectorAll('a');
//   const burger = document.querySelectorAll('#burger');

//   a.forEach(item => {
//     item.addEventListener('mouseover', () => {
//       dot.classList.add('hover');
//       ring.classList.add('hidden');
//     });
//     item.addEventListener('mouseleave', () => {
//       dot.classList.remove('hover');
//       ring.classList.remove('hidden');
//     });
//   })

//   burger.forEach(item => {
//     item.addEventListener('mouseover', () => {
//       dot.classList.add('hover');
//       ring.classList.add('hidden');
//     });
//     item.addEventListener('mouseleave', () => {
//       dot.classList.remove('hover');
//       ring.classList.remove('hidden');
//     });
//   })

//   return (
//     <>
//       <div
//         style={{ left: `${x}px`, top: `${y}px` }}
//         className="ring"
//       ></div>
//       <div
//         className="dot"
//         style={{ left: `${x}px`, top: `${y}px` }}
//       ></div>
//     </>
//   );
// };

// export default Cursor;

import "./cursor.scss";
import React, { useEffect, useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";

const Cursor = () => {
  const { x, y } = useMousePosition();

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const a = document.querySelectorAll("a");
    const burger = document.querySelectorAll("#burger");

    const handleMouseOver = () => {
      dotRef.current?.classList.add("hover");
      ringRef.current?.classList.add("hidden");
    };
    const handleMouseLeave = () => {
      dotRef.current?.classList.remove("hover");
      ringRef.current?.classList.remove("hidden");
    };

    a.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    });
    burger.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      a.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
      burger.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      ></div>
      <div
        ref={dotRef}
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
