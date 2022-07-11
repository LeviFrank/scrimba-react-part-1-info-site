import React from "react";
import ReactLogo from "./react-logo.jpeg"
import SideLogo from "./side-logo.png"

function Header() {
    return (
        <header>
            <nav className="nav">
                <span className="logo-container">
                    <img src={ReactLogo} className="nav-logo"/>
                    <h1>ReactFacts</h1>
                </span>
                <ul className="nav-items">
                    <li>React Course - Project 1</li>
                </ul>
            </nav>
            <img src={SideLogo} className="side-logo" />
        </header>
    )
}

export default Header;