import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { GiGooSpurt } from "react-icons/gi";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
  return (
    <div className="max-w-7xl mx-auto top-0 sticky " id="navbar">
      <hr />
      <div class="navbar bg-base-100 py-2 px-12 ">
        <div class="flex-1">
          <h2 class=" normal-case text-xl">Category</h2>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 space-x-3 text-xl">
            <li className="">
              <button className="border border-gray-300 rounded-lg flex justify-center items-center p-2 text-sm  ">
                VEG
                <GiGooSpurt className="text-[#ff5200]" />
              </button>
            </li>
            <li>
              <button className="border border-gray-300 rounded-lg flex justify-center items-center p-2 text-sm ">
                price
                <BsFilterLeft className="text-[#ff5200]" />
              </button>
            </li>

            <li>
              <button className="border border-gray-300 rounded-lg flex justify-center items-center p-2 text-sm ">
                <BiFilterAlt className="text-[#ff5200]" />
                filter
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CategoryHeader;
