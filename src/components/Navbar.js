import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";




const Navbar = () => {




    return (
    /*
<nav id = "navBar" className="navbar navbar-expand-lg navbar-cust">
  <div className="container">

  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto nav-center">
      <li className="nav-item active">
        <Link smooth={true} to="about" spy={true} offset={-47} duration={1} className="nav-link" href="#">About<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} spy={true} to="journey" offset={-47} duration={1} className="nav-link" href="#">Profile</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="techs" spy={true} offset={-47} duration={1} className="nav-link" href="#">Techs.</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="rewards" spy={true} offset={-47} duration={1} className="nav-link" href="#">Accolades</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="whatIDo" offset={-50} className="nav-link" href="#">Grinds</Link>
      </li>
        <li class="nav-item dropdown ">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Grinds
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link smooth={true} to="contact" offset={-50} class="dropdown-item" href="#">Professional Accolades</Link>
        <Link smooth={true} to="contact" offset={-50} class="dropdown-item" href="#">Gaming</Link>
          <Link smooth={true} to="contact" offset={-50} class="dropdown-item" href="#">Misc Items</Link>
        </div>
    </li>
      <li className="nav-item">
        <Link smooth={true} to="contact" spy={true} offset={-47} duration={1} className="nav-link" href="#">Contact</Link>
      </li>

    </ul>
  </div>
  </div>
</nav>*/
<div>
<input type="checkbox" id="ham-menu"/>
<label for="ham-menu" className="mor" title="Click to expand/collapse navigation">
  <div className="hide-des">
    <span className="menu-line"></span>
    <span className="menu-line"></span>
    <span className="menu-line"></span>
    <span className="menu-line"></span>
    <span className="menu-line"></span>
    <span className="menu-line"></span>
  </div>

</label>
<div className="navbar-add"></div>
<div className="ham-menu">
  <ul className="centre-text bold-text">
  <li className="nav-item active">
        <Link smooth={true} to="home" spy={true} offset={-47} duration={1} className="nav-link" href="#" type="checkbox">Home<span className="sr-only">(current)</span></Link>
      </li>
  <li className="nav-item active">
        <Link smooth={true} to="about" spy={true} offset={-47} duration={1} className="nav-link" href="#" type="checkbox">About<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="profile" spy={true} offset={-47} duration={1} className="nav-link" href="#" type="checkbox">Profile</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="journey" spy={true} offset={-47} duration={1} className="nav-link" href="#" type="checkbox">Exp.</Link>
    </li>
      <li className="nav-item">
        <Link smooth={true} to="techs" spy={true} offset={-47} duration={1} className="nav-link" href="#" type="checkbox">Techs.</Link>
      </li>

    <li className="nav-item">
        <Link smooth={true} to="contact" spy={true} offset={-47} duration={1} className="nav-link" href="#" type="checkbox">Contact</Link>
      </li>

  </ul>
</div></div>
    )
}

export default Navbar