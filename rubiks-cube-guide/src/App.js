import React from "react"
import NavBar from "./components/NavBar"
import Toggle from "./components/Toggle"
import "./style.css"
// import ThreeDee from "./components/ThreeDee"

export default function App() {
    return (
        <div>
            <NavBar />
            {/* <ThreeDee /> */}
            <Toggle />
        </div>
    )
}