import React from "react";

const Input = () => {
  return (
    <div>
      <div className="py-1">
        <label className="uppercase py-1 font-semibold">Title</label>
        <input
          className="w-full py-2 rounded-md px-3  "
          placeholder="write a title"
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
