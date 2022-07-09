import React from "react";
import ReactLogo from "./react-logo.png"

function Header() {
    return (
        <header>
            <nav>
                <img src={ReactLogo} width="400px" />
            </nav>
        </header>
    )
}

export default Header;