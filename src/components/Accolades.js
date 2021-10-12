import React from "react";
import hm from "../images/accolades/hiringManager.JPG";
import asns1 from "../images/accolades/aSNS1.JPG";
import asns2 from "../images/accolades/aSNS2.JPG";

const Accolades = () => {
    return (
        <div id = "accolades" className="rewards">
            <h1>Recognitions</h1>
            <div className="acc-container">
	<div className="top">
    	<ul>
        	<li><a href="#img_1"><img src={asns2}/></a></li>
            <li><a href="#img_2"><img src={asns1}/></a></li>
            <li><a href="#img_3"><img src={asns2}/></a></li>
            <li><a href="#img_4"><img src={asns2}/></a></li>
        </ul>
        <a href="#_1" className="lightbox trans" id="img_1"><img src={asns1}/></a>
        <a href="#_2" className="lightbox trans" id="img_2"><img src={asns1}/></a>
        <a href="#_3" className="lightbox trans" id="img_3"><img src={asns2}/></a>
        <a href="#_4" className="lightbox trans" id="img_4"><img src={asns1}/></a>

    </div>
</div>
        
    </div>
    )
}

export default Accolades
