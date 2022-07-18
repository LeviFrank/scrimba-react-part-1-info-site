import React from "react";
import twitterLogo from "../images/twitterLogo.png";
import facebookLogo from "../images/facebookLogo.png";
import instagramLogo from "../images/instagramLogo.png";
import linkedinLogo from "../images/linkedinLogo.png";
import githubLogo from "../images/githubLogo.png";


function Footer() {
    return (
        <footer className="footer">
            <div className="twitterLogo">
                <img src={twitterLogo}/>
            </div>
            <div className="facebookLogo">
                <img src={facebookLogo}/>
            </div>
            <div className="instagramLogo">
                <img src={instagramLogo}/>
            </div>
            <div className="linkedinLogo">
                <img src={linkedinLogo}/>
            </div>
            <div className="githubLogo">
                <img src={githubLogo}/>
            </div>
        </footer>
    )
}

export default Footer;