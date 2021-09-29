import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import j from "../images/logo/j.png";
import hjc from "../images/logo/hjc.png";
import sb from "../images/logo/sb.png";
import s from "../images/logo/s.png";
import p from "../images/logo/p.png";
import njs from "../images/logo/njs.png";

const TechsCarousel = () => {
    return (
        <div>
        <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={650}
            showIndicators={false}
            >
            <>
            <a href="https://www.oracle.com/in/java/">
                <img src={j} alt="Java"/></a>
                {/*<div className="techsCarou">
                </div>*/}
            </>
            <>
            <a href="https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript">
                <img src={hjc} alt="HTML, JavaScript&amp; CSS"/></a>
                {/*<div className="techsCarou">
                </div>*/}
            </>
            <>
            <a href="https://nodejs.org/en/">
                <img src={njs} alt="nodeJS"/></a>
                <div className="techsCarou">
                </div>
            </>
            <>
            <a href="https://spring.io/projects/spring-boot">
                <img src={sb} alt="SpringBoot"/></a>
                {/*<div className="techsCarou">
                </div>*/}
            </>
            <>
            <a href="https://spring.io/">
                <img src={s} alt="Spring"/></a>
                <div className="techsCarou">
                </div>
            </>
            {/*<>
            <a href="https://www.python.org/">
                <img src={p} alt="Python"/></a>
                <div className="techsCarou">
                </div>
            </>*/}
        </Carousel>
        </div>
    )
}

export default TechsCarousel
