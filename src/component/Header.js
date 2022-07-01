import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="navbar bg-base-100 shadow-lg py-5 px-12">
      <div class="flex-1">
        <Link to={"/"} class="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0 space-x-3 text-xl">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
