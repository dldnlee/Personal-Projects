import React from "react"
import cube from "../assets/rubik-cube.png"


export default function Header() {
    return (
    <div className="head-container">
        <h1>Learn to solve the rubik's cube!</h1>
        <img src={cube} alt="cube" />
    </div>
    )
}