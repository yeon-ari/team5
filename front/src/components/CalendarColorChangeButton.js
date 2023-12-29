// ColorChangeButton.js
import React from 'react';

const ColorChangeButton = ({ onSelectColor }) => {
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#7F00FF'];

  const handleChangeColor = (color) => {
    onSelectColor(color);
  };

  return (
    <div>
      {colors.map((color, index) => (
        <div key={index} style={{ backgroundColor: color, width: '30px', height: '30px', margin: '5px', cursor: 'pointer' }} onClick={() => handleChangeColor(color)} />
      ))}
    </div>
  );
};

export default ColorChangeButton;
