import React, { useState } from "react";
import "./App.css";
import Controls from "./components/controls/controls";
import RobotRenderer from "./components/robotRenderer/robotRenderer";
import CoordinateViewer from "./components/coordinateViewer/coordinateViewer";
import { moveForward, rotateLeft, rotateRight } from "./robotLogic";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: "NORTH" });

  const handleMoveForward = () => {
    const newPosition = moveForward(position);
    console.log(`Moving from (${position.x}, ${position.y}) to (${newPosition.x}, ${newPosition.y})`);
    setPosition(newPosition);
  };

  const handleRotateLeft = () => {
    const newPosition = rotateLeft(position);
    console.log(`Rotating left from ${position.direction} to ${newPosition.direction}`);
    setPosition(newPosition);
  };

  const handleRotateRight = () => {
    const newPosition = rotateRight(position);
    console.log(`Rotating right from ${position.direction} to ${newPosition.direction}`);
    setPosition(newPosition);
  };

  return (
    <div className="">
      <CoordinateViewer position={position} />
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold">Robot Simulator</h1>
      </div>
      <div className="flex flex-row justify-center items-center bg-[#f0f0f0] shadow-sm">
        <RobotRenderer position={position} />
      </div>
      <Controls
        moveForward={handleMoveForward}
        rotateLeft={handleRotateLeft}
        rotateRight={handleRotateRight}
      />
    </div>
  );
};

export default App;
