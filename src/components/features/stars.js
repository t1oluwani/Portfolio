import React, { useEffect } from 'react';
import '../styling/starryNight.css'; 

const Stars = ({ numberOfStars }) => {
  useEffect(() => {
    const container = document.getElementById('stars-container');

    // Remove existing stars when component re-renders
    container.innerHTML = '';

    // Generate stars dynamically
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      // Randomize the size of stars between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Randomize the position of stars
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;

      container.appendChild(star);
    }
  }, [numberOfStars]); // Re-run effect when numberOfStars changes

  return (
    <div id="stars-container" className="stars-container"></div>
  );
};

export default Stars;
