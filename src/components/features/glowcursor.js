import React, { useState, useEffect, useRef } from 'react';
import '../styling/glowcursor.css';
import Switch from "react-switch";

const GlowCursor = () => {
  const [glowEnabled, setGlowEnabled] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && glowEnabled) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [glowEnabled]);

  const toggleGlow = () => {
    setGlowEnabled(!glowEnabled);
  };

  return (
    <div>
      <div className='glowSwitch'>
        Torch
        <Switch
          onChange={toggleGlow}
          checked={glowEnabled}
          onColor='#87ceeb'
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
      {glowEnabled && <div className="glow-cursor" ref={cursorRef}></div>}
    </div>
  );
};

export default GlowCursor;
