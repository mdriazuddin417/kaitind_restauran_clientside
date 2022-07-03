import React from "react";
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
            <li>
              <Link to="#">VEG</Link>
            </li>
            <li>
              <Link to="#">Price</Link>
            </li>

            <li>
              <Link to="#">Filter</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CategoryHeader;
