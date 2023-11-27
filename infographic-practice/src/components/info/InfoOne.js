import React from "react"
import data from "../../assets/data.js"
import cube1 from "../../assets/rubik-cube.png"
import { useScroll, useSpring, animated } from "react-spring"


export default function InfoOne() {

    
    

    const [open, toggle] = React.useState(false)
    const props = useSpring({opacity: open ? 1 : 0})
    
    

    return ( 
        <animated.div className="info-one" style={props} onClick={() => toggle(!open)} >
            <img src={cube1} alt='cubie' />
            <div className="info-one-details">
                <h1>{data[1].title}</h1>
                <h3>{data[1].subtitle}</h3>
                <p>{data[1].explanation}</p>
            </div>
        </animated.div>
    )
}