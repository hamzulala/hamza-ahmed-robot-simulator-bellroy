import React from 'react';

const Grid = ({ position }) => {
  const gridSize = 5;
  return (
    <div className="inline-block mb-5">
      {Array.from({ length: gridSize }, (_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: gridSize }, (_, colIndex) => (
            <div
              key={colIndex}
              className={`w-5 h-5 shadow-lg border border-gray-500 flex items-center justify-center ${
                position.x === colIndex && position.y === gridSize - 1 - rowIndex ? 'bg-gray-400' : ''
              }`}
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
