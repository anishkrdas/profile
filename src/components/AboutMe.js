import React from "react";
import Typed from "react-typed";




const AboutMe = () => {
    return (
        <div className="about">
        <div id = "about" className="container py-5 about">
            <div className="row">
                <div className="col-lg-7 col-xm-12">



                <div className="photo-wrap mb-5 parallax" >
                    {/*<img className="profile-img" src={author} alt="author..."/>*/}
                    <div className="test">{/*<p><Typed 
                    className="typed-text"
                    strings={["Fullstack Developer", "Web Designer", "Team Lead", "Gamer", "Freelancer"]}
                    typeSpeed={20}
                    backSpeed={55}
                    loop
                /></p>*/}</div>
                    </div>
                
                </div>
                <div className="col-lg-5 col-xm-12">
                <div className="desc-wrapper">
                  <h1 className="about-this">THIS IS</h1>
                  <h1 className="about-story">MY STORY</h1>                  
                <div className="about-me-dets">
                <p className="imageDesc">An active man of principles, punctuality and determination with the exact proportionality of self-confidence, optimism and respect for others and self, alongside, being adaptive in nature to any change at any point of time.</p>
                    <p>Focused and smart Software Development Team Leader; is able to {/*motivate developmentteam and */}identify and remove impediments to turning out quality software applications for customers. Excellent ability to read code and suggest changes to make the finished project glitch-free in addition to holding the below qualities &ndash;</p>
                    <p>
                        <ul>
                           {/* <li>Consistently delivering software that meets standards</li>*/}
                            <li>Ensuring, the programming team develops high-quality working applications</li>
                            <li>Prioritizing programming work and assigning tasks</li>
                            <li>Appropriately dealing with problems in the team</li>
                            <li>Monitoring timeliness of attendance at team meetings</li>
                            <li>Efficiently executing assigned actions</li>
                        </ul>

                    </p>
                </div><br/><br/></div>
                    
                </div>
            </div>
            
        </div>
        
        </div>
        
    )
}

export default AboutMe
