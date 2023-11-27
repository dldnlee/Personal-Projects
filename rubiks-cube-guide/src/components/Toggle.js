import React from "react"
import { useState } from "react";
import { useSpring } from "react-spring";
import { animated } from "react-spring";


export default function Toggle() {
    
    const [isToggled, setIsToggled] = useState(true);

    const fade = useSpring({
        color: isToggled ? '#000' : 'green',
        transform: isToggled
          ? 'translate3d(0, 15px, 0)'
          : 'translate3d(0, 15px, 0)',
        fontSize: isToggled ? '2rem' : '3rem',
      });
    
    
    
    return (
      <div>
          <animated.h1 style={fade}>Hello</animated.h1>
          <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      </div>
    )

}
