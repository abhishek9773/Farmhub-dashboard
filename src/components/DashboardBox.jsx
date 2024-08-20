import React from "react";
import clsx from "clsx";
const DashboardBox = ({ className, title }) => {
  console.log(title);
  return (
    <div className={clsx(`w-[48%] h-[180px] rounded-md, ${className}`)}>
      <div className="flex w-full ">
        <div className="">
          <h4 className="text-white font-bold p-4">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;
