
import React, { useState } from "react";
import "./PriceRange.css";

const PriceRange = () => {
  const [value, setValue] = useState(5);

  const handleChange = (e) => {
    setValue(e.target.value);
    const percentage = (e.target.value / 10) * 100;
    document.documentElement.style.setProperty("--value", `${percentage}%`);
  };

  return (
    <div className="price-range-container">
      <p>Price Range</p>
      <div className="slider-container">

      <div
          className="slider-tooltip"
          style={{
            left: `calc(${((value - 0.01) / (10 - 0.01)) * 100}% - 20px)`,
          }}
        >
          {value} $NUZ
        </div>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={value}
          onChange={handleChange}
          className="slider"
        />
      </div>
      <div className="r-price ">
             <span className="text-white">0.01  $NUZ</span> 
           <span className="text-white">10 $NUZ</span></div>
   </div>
    
  );
};

export default PriceRange;
