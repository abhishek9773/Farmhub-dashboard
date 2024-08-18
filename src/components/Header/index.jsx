import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navmenus = [
  {
    id: 1,
    icon: "",
  },
  {
    id: 2,
    icon: "",
  },
  { id: 3, icon: "" },
  {
    id: 4,
    icon: "",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center w-100vh h-[60px] px-4">
      <div>
        <Link to={"/"} className="text-4xl font-bold ">
          Logo
        </Link>
      </div>
      <div>
        <input
          placeholder="Search here"
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-4">
        {[1, 1, 1, 1].map((_, index) => (
          <div
            key={index}
            className="bg-gray-300/30 hover:bg-blue-300/30 rounded-full w-[36px] h-[36px] flex items-center justify-center relative"
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="relative cursor-pointer"
            >
              <IoMdNotificationsOutline className="text-xl hover:text-blue-500 font-bold " />
              <div className="absolute bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                4
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
