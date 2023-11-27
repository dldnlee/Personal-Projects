import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const SlideInDiv = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance of the element from the top of the viewport
      const element = document.getElementById('slide-in-div');
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
      id="slide-in-div"
      className="slide-in-div"
      style={slideInAnimation}
    >
      {/* Content of the sliding div */}
      <h2>Slide In Element</h2>
      <p>This element will slide in on scroll using React Spring.</p>
    </animated.div>
  );
};

export default SlideInDiv;
