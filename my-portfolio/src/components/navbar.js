import './styling/navbar.css';
import HamburgerMenu from './features/hamburgermenu';

const NavigationBar = () => {
    return (
        <div>
          <div className="navmenu" id="navmenu">
            <ul className="nav-links">
              <li><a className="" href="#home">Home</a></li>
              <li><a className="" href="#about">About</a></li>
              <li><a className="" href="#skills">Skills</a></li>
              <li><a className="" href="#projects">Projects</a></li>
              <li><a className="" href="#experiences">Experiences</a></li>
              <li><a className="" href="#contactme">Contact Me</a></li>
            </ul>
          </div>

          <HamburgerMenu />

        </div>
    )
};

export default NavigationBar;