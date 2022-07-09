import React from "react";
import ReactLogo from "./react-logo.png"

function Header() {
    return (
        <header>
            <nav>
                <img src={ReactLogo} width="400px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;