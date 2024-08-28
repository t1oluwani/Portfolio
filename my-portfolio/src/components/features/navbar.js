import React, { useState } from 'react';
import '../styling/navbar.css';
import HamburgerMenu from '../features/hamburgermenu';

const NavigationBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  const handleToggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <div>
      <div className={`navMenu ${isNavVisible ? '' : 'hidden'}`} id="navMenu">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#contactme">Contact Me</a></li>
        </ul>
      </div>

      <div className={`sideNavMenu ${isSideNavVisible ? '' : 'hidden'}`} id="sideNavMenu">
        <ul className="side-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#contactme">Contact Me</a></li>
        </ul>
      </div>

      <HamburgerMenu onToggleNav={handleToggleNav} />
    </div>
  );
};

export default NavigationBar;
