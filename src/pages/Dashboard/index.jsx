import { GiStarsStack } from "react-icons/gi";
import DashboardBox from "../../components/DashboardBox";
import { FaShoppingBag, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="px-[60px] py-[60px]">
      <h1 className="text-xl font-semibold "> Dashboard</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-8/12">
          <div className="flex gap-4 flex-wrap">
            <DashboardBox
              className={
                " bg-gradient-to-r from-green-700 to-green-300 rounded-md"
              }
              title={"Total Users"}
              icons={<FaUserCircle />}
              percentage={20}
              graph={<IoMdTrendingUp />}
            />
            <DashboardBox
              className={
                " bg-gradient-to-r from-fuchsia-700 to-fuchsia-300 rounded-md"
              }
              title="Total Product Deliver"
              icons={<FaShoppingCart />}
              percentage={30}
              graph={<IoMdTrendingDown />}
            />
            <DashboardBox
              className={
                " bg-gradient-to-r from-cyan-700 to-cyan-300 rounded-md"
              }
              title="Total Sell"
              icons={<FaShoppingBag />}
              percentage={32}
              graph={<IoMdTrendingDown />}
            />
            <DashboardBox
              className={
                " bg-gradient-to-r from-yellow-700 to-yellow-300 rounded-md"
              }
              title="Total Sells"
              icons={<GiStarsStack />}
              percentage={38}
              graph={<IoMdTrendingUp />}
            />
          </div>
        </div>
        <div className="w-full md:w-4/12 pl-0">
          <div className="w-full h-full bg-slate-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
