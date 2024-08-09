// src/Controls.js
import React from 'react';
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Controls = ({ moveForward, rotateLeft, rotateRight }) => {
  return (
    <>
    <button className='text-lg font-bold uppercase text-gray-50 hover:shadow-2xl transition ease-in-out duration-75 bg-[#d16332] shadow-lg rounded-md' onClick={moveForward}><MdOutlineKeyboardDoubleArrowUp/></button>
    <div className="flex flex-row justify-center space-x-3">
      <button className='text-lg font-bold uppercase text-gray-50 hover:shadow-2xl transition ease-in-out duration-75 bg-[#d16332] shadow-lg rounded-md' onClick={rotateLeft}><AiOutlineRotateLeft/></button>
      <button className='text-lg font-bold uppercase text-gray-50 hover:shadow-2xl transition ease-in-out duration-75 bg-[#d16332] shadow-lg rounded-md' onClick={rotateRight}><AiOutlineRotateRight/></button>
    </div>
    </>
  );
};

export default Controls;
