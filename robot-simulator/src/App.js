import React, { useState } from "react";
import "./App.css";
import Controls from "./components/controls/controls";
import RobotRenderer from "./components/robotRenderer/robotRenderer";
import CoordinateViewer from "./components/coordinateViewer/coordinateViewer";
import { moveForward, rotateLeft, rotateRight } from "./robotLogic";
import { motion } from "framer-motion";
import AboutMe from "./components/about/aboutMe";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: "NORTH" });

  const handleMoveForward = () => {
    const newPosition = moveForward(position);
    console.log(
      `Moving from (${position.x}, ${position.y}) to (${newPosition.x}, ${newPosition.y})`
    );
    setPosition(newPosition);
  };

  const handleRotateLeft = () => {
    const newPosition = rotateLeft(position);
    console.log(
      `Rotating left from ${position.direction} to ${newPosition.direction}`
    );
    setPosition(newPosition);
  };

  const handleRotateRight = () => {
    const newPosition = rotateRight(position);
    console.log(
      `Rotating right from ${position.direction} to ${newPosition.direction}`
    );
    setPosition(newPosition);
  };

  return (
    <div className="">
      <CoordinateViewer position={position} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-4 shadow-lg"
      >
        <h1 className="text-center text-2xl font-semibold tracking-wide">
          Robot Simulator
        </h1>
      </motion.div>
      <div className="flex flex-row justify-center items-center bg-[#c4c4c4] shadow-lg">
        <RobotRenderer position={position} />
      </div>
      <div className="">
        <Controls
          moveForward={handleMoveForward}
          rotateLeft={handleRotateLeft}
          rotateRight={handleRotateRight}
        />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
};

export default App;
