import React from 'react';
import './App.css';

import Slider from './Slider'
import SidebarItem from './SidebarItem'

function App() {
  return (<div className="container">
    <div className="main-image" style={getImageStyle()}/>
    <div className="sidebar">
      {options.map((option, index) => {
        return (
          <SidebarItem 
          key={index}
          name={option.name}
          active={index === selectedOptionIndex}
          handleClick={() => selectedOptionIndex(index)}
          />
        )
      })}
    </div>
    <Slider 
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      value={selectedOption.value}
      handleChange={handleSliderChange}
    />
  </div>);
}

export default App;
