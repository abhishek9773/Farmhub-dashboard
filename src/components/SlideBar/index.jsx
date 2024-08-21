import React, { useContext, useState } from "react";
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mycontext } from "../../App";

const SlideBar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const context = useContext(Mycontext);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div
      className={` hidden lg:block ${
        context.isToggleSidebar === true
          ? "transfrom -translate-x-full transition-transform ease-in-out duration-500"
          : "transfrom translate-x-0 transition-transform ease-in-out duration-500 "
      }   w-[20%] min-h-screen overflow-x-hidden overflow-y-scroll mt-[60px]  px-3 fixed bg-lime-100 `}
    >
      <ul className="capitalize font-semibold ">
        <li className="">
          <Link
            to="/dashboard"
            className="flex gap-2 items-center hover:bg-lime-200 rounded-md cursor-pointer p-3 "
            onClick={() => toggleAccordion(1)}
          >
            <TbLayoutDashboardFilled
              className={`${
                openIndex === 1 ? "text-blue-600" : "text-black/70"
              } text-xl `}
            />
            <p
              className={`text-gray-500  ${
                openIndex == 1 ? "text-blue-600" : ""
              }`}
            >
              Dashboard
            </p>
          </Link>
        </li>
        {/* 2 */}
        <li className="group">
          <div
            className="hover:bg-lime-200 text-gray-500 p-3 rounded-md flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex gap-2 items-center">
              <FaProductHunt
                className={`text-xl ${
                  openIndex == 2 ? "text-blue-600" : "text-black/70"
                } `}
              />
              <p>Products</p>
            </div>
            <MdOutlineArrowForwardIos
              className={`transform transition-transform duration-200 ${
                openIndex === 2 ? "rotate-90" : ""
              }`}
            />
          </div>
          {openIndex === 2 && (
            <div className="pl-4 mt-2 text-gray-700">
              <p
                className={`py-2 pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Product List"
                    ? " text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Product List")}
              >
                Product List
              </p>
              <p
                className={`py-2 pl-2 rounded-md cursor-pointer  ${
                  selectedItem === "Product View"
                    ? " text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Product View")}
              >
                Product View
              </p>
              <p
                className={`py-2 pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Product Upload"
                    ? " text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Product Upload")}
              >
                Product Upload
              </p>
            </div>
          )}
        </li>
        {/* Order items 3 */}
        <li className="group">
          <div
            className="hover:bg-lime-200 text-gray-500 p-3 rounded-md flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <div className="flex items-center gap-2">
              <FaShoppingCart
                className={`${
                  openIndex == 3 ? "text-blue-600" : "text-black/70"
                } `}
              />
              <p>Category</p>
            </div>
            <MdOutlineArrowForwardIos
              className={`transform transition-transform duration-200 ${
                openIndex === 3 ? "rotate-90" : ""
              }`}
            />
          </div>
          {openIndex === 3 && (
            <div className="pl-4 mt-2 text-gray-700">
              <p
                className={`py-2  pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Profile"
                    ? " text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Profile")}
              >
                Category List
              </p>
              <p
                className={`py-2 pl-2  rounded-md cursor-pointer  ${
                  selectedItem === "Account"
                    ? " text-blue-600 "
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Account")}
              >
                Add a category
              </p>
              <p
                className={`py-2 pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Privacy"
                    ? "  text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Privacy")}
              >
                Sub Category List
              </p>
              <p
                className={`py-2 pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Privacy"
                    ? "  text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Privacy")}
              >
                Add a Sub Category
              </p>
            </div>
          )}
        </li>
        {/* Category items- 4 */}
        <li className="group">
          <div
            className="hover:bg-lime-200 text-gray-500 p-3 rounded-md flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(4)}
          >
            <div className="flex items-center gap-2">
              <IoSettingsSharp
                className={`${
                  openIndex == 4 ? "text-blue-600" : "text-black/70"
                } `}
              />
              <p>Settings</p>
            </div>
            <MdOutlineArrowForwardIos
              className={`transform transition-transform duration-200 ${
                openIndex === 4 ? "rotate-90" : ""
              }`}
            />
          </div>
          {openIndex === 4 && (
            <div className="pl-4 mt-2 text-gray-700 font-normal">
              <p
                className={`py-2  pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Profile"
                    ? " text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Profile")}
              >
                Category List
              </p>
              <p
                className={`py-2 pl-2  rounded-md cursor-pointer  ${
                  selectedItem === "Account"
                    ? " text-blue-600 "
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Account")}
              >
                Add a category
              </p>
              <p
                className={`py-2 pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Privacy"
                    ? "  text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Privacy")}
              >
                Sub Category List
              </p>
              <p
                className={`py-2 pl-2 rounded-md cursor-pointer ${
                  selectedItem === "Privacy"
                    ? "  text-blue-600"
                    : "hover:bg-lime-100"
                }`}
                onClick={() => selectItem("Privacy")}
              >
                Add a Sub Category
              </p>
            </div>
          )}
        </li>
      </ul>

      <div className="relative w-full h-[150px] bg-lime-200 overflow-hidden  -bottom-40 rounded-md">
        <div className="absolute h-[84px] w-[84px] rounded-full bg-lime-600/60 opacity-40 -top-10 -right-4"></div>
        <div className="absolute h-[150px] w-[150px] opacity-40 rounded-full bg-lime-600/60 -bottom-20 -right-4  "></div>
        <div className="absolute h-[32px] w-[32px] rounded-full bg-lime-600/60 opacity-40 top-6 left-4"></div>

        <div className="flex items-center justify-center h-full z-50 ">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-4 w-auto bg-lime-500 hover:bg-lime-500/80 text-white font-semibold rounded"
          >
            <div className="flex gap-2 items-center justify-center ">
              <RiLogoutCircleRLine />
              <p>Logout</p>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
