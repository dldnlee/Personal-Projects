import React from "react"
import data from "../../assets/data.js"
import cube1 from "../../assets/rubik-cube.png"
import { useScroll, useSpring, animated } from "react-spring"


export default function InfoTwo() {

    
    

    const [open, toggle] = React.useState(false)
    const props = useSpring({opacity: open ? 1 : 0})
    
    

    return ( 
        <animated.div className="info-two" style={props} onClick={() => toggle(!open)} >
            <div className="info-two-details">
                <h1>{data[2].title}</h1>
                <h3>{data[2].subtitle}</h3>
                <p>{data[2].explanation}</p>
            </div>
            <img src={cube1} alt='cubie' />
        </animated.div>
    )
}

