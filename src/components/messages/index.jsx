import React from "react";
import { BiLike } from "react-icons/bi";
import { FaReply } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const Messages = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between bg-slate-400 p-2 rounded-t-md">
        <div className="flex gap-1">
          <img
            src="https://i.postimg.cc/7hVw6Ms2/profile.png"
            className="w-12 h-12 rounded-full object-cover"
            alt="profile"
          />
          <div className="flex flex-col justify-start items-center py-2 text-sm">
            <p className="font-semibold">Abhishek kumar</p>
            <p className="text-xs text-gray-500 ">25 minutes ago</p>
          </div>
        </div>
        <div>
          {" "}
          <div className="right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-500/50 bottom-0 hover:bg-slate-300 cursor-pointer">
            <HiDotsVertical className="text-lg " />
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-400 rounded-b-md ">
        {" "}
        <p className="text-sm font-semibold">
          I recently purchased this tractor, and it's been a game-changer for my
          farm. The 100HP engine provides more than enough power to handle tough
          jobs, and the 4x4 capability makes navigating uneven terrain a breeze.
          I chose the [color] option, and it looks fantastic on the farm. If
          you're considering this tractor, I highly recommend it. It's sturdy,
          reliable, and worth the investment. If you've also bought this
          tractor, I'd love to hear how it's working for you. Share your
          thoughts and let others know how it’s performing!
        </p>
        <div className="flex gap-2 p-2 items-center justify-start text-2xl">
          <div className="p-1 rounded-full bg-slate-300 cursor-pointer hover:bg-lime-100">
            <BiLike className="rotate " />
          </div>
          <div className="p-1 rounded-full bg-slate-300 cursor-pointer hover:bg-lime-100">
            <BiLike className="rotate-180" />
          </div>
          <div
            title="Replay"
            className="p-1 rounded-full bg-slate-300 cursor-pointer hover:bg-lime-100"
          >
            {" "}
            <FaReply className="text-gray-800 " />
          </div>
        </div>
      </div>
      {/* Review Replay */}
      <div className="py-8">
        <p className="font-semibold text-xl py-2">Review Reply</p>
        <textarea
          className="w-full h-48 overflow-y-auto p-2 bg-gray-100"
          placeholder="write your messsage here "
        />
      </div>
      <div className="flex items-center justify-center bg-green-400 p-2 rounded-lg">
        <button className="uppercase"> drop your replay</button>
      </div>
    </div>
  );
};

export default Messages;
