import React from "react";
import lauraSmith from "../images/lauraSmith.png";
import button from "../images/button.png";

function Info() {
    return (
        <div>
            <img src= {lauraSmith}/>
            <h1 className="Name">Mrs. Big Nose</h1>
            <h3 className="classOfPerson">Frontend Developer</h3>
            <h5 className="personWebsite">laurasmith.website</h5>
            <div className="emailThemButton">
                <img src={button}/>
            </div>
        </div>
    )
}

export default Info;