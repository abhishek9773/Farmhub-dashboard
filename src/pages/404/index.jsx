import React from "react";
import { Link } from "react-router-dom";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <img src="/logo.png" alt="FarmDash Logo" className="w-32 h-32 mb-8" />
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        It looks like the page you are looking for doesn't exist.
      </p>
      <Link to="/">
        <a className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
          Back to Home
        </a>
      </Link>
      <p className="mt-4 text-gray-500">
        Or check out some of our popular services:
      </p>
      <div className="flex space-x-4 mt-4">
        <Link to="/services">
          <a className="text-green-600 hover:underline">Our Services</a>
        </Link>
        <Link to="/contact">
          <a className="text-green-600 hover:underline">Contact Us</a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
