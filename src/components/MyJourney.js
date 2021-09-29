import React from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import cts from "../images/orgs/cognizant1.jpg";
import amdocs from "../images/orgs/amdocs.jpg";
import techM from "../images/orgs/TechM.jpg";
import cv from "../misc/AnishKumaDas_CurriculumVitae.pdf";
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const MyJourney = () => {

    const openPopupbox_cts_tl = () => {
        const content = (
            <>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="exp">
                        <h2 className="exp_header">Software Development Team Lead</h2>
                        <br/>
                        <p className="exp_body">
                            <ul>
                                <li>
                                Primary responsibilities include, but are not limited to, technical direction on building large scale software components, overseeing agile software development process, addressing issues and escalations and last but not the least, working with various stakeholders (PM, Business/Operations Leads) on requirement, design and integration of software components. 
                                </li><br/>
                                <li>
                                Expertise and strength in hiring, leading and growing talent within teams and help build vision that facilitates organizational growth.
                                </li><br/>
                                <li>
                                Strong experience in improving existing software as well as building new one that impact bottom-line.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                <div className="org-pic" >
                    <img className="org_img" src={cts} alt="cts..."/>
                    </div>
                </div>
                
            </div>
            
        </>
        )
        PopupboxManager.open({ content });
    }

    const popupboxConfig_cts_tl = {
        
    }


    const openPopupbox_dvci_asd_rd = () => {
        const content = (
            <>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="exp">
                        <h2 className="exp_header">Software Development Specialist (Acting) &amp; <br/>Advanced Software Developer</h2><br/>
                        <p className="exp_body">
                        <ul>
                                <li>
                                Lead, developer and mentor to multiple junior developers in the Amdocs Digital Product – RTB, which happened to be a part of Amdocs R&amp;D during the time.
                                </li><br/>
                                <li>
                                Responsible for analyzing, designing, coding and implementing several Microservices of the application designed under Amdocs MS360 framework.
                                </li><br/>
                                <li>
                                Implementing logical solutions to calculate billing cycles, prorated and recurring charges and more for Amdocs Digital Product in R&amp;D.
                                </li><br/>
                                <li>
                                Assess estimations associated with developing new product-based features.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <div className="org-pic" >
                        <img className="org_img" src={amdocs} alt="amdocs..."/>
                    </div>
                </div>
            </div>
        </>
        )
        PopupboxManager.open({ content });
    }

    const popupboxConfig_dvci_asd_rd = {
    }

    const openPopupbox_dvci_asd = () => {
        const content = (
            <>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="exp">
                        <h2 className="exp_header">Advanced Software Developer</h2><br/>
                        <p className="exp_body">
                        <ul>
                                <li>
                                Gather and define customer requirements to develop clear specifications for creating well-organized project plans. 
                                </li><br/>
                                <li>
                                Lead code reviews and estimate the required changes.
                                </li><br/>
                                <li>
                                Develop code fixes and enhancements for inclusion in future code releases and patches.
                                </li><br/>
                                <li>
                                Develop databases, programs and processes for integration and implementation across enterprise.
                                </li>
                            </ul>
                        </p>
                    </div>
            </div>
                <div className="col-lg-6 col-xm-12">
                    <div className="org-pic" >
                        <img className="org_img" src={amdocs} alt="amdocs..."/>
                    </div>
                </div>
            </div>
        </>
        )
        PopupboxManager.open({ content });
    }

    const popupboxConfig_dvci_asd = {
    }

    const openPopupbox_dvci_esd = () => {
        const content = (
            <>
             <div className="row">
                <div className="col-lg-6 col-xm-12">
            <div className="exp">
                <h2 className="exp_header">Experienced Software Developer</h2><br/>
                <p className="exp_body">
                <ul>
                        <li>
                        Participated in complete software development lifecycle, including performance analysis, design, development and testing.
                        </li><br/>
                        <li>
                        Troubleshot various software issues by using debugs for the analysis in order to uncover root issues.
                        </li><br/>
                        <li>
                        Monitored ongoing operation of assigned programs and responded to issues and defects by diagnosing and correcting logic and coding errors formulating corrective recommendations.
                        </li><br/>
                        <li>
                        Worked with quality assurance team to set up scripts, test case and automation protocols.
                        </li><br/>
                        <li>
                        Reworked on applications to meet changing market trends and customer demands.
                        </li>
                    </ul>
                </p>
            </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                    <div className="org-pic" >
                        <img className="org_img" src={amdocs} alt="amdocs..."/>
                    </div>
                </div>
            </div>
        </>
        )
        PopupboxManager.open({ content });
    }

    const popupboxConfig_dvci_esd = {
    }

    const openPopupbox_se_tml = () => {
        const content = (
            <>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
            <div className="exp">
                <h2 className="exp_header">Software Engineer</h2><br/>
                <p className="exp_body">
                <ul>
                        <li>
                        As a Java developer of the application, Enterprise Document Delivery (service in SOAP) widely used by AT&amp;T in order to send notifications for AT&amp;T customers (Core Java, JMS, Batches).
                        </li><br/>
                        <li>
                        Worked with business users and operations teams to understand business needs and address production issues/concerns.
                        </li><br/>
                        <li>
                        As a Java developer for the My AT&amp;T web application in Payment’s module.
                        </li>
                    </ul>
                </p>
            </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                    <div className="org-pic" >
                        <img className="org_img" src={techM} alt="techM..."/>
                    </div>
                </div>
            </div>
        </>
        )
        PopupboxManager.open({ content });
    }

    const popupboxConfig_se_tml = {
    }

    const openPopupbox_ase_tm = () => {
        const content = (
            <>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
            <div className="exp">
                <h2 className="exp_header">Software Engineer</h2><br/>
                <p className="exp_body">
                <ul>
                        <li>
                        Java
                        </li><br/>
                        <li>
                        SQL, PL/SQL
                        </li><br/>
                        <li>
                        J2EE
                        </li>
                    </ul>
                </p>
            </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                    <div className="org-pic" >
                        <img className="org_img" src={techM} alt="techM..."/>
                    </div>
                </div>
            </div>
        </>
        )
        PopupboxManager.open({ content });
    }

    const popupboxConfig_ase_tm = {
    }


    return (
        <div id = "journey" className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>My Journey</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right cts_tl" >
                        <div className="marker">
                        </div>
                        <div className="timeline-content">
                            <h3>Dec. 2020&nbsp;&ndash;&nbsp;Present</h3>
                            <p>Senoir Associate - Projects<br/>(Software Development Team Lead)<br/>
                            <b>Cognizant Digital Engineering<br/>
                            Cognizant Technology Solutions</b></p>
                        </div> 
                        <div className="overflow" onMouseOver={openPopupbox_cts_tl}></div>
                        <FontAwesomeIcon className = "tool-icon-right" icon={faSearchPlus}/>
                </div>
                {/* --*/}
                <div className="timeline-block timeline-block-left dvci_asd_rd">
                        <div className="marker"> 
                        </div>
                        <div className="timeline-content">
                            <h3>Mar. 2020&nbsp;&ndash;&nbsp;Nov. 2020</h3>
                            <p>Software Developer Specialist (Acting)<br/> Advanced Software Developer &amp; <br/>
                            <b>Amdocs R&amp;D<br/>
                            Amdocs Development Center India</b></p>
                        </div>
                        <div className="overflow" onMouseOver={openPopupbox_dvci_asd_rd}></div>
                        <FontAwesomeIcon className = "tool-icon" icon={faSearchPlus}/>
                </div>
                {/* --*/}
                <div className="timeline-block timeline-block-right dvci_asd">
                        <div className="marker">
                        </div>
                        <div className="timeline-content">
                            <h3>Sept. 2018&nbsp;&ndash;&nbsp;Mar. 2020</h3>
                            <p>Advanced Software Developer<br/>
                            <b>Amdocs Development<br/>
                            Amdocs Development Center India</b></p>
                        </div>
                        <div className="overflow" onMouseOver={openPopupbox_dvci_asd}></div>
                        <FontAwesomeIcon className = "tool-icon-right" icon={faSearchPlus}/>
                </div>
                {/* --*/}
                <div className="timeline-block timeline-block-left dvci_esd">
                    <div className="marker">
                    </div>
                    <div className="timeline-content">
                        <h3>Jun. 2017&nbsp;&ndash;&nbsp;Sept. 2018</h3>
                        <p>Experienced Software Developer<br/>
                        <b>Amdocs Delivery<br/>
                        Amdocs Development Center India</b></p>
                    </div>
                    <div className="overflow" onMouseOver={openPopupbox_dvci_esd}></div>
                    <FontAwesomeIcon className = "tool-icon" icon={faSearchPlus}/>
                </div>
                
                {/* --*/}
                <div className="timeline-block timeline-block-right se_tml">
                    <div className="marker">
                    </div>
                    <div className="timeline-content">
                        <h3>Mar. 2015&nbsp;&ndash;&nbsp;Jun. 2016</h3>
                        <p>Software Engineer<br/>
                        <b>Tech Mahindra Limited</b></p>
                    </div>
                    <div className="overflow" onMouseOver={openPopupbox_se_tml}></div>
                    <FontAwesomeIcon className = "tool-icon-right" icon={faSearchPlus}/>
                </div>
                {/* --*/}
                <div className="timeline-block timeline-block-left ase_tml">
                    <div className="marker">
                    </div>
                    <div className="timeline-content">
                        <h3>Oct. 2014&nbsp;&ndash;&nbsp;Feb. 2015</h3>
                        <p>Associate Software Engineer<br/>
                        <b>Tech Mahindra Limited</b></p>
                    </div>
                    <div className="overflow" onMouseOver={openPopupbox_ase_tm}></div>
                    <FontAwesomeIcon className = "tool-icon" icon={faSearchPlus}/>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfig_cts_tl}/>
            <PopupboxContainer {...popupboxConfig_dvci_asd_rd}/>
            <PopupboxContainer {...popupboxConfig_dvci_asd}/>
            <PopupboxContainer {...popupboxConfig_dvci_esd}/>
            <PopupboxContainer {...popupboxConfig_se_tml}/>
            <PopupboxContainer {...popupboxConfig_ase_tm}/>
            <a href={cv} download="AnishKumaDas_CurriculumVitae.pdf"><button className="cv-btn contact-btn">Download my Curriculum Vitae</button></a>
        </div>
    )
}

export default MyJourney