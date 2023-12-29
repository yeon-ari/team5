// FontChangeButton.js
import React, { useState } from 'react';

const FontChangeButton = () => {
  const fontOptions = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Impact', 'Lucida Console', 'Palatino'];

  const [selectedFont, setSelectedFont] = useState('DefaultFont');

  const handleChangeFont = () => {
    // Get a random font from the options
    const randomFont = fontOptions[Math.floor(Math.random() * fontOptions.length)];
    setSelectedFont(randomFont);
  };

  return (
    <div>
      <button onClick={handleChangeFont}>Change Font</button>

      <div style={{ fontFamily: selectedFont, fontSize: '20px', marginTop: '20px' }}>
        Text with the selected font. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default FontChangeButton;
