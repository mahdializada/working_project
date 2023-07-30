import React, { useState } from 'react';
import Clock from './Clock';

function ParentComponent() {
  const [selectedColor, setSelectedColor] = useState('black');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  // Update the time every second
  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>Parent Component</h1>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
      <Clock color={selectedColor} time={currentTime} />
    </div>
  );
}

export default ParentComponent;
