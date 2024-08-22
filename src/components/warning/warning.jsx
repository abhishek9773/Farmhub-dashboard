import React from "react";

const MobileAndKeypadMessage = () => {
  return (
    <div className="relative w-full h-full py-2">
      {/* Message for Large Screens */}
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="w-full max-w-none flex flex-col items-center p-8 bg-yellow-100 text-yellow-800 border border-yellow-700 shadow-xl rounded-lg text-center">
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
          <p className="text-xl font-bold mb-4">Important Notice</p>
          <p className="text-base">
            We apologize for the inconvenience. Our website is currently
            optimized for larger screens, such as laptops and desktops. Mobile
            and keypad versions may not provide the best experience. For optimal
            use, please access our site on a larger screen device. We are
            actively working on improvements and will soon offer a more
            consistent experience across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAndKeypadMessage;
