// src/App.js
import React, { useState } from 'react';
import './App.css';
import Grid from './components/grid/grid'
import Controls from './components/controls/controls';
import RobotRenderer from './components/robotRenderer/robotRenderer';
import CoordinateViewer from './components/coordinateViewer/coordinateViewer';

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 'NORTH' });

  const moveForward = () => {
    const { x, y, direction } = position;
    let newX = x;
    let newY = y;

    switch (direction) {
      case 'NORTH':
        newY = Math.min(4, y + 1);
        break;
      case 'EAST':
        newX = Math.min(4, x + 1);
        break;
      case 'SOUTH':
        newY = Math.max(0, y - 1);
        break;
      case 'WEST':
        newX = Math.max(0, x - 1);
        break;
      default:
        break;
    }

    console.log(`Moving from (${x}, ${y}) to (${newX}, ${newY})`);
    setPosition({ ...position, x: newX, y: newY });
  };

  const rotateLeft = () => {
    const currentDirectionIndex = directions.indexOf(position.direction);
    const newDirectionIndex = (currentDirectionIndex + directions.length - 1) % directions.length;
    console.log(`Rotating left from ${position.direction} to ${directions[newDirectionIndex]}`);
    setPosition({ ...position, direction: directions[newDirectionIndex] });
  };

  const rotateRight = () => {
    const currentDirectionIndex = directions.indexOf(position.direction);
    const newDirectionIndex = (currentDirectionIndex + 1) % directions.length;
    console.log(`Rotating right from ${position.direction} to ${directions[newDirectionIndex]}`);
    setPosition({ ...position, direction: directions[newDirectionIndex] });
  };

  return (
    <div className="App">
      <CoordinateViewer position={position} />
      <div className='flex flex-row justify-center items-center'>
      <RobotRenderer position={position} />
      </div>
      <Controls moveForward={moveForward} rotateLeft={rotateLeft} rotateRight={rotateRight} />
    </div>
  );
};

export default App;
