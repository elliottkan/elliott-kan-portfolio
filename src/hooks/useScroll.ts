import { useState, useEffect } from "react";

interface Scroll {
  direction: number;
}

export const useScroll = (): Scroll => {
  // Use the useState hook to store the current and previous scroll positions
  const [scrollPositions, setScrollPositions] = useState<[number, number]>([0, 0]);

  // Use the useEffect hook to add an event listener for the "scroll" event
  useEffect(() => {
    function handleScroll() {
      // Set the current and previous scroll positions to the current scrollY value
      setScrollPositions((prev) => [window.scrollY, prev[0]]);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Return a function that removes the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //Add an empty dependency array to only run this effect once when the component mounts


  return {
    direction: scrollPositions[1] - scrollPositions[0],
  };
};
