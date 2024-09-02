import React, { useState, useEffect } from 'react';
import '../styling/navbar.css';
import HamburgerMenu from './hamburgermenu';

const NavigationBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [isTurned, setIsTurned] = useState(false);

  const handleToggleNav = () => {
    setIsTurned(!isTurned);
    setIsNavVisible(!isNavVisible);
    setIsSideNavVisible(!isSideNavVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSideNavVisible) {
        const sideNavElement = document.getElementById('sideNavMenu');
        const sideNavRect = sideNavElement.getBoundingClientRect();
    
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        const isOutsideSideNav =
          mouseX < sideNavRect.left ||
          mouseX > sideNavRect.right ||
          mouseY < sideNavRect.top ||
          mouseY > sideNavRect.bottom;
    
        if (isOutsideSideNav) {
          handleToggleNav();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSideNavVisible, handleToggleNav]);
  


  return (
    <div>
      <div className={`navMenu ${isNavVisible ? 'nav_visible' : 'nav_hidden'}`} id="navMenu">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#contactme">Contact Me</a></li>
        </ul>
      </div>

      <div className={`sideNavMenu ${isSideNavVisible ? 'side_visible' : 'side_hidden'}`} id="sideNavMenu">
        <ul className="side-nav-links">
          <li><a href="#home" onClick={handleToggleNav}>Home</a></li>
          <li><a href="#about" onClick={handleToggleNav}>About</a></li>
          <li><a href="#skills" onClick={handleToggleNav}>Skills</a></li>
          <li><a href="#projects" onClick={handleToggleNav}>Projects</a></li>
          <li><a href="#experiences" onClick={handleToggleNav}>Experiences</a></li>
          <li><a href="#contactme" onClick={handleToggleNav}>Contact Me</a></li>
        </ul>
      </div>

      <HamburgerMenu onToggleNav={handleToggleNav} isTurned={isTurned} />
    </div>
  );
};

export default NavigationBar;
