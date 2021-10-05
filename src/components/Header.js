import React from "react";
import Typed from "react-typed";
import {motion} from "framer-motion";



const Header = () => {
    
    const container = {
        hidden: {opacity:1, scale:0},
        visible: {
            opacity:1,
            scale:1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },

    }

    const item = {
        hidden: {y:20, opacity:0},
        visible: {y:0, opacity:1},
        loop: true
    }

    return (
        <div className="head">
        <div id = "home" className="header-wraper parallax section">
            <div>
            <div className="main-info">
                {/*<div class="text-1">
                <Typed 
                    className="typed-text"
                    strings={["Anish Kumar Das"]}
                    typeSpeed={1}
                    backSpeed={0}
                />
                </div>*/}
			    <div className="header-text"><Typed
                className="typed-text2"
                    strings={["Web Application Developer"]}
                    typeSpeed={40}
                    backSpeed={89}
    /></div>
    <motion.div className="icons-wrapper"
    variants={container}
    initial= 'hidden'
    animate='visible'
    >
        <div className = "icons-list" style= {{display: "flex"}}>
            <motion.div className="item-6 item" variants={item}></motion.div>
            <motion.div className="item-2 item" variants={item}></motion.div>
            <motion.div className="item-7 item" variants={item}></motion.div>
            <motion.div className="item-1 item" variants={item}></motion.div>
            <motion.div className="item-5 item" variants={item}></motion.div>
            <motion.div className="item-3 item" variants={item}></motion.div>
            <motion.div className="item-8 item" variants={item}></motion.div>
            {/*<motion.div className="item-4 item" variants={item}></motion.div>*/}
        </div>
</motion.div>
<div className="header-text1"><Typed 
                    className="typed-text1"
                    strings={["Programmer"]}
                    typeSpeed={108}
                    backSpeed={109}
    /></div>
    </div>
    
    {/*<div class="arrow-head bounce">
  <a class="fa fa-arrow-down fa-2x" href="#"></a>
            </div>*/}


            </div>
            </div>
            </div>
        
    )
}

export default Header
