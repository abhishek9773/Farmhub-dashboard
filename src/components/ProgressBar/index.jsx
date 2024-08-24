// src/components/ProgressBar.jsx

import React from "react";

const ProgressBar = ({ progress }) => {
  console.log(progress);
  return (
    <div className="w-full bg-gray-300 rounded-full h-[6px]">
      <div
        className="bg-yellow-400 h-[6px] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
