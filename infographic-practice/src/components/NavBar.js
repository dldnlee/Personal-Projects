import React from "react"
import CubeLogo from "../assets/3d-cube.png"

export default function NavBar() {
    return (
        <div className="nav-bar">
            <img src={CubeLogo} alt="cube" />
            <h1>Rubikie</h1>
        </div>
    )
}
