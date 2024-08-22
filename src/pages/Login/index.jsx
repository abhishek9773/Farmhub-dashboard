import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState("true");
  const context = useContext(Mycontext);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    context.setIsHiddenSidebarAndHeader(true);
  }, [context]);

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-green-900 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute -top-40 right-42 w-60 h-60 bg-green-700 rounded-full opacity-30"></div>
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-green-700 rounded-full opacity-30"></div>
      <div className="absolute top-32 -right-20 w-40 h-40 bg-green-600 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-800 rounded-full opacity-25"></div>

      {/* Background Triangles */}
      <div className="absolute top-30 left-20 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-green-700 opacity-20"></div>
      <div className="absolute top-36 right-48 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] border-b-green-600 opacity-20 rotate-90 "></div>
      <div className="absolute bottom-32 right-32 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] border-b-green-600 opacity-20 "></div>

      {/* Logo and Title */}
      <div className="relative z-20 text-center text-white ">
        <div className="mb-6 text-4xl font-bold">FarmHub</div>
        <div className="text-xl text-green-200">Login to continue</div>
        <div className="relative font-medium bg-gray-300/30 p-16 m-2 rounded-md w-auto md:w-[450px]">
          <form className="">
            <div className="relative flex items-center bg-gray-100 my-3 rounded-md focus-within:text-blue-600 text-slate-700">
              <MdEmail className="absolute left-3 text-2xl  transition-colors duration-200" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full pl-12 p-2 rounded-md text-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm"
              />
            </div>
            <div className="relative flex items-center bg-gray-100 mt-3 mb-1 rounded-md focus-within:text-blue-600  text-slate-700">
              <RiLockPasswordFill className="absolute left-3 text-2xl transition-colors duration-200" />
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Enter your Password"
                className="w-full pl-12 p-2 rounded-md text-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm"
              />
              <div
                onClick={handleShowPassword}
                className="absolute right-3 text-2xl transition-colors duration-200 text-slate-700 "
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </div>
            </div>

            <Link to={"/forgot-password"}>
              {" "}
              <p className="pl-56  text-xs hover:text-gray-100 text-lime-300 underline cursor-pointer">
                Forget Password
              </p>
            </Link>

            <div className="w-full inline-block bg-lime-400 hover:bg-lime-300 my-4 py-2 text-slate-800 rounded-md font-semibold  text-sm ">
              <button className="uppercase">Login</button>
            </div>
            <div className="flex items-center">
              <p className="h-[1px] bg-white/50 w-[42%]"></p>
              <p className=" rounded-full border border-black text-slate-100 text-xs border-white/50  m-1 w-8 h-8 flex items-center justify-center">
                or
              </p>

              <p className="h-[1px] bg-white/50 w-[42%]"></p>
            </div>
            <div className="flex items-center bg-green-400 p-2 gap-4 justify-center  rounded-md">
              <FcGoogle className="text-3xl font-bold  " />
              <p className="text-center font-semibold text-black">
                Login with Google
              </p>
            </div>
            <div className="absolute bottom-2 pl-8 text-center flex items-center justify-center">
              <p className="text-gray-200 text-sm">
                Don't have an account?{" "}
                <Link to={"/register"}>
                  <span className="text-lime-400 text-bold cursor-pointer  text-md hover:text-lime-300 ">
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
