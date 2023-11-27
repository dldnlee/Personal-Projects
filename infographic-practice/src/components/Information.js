import React from "react"
import Cube from "../assets/3d-cube.png"
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";


export default function Information(props) {
    
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance of the element from the top of the viewport
      const element = document.getElementById('information-instance');
      const elementTop = element.getBoundingClientRect().top; 

      // Set a threshold for when to trigger the animation (adjust as needed)
      const triggerThreshold = window.innerHeight * 0.8;

      // Check if the element is within the viewport
      if (elementTop < triggerThreshold) {
        setIsVisible(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0%)' : 'translateX(-100%)',
  });

    return (
    <animated.div 
        id="information-instance"
        className="information-instance"
        style= {slideInAnimation}>
        <img src={ Cube } alt="cube" />
        <div className="information-text">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.explanation}</p>
        </div>
    </animated.div> 
    )

}