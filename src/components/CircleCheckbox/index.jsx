import React from "react";

const CircleCheckbox = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 w-0 h-0 "
      />
      <span className="flex items-center justify-center w-4 h-4 bg-white rounded-full border-[1px] border-black">
        {checked && (
          <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
        )}
      </span>
    </label>
  );
};

export default CircleCheckbox;
