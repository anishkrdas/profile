import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div className="container">

  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">About Me<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="journey" offset={-50} className="nav-link" href="#">My Journey</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="techs" offset={-50} className="nav-link" href="#">Technologies</Link>
      </li>
      {/*
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
      </li>*/}
      <li className="nav-item">
        <Link smooth={true} to="contact" offset={-50} className="nav-link" href="#">Contact Me</Link>
      </li>

    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
