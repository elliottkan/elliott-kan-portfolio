import React, { useState, useEffect } from 'react';

// The array that you want to iterate through and display
const items: string[] = [
  "Welcome to my portfolio, if you have a bit of time sit back and let me tell you a bit about myself or scroll down for more",
  "I have a strong belief in the power of creativity and using code to bring those ideas to life.",
  "I've always had a fascination with technology, so I made the switch from building design to software development.",
  "I love spending my free time exploring the great outdoors, whether it's through rock climbing, hiking or running.",
  "I'm constantly reading and learning new things, and I especially enjoy self-improvement books that help me grow as a person.",
  "As a software developer, I'm always looking for ways to innovate and create new solutions for problems.",
  "I'm a big believer in the power of positive thinking and trying to see the best in every situation.",
  "I've always been drawn to the world of code and the endless possibilities it offers for creation and problem-solving.",
  "I'm a huge fan of the outdoors, and I love finding new ways to connect with nature and push my limits.",
  "I believe in constantly learning and growing, and I try to incorporate that mindset into everything I do, whether it's in my work or personal life.",
  "That's enough about me here, get in touch with me so I can get to know more about you!"
]

// The speed at which each character is typed out (in milliseconds)
const typeSpeed = 50;

// The delay between each item in the array (in milliseconds)
const itemDelay = 8000;

const TypingText = () => {
  // The current index of the item being displayed
  const [itemIndex, setItemIndex] = useState(0);

  // The current index of the character being displayed for the current item
  const [charIndex, setCharIndex] = useState(0);

  // The text that has been typed out so far for the current item
  const [typedText, setTypedText] = useState('');

  // A boolean to track whether or not the carat is visible
  const [caratVisible, setCaratVisible] = useState(true);

  // The current delay time (in milliseconds)
  const [delay, setDelay] = useState(itemDelay);

  useEffect(() => {
    // If all items have been displayed, reset the item and character indices to 0
    if (itemIndex >= items.length) {
      setItemIndex(0);
      setCharIndex(0);
      setTypedText('');
      setDelay(itemDelay);
      return;
    }

    // If the delay is greater than 0, decrement it and return early
    if (delay > 0) {
      setDelay(delay - typeSpeed);
      return;
    }

    // If all characters for the current item have been displayed,
    // reset the character index and increment the item index
    if (charIndex >= items[itemIndex].length) {
      setCharIndex(0);
      setItemIndex(itemIndex + 1);
      setTypedText('');

      // Set the delay to the item delay value
      setDelay(itemDelay);
      return;
    }

    // If the carat is visible, set it to be invisible after the type speed delay
    if (caratVisible) {
      setTimeout(() => setCaratVisible(false), typeSpeed);
    } else {
      // If the carat is invisible, set it to be visible after the type speed delay
      setTimeout(() => setCaratVisible(true), typeSpeed);
    }

    // Append the next character to the typed text after the type speed delay
    setTimeout(() => setTypedText(typedText + items[itemIndex][charIndex]), typeSpeed);

    // Increment the character index after the type speed delay
    setTimeout(() => setCharIndex(charIndex + 1), typeSpeed);
  }, [itemIndex, charIndex, caratVisible, delay]);

  return (
    <div>
      {typedText}
      {caratVisible && <span style={{color:"orange"}}>|</span>}
    </div>
  );
}

export default TypingText;
