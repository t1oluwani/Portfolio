import React, { useState } from 'react';
import '../styling/starryNight.css';
import Stars from './stars';

const StarryNight = () => {
  const [starNum, setStarNum] = useState(500);

  const handleRangeChange = (event) => {
    setStarNum(event.target.value);
  };

  return (
    <div className='starController'>
      <div className='starSlider'>
        <label htmlFor="starNum" className='starLabel'>
          Number of Stars:&nbsp;
          <output>{starNum}</output>
        </label>
        <input
          type="range"
          id="starNum"
          min="1"
          max="1000"
          value={starNum}
          className='starNum'
          onChange={handleRangeChange}
        />
      </div>
      <Stars numberOfStars={starNum} />
    </div>
  );
};

export default StarryNight;
