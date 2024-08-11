import React from "react";
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

const Controls = ({ moveForward, rotateLeft, rotateRight }) => {
  return (
    <div className="flex flex-row justify-center p-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-lg font-bold uppercase text-gray-50 hover:shadow-md transition ease-in-out duration-75 bg-[#d16332] shadow-lg rounded-md"
        onClick={rotateLeft}
      >
        <AiOutlineRotateLeft />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-lg font-bold uppercase text-gray-50 hover:shadow-md transition ease-in-out duration-75 bg-[#d16332] shadow-lg rounded-md"
        onClick={moveForward}
      >
        <MdOutlineKeyboardDoubleArrowUp />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-lg font-bold uppercase text-gray-50 hover:shadow-md transition ease-in-out duration-75 bg-[#d16332] shadow-lg rounded-md"
        onClick={rotateRight}
      >
        <AiOutlineRotateRight />
      </motion.button>
    </div>
  );
};

export default Controls;
