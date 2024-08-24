import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { HiDotsVertical } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

const ProductUpload = () => {
  return (
    <div className="py-[60px] p-4">
      <Breadcrumb
        Heading={"Product Upload"}
        LinkNav={"product"}
        CurrentRoute={"upload"}
      />
      <div className="flex items-center justify-start gap-2">
        <div className="w-3/5 bg-slate-100 p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Basic Information</p>{" "}
            <div className="hover:bg-slate-400 p-2 rounded-full cursor-pointer">
              {" "}
              <HiDotsVertical className="text-xl rotate-90" />{" "}
            </div>
          </div>
          <div className="py-1">
            <label className="uppercase py-1 font-semibold">Title</label>
            <input
              className="w-full py-2 rounded-md px-3  "
              placeholder="write a title"
              type="text"
            />
          </div>
          <div className="py-1">
            <label className="uppercase py-1 font-semibold">description</label>
            <textarea
              className="w-full py-2 rounded-md px-3 h-[150px] "
              placeholder="write a title"
              type="text"
            />
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="py-1 relative">
              <label className="uppercase py-1 font-semibold">Title</label>
              <div className="flex items-center justify-center bg-white ">
                <input
                  className="w-full py-2 rounded-md px-2  "
                  placeholder="write a title"
                  type="text"
                />
                <FaChevronDown className="mr-2" />
              </div>
            </div>
            <div className="py-1">
              <label className="uppercase py-1 font-semibold">Title</label>
              <input
                className="w-full py-2 rounded-md px-3  "
                placeholder="write a title"
                type="text"
              />
            </div>{" "}
            <div className="py-1">
              <label className="uppercase py-1 font-semibold">Title</label>
              <input
                className="w-full py-2 rounded-md px-3  "
                placeholder="write a title"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-red-500">fadfda</div>
      </div>
    </div>
  );
};

export default ProductUpload;
