import React, { useContext, useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { Mycontext } from "../../App";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoMdCloudUpload } from "react-icons/io";
import { IoImagesOutline } from "react-icons/io5";
import { TbHandClick } from "react-icons/tb";
import CircleCheckbox from "../../components/CircleCheckbox";

const ProductUpload = () => {
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Choose option");
  const [isChecked, setIsChecked] = useState(false);

  const context = useContext(Mycontext);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    context.setIsHiddenSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, [context]);

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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpenDropDown(false);
  };

  return (
    <div className="py-[60px] p-4">
      <Breadcrumb
        Heading={"Product Upload"}
        LinkNav={"product"}
        CurrentRoute={"upload"}
      />
      <div className="flex  justify-start gap-2">
        {/* first part of ui 3/5 */}
        <div className="w-3/5 bg-slate-100 p-4">
          <form>
            <div className="flex items-center justify-between">
              <p className="font-bold text-xl">Basic Information</p>
              <div className="hover:bg-slate-400 p-2 rounded-full cursor-pointer">
                <HiDotsVertical className="text-xl rotate-90" />
              </div>
            </div>
            <div className="py-2">
              <label className="uppercase py-1 font-semibold">Title</label>
              <input
                className="w-full py-2 rounded-md px-3"
                placeholder="Write a title"
                type="text"
              />
            </div>
            <div className="py-1">
              <label className="uppercase py-1 font-semibold">
                Description
              </label>
              <textarea
                className="w-full py-2 rounded-md px-3 h-[150px]"
                placeholder="Write a description"
                type="text"
              />
            </div>
            <div className="flex gap-2 items-center justify-between py-2 ">
              <div className="py-1 relative">
                <label className="uppercase py-1 font-semibold">Category</label>
                <button
                  type="button"
                  onClick={handleClick}
                  ref={dropdownRef}
                  className="w-full py-2 rounded-md px-10 text-left flex justify-between items-center bg-white border border-gray-300 gap-2 "
                >
                  <p> {selectedOption}</p>
                  <FaChevronDown />
                </button>
                {isOpenDropdown && (
                  <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1 text-gray-700 text-sm">
                      <li
                        onClick={() => handleOptionClick("Option 1")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Option 1
                      </li>
                      <li
                        onClick={() => handleOptionClick("Option 2")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Option 2
                      </li>
                      <li
                        onClick={() => handleOptionClick("Option 3")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="py-1 relative">
                <label className="uppercase py-1 font-semibold">Brand</label>
                <button
                  type="button"
                  onClick={handleClick}
                  ref={dropdownRef}
                  className="w-full py-2 rounded-md  text-left flex justify-between items-center bg-white border border-gray-300 gap-2 px-10"
                >
                  <p> {selectedOption}</p>
                  <FaChevronDown />
                </button>
                {isOpenDropdown && (
                  <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1 text-gray-700 text-sm">
                      <li
                        onClick={() => handleOptionClick("Option 1")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Richman
                      </li>
                      <li
                        onClick={() => handleOptionClick("Option 2")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Option 2
                      </li>
                      <li
                        onClick={() => handleOptionClick("Option 3")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>{" "}
            </div>
            <div className="flex  items-center justify-center gap-4 text-sm  ">
              <div className="py-2">
                <label className="uppercase py-1 font-semibold ">
                  regular price
                </label>
                <input
                  className="w-full py-2 rounded-md px-6"
                  placeholder="Write a title"
                  type="text"
                />
              </div>{" "}
              <div className="py-2">
                <label className="uppercase py-1 font-semibold">
                  discount price
                </label>
                <input
                  className="w-full py-2 rounded-md px-6"
                  placeholder="Write a title"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm gap-2">
              <div className="py-2">
                <label className="uppercase w-full py-1 font-semibold">
                  shopping fee
                </label>
                <input
                  className="w-full py-2 rounded-md   px-3"
                  placeholder="Write a title"
                  type="text"
                />
              </div>{" "}
              <div className="py-2">
                <label className="uppercase py-1 font-semibold">
                  text Rate
                </label>
                <input
                  className="w-full py-2 rounded-md px-3"
                  placeholder="Write a title"
                  type="text"
                />
              </div>
            </div>
            <div>
              <p className="uppercase p-2 font-semibold text-sm">Tags</p>
              <textarea
                placeholder="Write a relevant tag about you product"
                className="w-full h-[150px] p-3"
              />
            </div>
          </form>
        </div>
        {/* Another part started 2/5 */}

        <div className="w-2/5  ">
          <div className="bg-slate-100 p-4 ">
            <div className=" text-xl font-bold flex items-center justify-between">
              <p className="">Organization</p>
              <BsThreeDots />
            </div>
            <div className="pt-4">
              <label className="uppercase py-1 font-semibold text-sm ">
                Add category
              </label>
              <div className="flex items-center justify-center">
                <input
                  className="w-full py-2 rounded-md px-3 gap-2 mr-2"
                  placeholder="Write a title"
                  type="text"
                />
                <button
                  type="button"
                  className="py-2 px-4 font-bold uppercase bg-green-500 rounded-md m-1"
                >
                  add
                </button>
              </div>
            </div>
            <div className="pt-4">
              <label className="uppercase py-1 font-semibold text-sm ">
                Add category
              </label>
              <div className="flex items-center justify-center">
                <input
                  className="w-full py-2 rounded-md px-3 gap-2 mr-2"
                  placeholder="Write a title"
                  type="text"
                />
                <button
                  type="button"
                  className="py-2 px-4 font-bold uppercase bg-green-500 rounded-md m-1"
                >
                  add
                </button>
              </div>
            </div>
            <div className="pt-4">
              <label className="uppercase py-1 font-semibold text-sm ">
                Add category
              </label>
              <div className="flex items-center justify-center">
                <input
                  className="w-full py-2 rounded-md px-3 gap-2 mr-2"
                  placeholder="Write a title"
                  type="text"
                />
                <button
                  type="button"
                  className="py-2 px-4 font-bold uppercase bg-green-500 rounded-md m-1"
                >
                  add
                </button>
              </div>
            </div>
            <div className="pt-4">
              <label className="uppercase py-1 font-semibold text-sm ">
                Add category
              </label>
              <div className="flex items-center justify-center">
                <input
                  className="w-full py-2 rounded-md px-3 gap-2 mr-2"
                  placeholder="Write a title"
                  type="text"
                />
                <button
                  type="button"
                  className="py-2 px-4 font-bold uppercase bg-green-500 rounded-md m-1"
                >
                  add
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 bg-slate-100 p-4">
            <div className="flex items-center justify-between">
              <p className="font-bold text-xl">Specification</p>
              <div className="hover:bg-gray-200 rounded-full  text-black p-2 cursor-pointer">
                <HiDotsHorizontal className="font-bold text-xl" />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-between">
              {/* size data */}
              <div className="w-full">
                <p className="uppercase font-bold text-sm">size</p>
                <div className="p-2  h-[100px] overflow-y-scroll bg-gray-400  w-full rounded-sm">
                  {["sm", "md", "lg", "xl", "xxl"].map((items) => (
                    <div className="flex items-center justify-between gap-2">
                      <CircleCheckbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <p className="uppercase">{items}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <p className="uppercase font-bold text-sm">color</p>
                <div className="p-2  h-[100px] overflow-y-scroll bg-gray-400  w-full rounded-sm">
                  {["sm", "md", "lg", "xl", "xxl"].map((items) => (
                    <div className="flex items-center justify-between gap-2">
                      <CircleCheckbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <p className="uppercase">{items}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* color data */}
              <div></div>
            </div>
            <div className="flex  items-center justify-center gap-4 text-sm py-4 ">
              <div className="py-2">
                <label className="uppercase py-1 font-semibold ">stock</label>
                <input
                  className="w-full py-2 rounded-md px-6"
                  placeholder="Write a title"
                  type="text"
                />
              </div>{" "}
              <div className="py-2">
                <label className="uppercase py-1 font-semibold">weight</label>
                <input
                  className="w-full py-2 rounded-md px-6"
                  placeholder="Write a title"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product image upload */}
      <div className="my-4 bg-gray-100 p-4">
        <p className="uppercase font-bold py-4 text-xl">media and Published</p>
        <div className="flex items-center gap-4 bg-slate-200 p-2 rounded-md ">
          <div className="justify-between bg-green-400 border-[3px] border-dotted rounded-md  relative cursor-pointer">
            <img
              src="https://agri-route.com/cdn/shop/articles/05.png?v=1670494529"
              alt=""
              className="w-[180px] h-[180px] rounded-md"
            />
            <div className="bg-red-500 p-1 rounded-full absolute flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2  ">
              <RxCross2 className=" text-xs text-black font-bold " />
            </div>
          </div>
          <div className="justify-between bg-green-400 border-[3px] border-dotted rounded-md  relative cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTeIKoiW4b8P4fkUcaIoEphG6zH7EWGkXQQs7jCIBd5dVPO01o1mAQDHVOqX1OdSVYfhY&usqp=CAU"
              alt=""
              className="w-[180px] h-[180px] rounded-md"
            />
            <div className="bg-red-500 p-1 rounded-full absolute flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2  ">
              <RxCross2 className=" text-xs text-black font-bold " />
            </div>
          </div>{" "}
          <div className="justify-between bg-green-400 border-[3px] border-dotted rounded-md  relative cursor-pointer">
            <img
              src="https://www.fieldking.com/images/home/Cultivators.jpg"
              alt=""
              className="w-[180px] h-[180px] rounded-md"
            />
            <div className="bg-red-500 p-1 rounded-full absolute flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2  ">
              <RxCross2 className=" text-xs text-black font-bold " />
            </div>
          </div>
          <div
            type="file"
            className="justify-between bg-green-400 border-[3px] border-dotted rounded-md  relative cursor-pointer"
          >
            <div className="w-[180px] h-[180px] bg-fray-300 flex flex-col items-center justify-center bg-gray-200">
              <IoImagesOutline className="text-8xl  text-gray-400" />
              <p className="font-bold text-md text-gray-400">Image Upload</p>

              <TbHandClick className="text-3xl text-gray-400 font-bold absolute bottom-2 right-2 -rotate-12" />
            </div>
          </div>
        </div>
        <button className="uppercase bg-green-400 p-4 w-full my-4 rounded-md font-bold hover:bg-green-300 flex items-center justify-center gap-2">
          {" "}
          <IoMdCloudUpload className="text-3xl text-gray-800" />
          <p>publish and view</p>
        </button>
      </div>
    </div>
  );
};

export default ProductUpload;
