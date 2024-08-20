import DashboardBox from "../../components/DashboardBox";

const Dashboard = () => {
  return (
    <div className="px-[60px] py-[60px]">
      <h1 className="text-xl font-semibold "> Dashboard</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-8/12">
          <div className="flex gap-4 flex-wrap">
            <DashboardBox
              className={
                " bg-gradient-to-r from-green-600 to-green-400 rounded-md"
              }
              title={"Total Users"}
            />
            <DashboardBox
              className={
                " bg-gradient-to-r from-fuchsia-700 to-fuchsia-400 rounded-md"
              }
              title="Total Product Deliver"
            />
            <DashboardBox
              className={
                " bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-md"
              }
              title="Total Sell"
            />
            <DashboardBox
              className={
                " bg-gradient-to-r from-yellow-800 to-yellow-400 rounded-md"
              }
              title="Total Sells"
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
