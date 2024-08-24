import { GiStarsStack } from "react-icons/gi";
import DashboardBox from "../../components/DashboardBox";
import { FaShoppingBag, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IoMdTrendingDown, IoMdTrendingUp, IoIosTimer } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext, useEffect, useRef, useState } from "react";
import Chart from "react-google-charts";
import { ChartArea } from "lucide-react";
import Dropdown from "../../components/Dropdown/Dropdown";
import ProductTabe from "../../components/ProductTable";
import MobileAndKeypadMessage from "../../components/warning/warning";
import { Mycontext } from "../../App";

export const data = [
  ["Task", "Hours per Day"],
  ["product", 11],
  ["delivery", 8],
  ["Seeds & Plants", 2],
  ["Fertilizers & Pesticides", 2],
  ["Agricultural Machinery ", 7],
];

export const options = {
  title: " Daily Activities",
  backgroundColor: "transparent",
  chartArea: { left: 10, top: 20, width: "100%", height: "100%" },
};
const Dashboard = () => {
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);

  const context = useContext(Mycontext);
  const background = context.themeMode === true;
  useEffect(() => {
    context.setIsHiddenSidebarAndHeader(false);
    window.scrollTo(0, 0);
  });

  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpenDropDown(!isOpenDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpenDropDown(false);
    }
  };

  useEffect(() => {
    if (isOpenDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenDropdown]);

  return (
    <div
      className={` py-[60px] px-2 ${
        background ? " bg-lime-50" : "bg-gray-400"
      } inset-0 `}
    >
      <div className="">
        <h1 className="text-xl font-semibold p-2">Dashboard</h1>
        <div className="flex flex-wrap   mb-4 p-2  ">
          <div className="w-full md:w-8/12 ">
            {/* dashbaord 4 box */}
            <div className="flex gap-4  lg:flex-wrap overflow-x-scroll w-full">
              <DashboardBox
                className="bg-gradient-to-r from-green-700 to-green-300 rounded-md "
                title={"Total Users"}
                icons={<FaUserCircle />}
                percentage={20}
                graph={<IoMdTrendingUp />}
              />
              <DashboardBox
                className="bg-gradient-to-r from-fuchsia-700 to-fuchsia-300 rounded-md"
                title="Total Product Delivery"
                icons={<FaShoppingCart />}
                percentage={30}
                graph={<IoMdTrendingDown />}
              />
              <DashboardBox
                className="bg-gradient-to-r from-cyan-700 to-cyan-300 rounded-md"
                title="Total Return Delivery"
                icons={<FaShoppingBag />}
                percentage={32}
                graph={<IoMdTrendingDown />}
              />
              <DashboardBox
                className="bg-gradient-to-r from-yellow-700 to-yellow-300 rounded-md"
                title="Total Star"
                icons={<GiStarsStack />}
                percentage={38}
                graph={<IoMdTrendingUp />}
              />
            </div>
          </div>
          <div className="w-full md:w-4/12 pt-2 md:pt-0 md:pl-0">
            <div className="w-full h-full bg-gradient-to-b from-lime-500 to-lime-300 rounded-md p-4">
              <div className=" relative flex items-center justify-between font-bold text-white">
                <p className="text-slate-50">Total Sales</p>
                <button
                  onClick={handleClick}
                  ref={dropdownRef}
                  className="hover:bg-lime-50/50 rounded-full p-1 relative "
                >
                  <BsThreeDotsVertical className="text-black" />
                </button>
                {isOpenDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-34 bg-lime-50 rounded-md shadow-lg  z-10">
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
              <div className="flex items-center justify-start">
                <p className="font-bold text-2xl text-white">$4,732,739.00</p>
              </div>
              <div className="mt-10">
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"400"}
                  height={"200"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 shadow-xl  ">
          <p className="font-semibold text-slate-600 py-2">
            Best Selling Products
          </p>

          <div
            className={`flex items-center justify-between overflow-x-scroll 
                ${background ? "bg-lime-50" : "bg-gray-400"}`}
          >
            <div className="flex flex-col items-start justify-start ">
              <p className="font-bold text-xs text-slate-500"> SHOW BY</p>
              <Dropdown
                className={""}
                options={["option1", "option2 option1", "option3"]}
                firstSelect="choose option"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-xs text-slate-500"> STATUS BY</p>
              <Dropdown
                className={""}
                options={["option1", "option2 option1", "option3"]}
                firstSelect="choose option"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-xs text-slate-500 uppercase">
                {" "}
                issue date
              </p>
              <Dropdown
                className={""}
                options={["option1", "option2 option1", "option3"]}
                firstSelect="choose option"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-xs text-slate-500 uppercase">
                {" "}
                serach by
              </p>
              <Dropdown
                className={""}
                options={["option1", "option2 option1", "option3"]}
                firstSelect="choose option"
              />
            </div>
          </div>
          <ProductTabe />
        </div>
      </div>

      <div className="relative">
        <MobileAndKeypadMessage />
      </div>
    </div>
  );
};

export default Dashboard;
