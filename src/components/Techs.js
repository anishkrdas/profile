import React from "react";
import TechsCarousel from "./TechsCarousel";

const Techs = () => {
    return (
        
        <div id = "techs" className="techs">
            <h1>My Technology Stack</h1>
            <div className="container">
                <div className="techs-content">
                    <TechsCarousel/>
                </div>
            </div>
            
        </div>
    )
}

export default Techs