import React from "react";
import "./main.scss";
import picture from "../assets/Website_Prelim.jpg";

const Landing = (props) => {
    return (
        <div className="component">
            <img className="image" src={picture}/>
        </div>
    )
}
export default Landing;