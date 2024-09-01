import React, { useEffect } from 'react';
import '../styling/starryNight.css';

const StarryNight = () => {

  return (
    <label for="favoriteMovieRating"> Number of Stars <output></output>
      <input type="range" id="starNum" min="0" max="1000"></input>
    </label>
  );
};

export default StarryNight;
