import React, { useState } from 'react';
import '../styling/hamburgermenu.css'; 

const HamburgerMenu = () => {
  const [isTurned, setIsTurned] = useState(false);

  const handleClick = () => {
    setIsTurned(!isTurned);
  };

  return (
    <div>
      {/* Hamburger menu */}
      <button 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navmenu"
      >
        <div 
          className={`hamburger_menu ${isTurned ? 'turn' : ''}`} 
          onClick={handleClick}
        >
          <div className="topbar"></div>
          <div className="midbar"></div>
          <div className="botbar"></div>
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
