// src/Grid.js
import React from 'react';
import './grid.css';

const Grid = ({ position }) => {
  const gridSize = 5;
  return (
    <div className="grid">
      {Array.from({ length: gridSize }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: gridSize }, (_, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${position.x === colIndex && position.y === gridSize - 1 - rowIndex ? 'robot' : ''}`}
            >
              {position.x === colIndex && position.y === gridSize - 1 - rowIndex ? '🤖' : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
