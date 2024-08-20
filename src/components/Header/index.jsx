import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full h-[60px] px-4 bg-lime-50  ">
      <div className="flex items-center gap-10">
        <Link to={"/"} className="text-4xl font-bold text-black">
          FarmDash
        </Link>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-gray-300/30 hover:bg-blue-300/30 rounded-full w-[36px] h-[36px] flex items-center justify-center"
        >
          <CiBoxList className="font-bold text-xl" />
        </motion.button>
      </div>
      <div>
        <input
          placeholder="Search here"
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[300px] hidden md:block"
        />
      </div>
      <div className="hidden md:block">
        <div className="flex gap-4 items-center justify-between">
          <div className="bg-gray-300/30 hover:bg-blue-300/30 rounded-full w-[36px] h-[36px] flex items-center justify-center relative">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="relative cursor-pointer"
            >
              <MdOutlineShoppingCart className="text-xl hover:text-blue-500 font-bold" />
              <div className="absolute bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                4
              </div>
            </motion.div>
          </div>
          <div className="bg-gray-300/30 hover:bg-blue-300/30 rounded-full w-[36px] h-[36px] flex items-center justify-center relative">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="relative cursor-pointer"
            >
              <IoMdNotificationsOutline className="text-xl hover:text-blue-500 font-bold" />
              <div className="absolute bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                4
              </div>
            </motion.div>
          </div>

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex gap-2 cursor-pointer hover:bg-lime-100/80 px-2 rounded-"
          >
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.09 }}
                src="src/assets/logo.png"
                alt=""
                className="w-12 h-12 rounded-full border-blue-600 border-spacing-3 object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">Abhishek Kumar</p>
              <p className="opacity-50 font-normal text-xs">@abhishek9773</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
