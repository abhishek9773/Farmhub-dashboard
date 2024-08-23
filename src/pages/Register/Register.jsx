import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../App";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { RiLockPasswordFill, RiShieldCheckFill } from "react-icons/ri";
import { MdEmail, MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiFarmer, GiFarmTractor } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

const Register = () => {
  const [showPassword, setShowPassword] = useState(true);
  const context = useContext(Mycontext);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    context.setIsHiddenSidebarAndHeader(true);
  }, [context]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image Background Div */}
      <div className="relative bg-green-600 w-full md:w-2/3 p-8 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              "url('https://example.com/farming-background.jpg')",
          }}
        >
          <GiFarmer className="text-white text-6xl md:text-9xl opacity-40 absolute top-4 left-4 md:top-8 md:left-8" />
          <GiFarmTractor className="text-white text-6xl md:text-9xl opacity-40 absolute bottom-4 right-4 md:bottom-8 md:right-8" />
          <MdDashboard className="text-white text-6xl md:text-9xl opacity-40 absolute bottom-4 left-4 md:bottom-8 md:left-8" />
        </div>
        <div className="relative z-10 text-left text-white max-w-md md:max-w-lg">
          <h1 className="uppercase text-3xl md:text-5xl font-extrabold mb-4">
            Streamline Product Listings and Track Performance
          </h1>
          <p className="text-sm md:text-lg mb-8">
            FarmDash makes it easy to manage and update FarmHub products. Track
            live orders, shipping details, and get clear insights into daily,
            weekly, monthly, and yearly performance metrics.
          </p>
          <Link to="/">
            <button className="flex items-center gap-2 p-3 bg-green-500 hover:bg-green-500/50 rounded-md text-white uppercase">
              <MdHome className="text-xl md:text-2xl" />
              <span>Go to Home</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Registration Form Div */}
      <div className="bg-green-600/90 w-full md:w-1/3 p-8 flex items-center justify-center">
        <div className="relative z-20 text-center text-white w-full max-w-xs md:max-w-md">
          <div className="mb-4 text-3xl md:text-4xl font-bold">FarmHub</div>
          <div className="text-lg md:text-xl text-green-200 mb-4">
            Login to continue
          </div>
          <div className="relative font-medium pb-12 px-4 md:px-8 pt-1 m-2 rounded-md bg-white/50 text-gray-800">
            <form>
              <div className="relative flex items-center bg-gray-100 my-3 rounded-md text-gray-500 focus-within:text-green-500">
                <FaUserCircle className="absolute left-3 text-xl md:text-2xl " />
                <input
                  autoFocus
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full pl-12 p-2 rounded-md text-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 placeholder:text-sm"
                />
              </div>
              <div className="relative flex items-center bg-gray-100 my-3 rounded-md  focus-within:text-green-500 text-gray-500">
                <MdEmail className="absolute left-3 text-xl md:text-2xl " />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full pl-12 p-2 rounded-md text-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-sm text-gray-600"
                />
              </div>
              <div className="relative flex items-center bg-gray-100 my-3 rounded-md focus-within:text-green-500 text-gray-500">
                <RiLockPasswordFill className="absolute left-3 text-xl md:text-2xl  " />
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="Enter your Password"
                  className="w-full pl-12 p-2 rounded-md text-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-sm text-gray-600"
                />
                <div
                  onClick={handleShowPassword}
                  className="absolute right-3 text-xl md:text-2xl text-gray-500 cursor-pointer"
                >
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </div>
              </div>
              <div className="relative flex items-center bg-gray-100 my-3 rounded-md text-gray-500 focus-within:text-green-500">
                <RiShieldCheckFill className="absolute left-3 text-xl md:text-2xl " />
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="Confirm your password"
                  className="w-full pl-12 p-2 rounded-md text-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-sm text-gray-600"
                />
                <div
                  onClick={handleShowPassword}
                  className="absolute right-3 text-xl md:text-2xl text-gray-500 cursor-pointer"
                >
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </div>
              </div>

              <Link to="/forgot-password">
                <p className="text-xs pl-52 text-gray-700 underline hover:text-green-600 cursor-pointer">
                  Forgot Password
                </p>
              </Link>

              <div className="flex gap-1 items-center justify-start mt-4">
                <input type="checkbox" className="rounded-lg w-4 h-4" />
                <p className="text-black/90 text-xs font-normal">
                  I agree to all{" "}
                  <span className="underline cursor-pointer hover:text-green-600">
                    Terms & Conditions
                  </span>
                </p>
              </div>

              <div className="w-full mt-4 bg-lime-400 hover:bg-lime-300 py-2 text-slate-800 rounded-md font-semibold text-sm">
                <button className="uppercase w-full">Sign up</button>
              </div>

              <div className="flex items-center my-4">
                <p className="h-[1px] bg-slate-500/50 w-[42%]"></p>
                <p className="rounded-full border border-black/50 text-slate-500 text-xs border-black m-1 w-8 h-8 flex items-center justify-center">
                  or
                </p>
                <p className="h-[1px] bg-slate-500/50 w-[42%]"></p>
              </div>

              <div className="flex items-center hover:bg-blue-300 bg-blue-400 p-2 gap-4 justify-center rounded-md cursor-pointer">
                <FcGoogle className="text-2xl md:text-3xl" />
                <p className="text-center font-semibold text-black">
                  Login with Google
                </p>
              </div>

              <div className="absolute bottom-2 left-1/2 flex gap-1 transform -translate-x-1/2 items-center">
                <p className="text-gray-700 text-xs">
                  Already have an account?{" "}
                </p>
                <Link
                  to="/login"
                  className="text-black underline  cursor-pointer hover:text-green-600 text-xs"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
