import React from "react";
import Info from "./Info.jsx";
import Summary from "./Summary.jsx";
import Footer from "./Footer.jsx";
import "./styles.css";

function Card() {
    return (
        <div className="Card">
            <Info/>
            <Summary/>
            <Footer/>
        </div>
    )
}

export default Card;