// src/components/ProgressBar.jsx

import React from "react";

const ProgressBar = ({ progress }) => {
  console.log(progress);
  return (
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div
        className="bg-yellow-400 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
