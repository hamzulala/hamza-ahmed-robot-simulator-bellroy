import React from "react";

const CoordinateViewer = ({ position }) => {
  return (
    <div className="flex flex-row bg-[#d16332] text-white justify-center space-x-2">
      <div className="flex flex-row space-x-2">
        <p className="font-bold">Current Position:</p>
      <p>
        ({position.x}, {position.y})
      </p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="font-bold">Current Direction:</p>
        <p>{position.direction}</p>
      </div>
    </div>
  );
};

export default CoordinateViewer;
