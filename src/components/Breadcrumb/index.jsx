import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ Heading, LinkNav, CurrentRoute }) => {
  return (
    <div>
      <div className="text-black flex items-center justify-between bg-slate-400 p-4 my-8 font-semibold">
        <p className="text-2xl">{Heading}</p>
        <p>
          <Link to="/#product">
            <span className="bg-green-400/70 rounded-full px-2 text-sm hover:text-lime-300 hover:underline">
              {LinkNav}
            </span>
          </Link>
          <span className="p-1">/</span>
          <span className="bg-green-400/70 rounded-full px-2 text-sm">
            {CurrentRoute}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
