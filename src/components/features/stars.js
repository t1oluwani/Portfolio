import React, { useEffect } from 'react';
import '../styling/starryNight.css'; 

const Stars = ({ numberOfStars }) => {
  useEffect(() => {
    const container = document.getElementById('stars-container');
    
    container.innerHTML = ''; // Remove existing stars when component re-renders

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      // Randomize size (1px - 3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Randomize position
      star.style.top = `${Math.random() * ((9 * window.innerHeight) - 275)}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;

      container.appendChild(star);
    }
  }, [numberOfStars]);

  return (
    <div id="stars-container" className="stars-container"></div>
  );
};

export default Stars;
