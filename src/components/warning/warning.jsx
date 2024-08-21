import React from "react";

const MobileAndKeypadMessage = () => {
  return (
    <div className="relative">
      {/* Message for Large Screens */}
      <div className="hidden lg:block absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-lg text-center border border-gray-200">
          {/* Placeholder Logo */}
          <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
          </div>
          <p className="text-xl font-bold text-gray-800 mb-4">
            Important Notice
          </p>
          <p className="text-base text-gray-700">
            We apologize for the inconvenience. Currently, our website is
            optimized for larger screens, and mobile and keypad versions may not
            offer the best experience. We are actively working on improving this
            and will have a more consistent experience available soon.
          </p>
        </div>
      </div>

      {/* Message for Mobile and Keypad Users */}
      <div className="block lg:hidden p-4 bg-yellow-200 text-yellow-800 border border-yellow-700 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          {/* Placeholder Logo */}
          <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
          </div>
          <span className="text-xl font-bold">FromDash</span>
        </div>
        <p className="text-base">
          We apologize for the inconvenience. Currently, our website is
          optimized for larger screens, and mobile and keypad versions may not
          offer the best experience. We are actively working on improving this
          and will have a more consistent experience available soon.
        </p>
      </div>
    </div>
  );
};

export default MobileAndKeypadMessage;
