import React, { useEffect, useState } from 'react';
import '../styling/starryNight.css';
import Stars from './stars';

const StarryNight = () => {

  const [starNum, setStarNum] = useState(0);

  const handleRangeChange = (event) => {
    setStarNum(event.target.value);
  };

  useEffect(() => {
    const starNum = document.getElementById('starNum');
    const output = document.querySelector('output');

    starNum.addEventListener('input', updateValue);

    function updateValue(e) {
      output.textContent = e.target.value;
    }
  }, [starNum]);


  return (
    <div className='starController'>
      <div className='starSlider'>
        <label for="starNum" className='starLabel'>
          Number of Stars:&nbsp;
          <output></output>
        </label>
        <input
          type="range"
          id="starNum"
          min="1" max="1000"
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
