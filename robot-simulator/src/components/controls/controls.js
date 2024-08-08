// src/Controls.js
import React from 'react';

const Controls = ({ moveForward, rotateLeft, rotateRight }) => {
  return (
    <div className="controls">
      <button onClick={rotateLeft}>Rotate Left</button>
      <button onClick={moveForward}>Move Forward</button>
      <button onClick={rotateRight}>Rotate Right</button>
    </div>
  );
};

export default Controls;
