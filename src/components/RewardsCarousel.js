import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ava1 from "../images/main/appreciation.jpg";
import ava2 from "../images/main/banner.jpg";
import ava3 from "../images/main/contact.jpg";
import ava4 from "../images/main/experience.jpg";


const RewardsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={true}
            showStatus={false}
        >
            <>
            <div className="rewardsCarou">
            <div className="row">
                <h2 className="exp_header">Software Development Team Lead</h2><hr/>
                <div className="col-lg-6">
                    <div className="exp">
                        <p className="">
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="org-pic" >
                    <img className="" src={ava2} alt="cts..."/>
                    </div>
                </div>
            </div>
           </div>
            </>
            <>
            <div className="rewardsCarou">
            <div className="row">
                <h2 className="exp_header">Software Development Team Lead</h2><hr/>
                <div className="col-lg-6">
                    <div className="exp">
                        <p className="">
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="org-pic" >
                    <img className="" src={ava2} alt="cts..."/>
                    </div>
                </div>
            </div>
           </div>
            </>
            <>
            <div className="rewardsCarou">
            <div className="row">
                <h2 className="exp_header">Software Development Team Lead</h2><hr/>
                <div className="col-lg-6">
                    <div className="exp">
                        <p className="">
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="org-pic" >
                    <img className="" src={ava2} alt="cts..."/>
                    </div>
                </div>
            </div>
           </div>
            </>
            <>
            <div className="rewardsCarou">
            <div className="row">
                <h2 className="exp_header">Software Development Team Lead</h2><hr/>
                <div className="col-lg-6">
                    <div className="exp">
                        <p className="">
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="org-pic" >
                    <img className="" src={ava2} alt="cts..."/>
                    </div>
                </div>
            </div>
           </div>
            </>
            
        </Carousel>
    )
}

export default RewardsCarousel
