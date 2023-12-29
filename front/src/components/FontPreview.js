import React from 'react';

const FontPreview = ({ font }) => {
  const style = {
    fontFamily: font,
    fontSize: '16px',
  };

  return <p style={style}>Font Preview</p>;
};

export default FontPreview;