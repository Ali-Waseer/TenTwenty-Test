import React, { useState } from "react";
import "../navbar.css";
import Slider from "./slider/Slider";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <>
    <nav className="nav">
      <a href="#" className="nav__brand">
       TenTwenty
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
           About us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Our Team
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
           Our Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Sustainability
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
           Darna Loyalty Program
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
     
    </nav>
    <Slider />
    </>
  );
}

export default Navbar;
