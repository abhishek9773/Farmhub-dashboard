import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";

const DashboardBox = ({ className, title, icons, percentage, graph }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div
      className={clsx(
        `lg:w-[48%] h-[180px] rounded-md p-4 py-2 flex flex-col justify-around relative ${className}`
      )}
    >
      <div className="text-8xl text-black/10 absolute bottom-7 left-5">
        {graph}
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <h4 className="text-white font-bold">{title}</h4>
          <p className="font-bold text-4xl text-white">330</p>
        </div>
        <div className="ml-auto bg-gradient-to-r from-black/40 to-black/10 flex items-center justify-center p-2 rounded-md">
          <div className="text-4xl text-white opacity-40">{icons}</div>
        </div>
      </div>
      <div className="flex items-center gap-32 justify-between mb-0 mt-0 text-white font-bold relative">
        <div className="flex gap-1 text-sm whitespace-nowrap">
          <span className="bg-black/30 px-[3px] md:p-[2px] rounded-md">
            +{percentage}%{" "}
          </span>{" "}
          Last Month
        </div>

        <button
          className="p-1 rounded-full hover:bg-black/10 relative"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <BsThreeDotsVertical className="text-black hover:text-black/50 cursor-pointer" />
        </button>

        {showDropdown && (
          <div className="absolute right-0 bottom-full md:top-full  w-34 bg-lime-50 rounded-md shadow-lg z-20 ">
            <ul className="py-1 text-gray-700 text-sm">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex gap-1 items-center justify-start">
                  <IoIosTimer />
                  <p>Last Day</p>
                </div>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex gap-1 items-center justify-start">
                  <IoIosTimer />
                  <p>Last Week</p>
                </div>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex gap-1 items-center justify-start">
                  <IoIosTimer />
                  <p>Last Month</p>
                </div>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex gap-1 items-center justify-start">
                  <IoIosTimer />
                  <p>Last Year</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBox;
