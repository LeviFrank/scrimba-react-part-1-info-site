import React from "react";
import reactLogo from "../images/react-logo.jpeg";

function NavBar() { 
    return (
        <nav className="NavBar">
            <img src={reactLogo}/>
            <h3 className="navLogoText">ReactFacts</h3>
            <h4 className="navTitle">React Course - Project 1</h4>
            
        </nav>
    )
}

export default NavBar;