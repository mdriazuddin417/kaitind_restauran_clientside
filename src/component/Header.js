import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
const Header = () => {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      document.getElementById("nav").classList.add("sticky", "z-50", "shadow");
    } else {
      document
        .getElementById("nav")
        .classList.remove("sticky", "z-50", "shadow");
    }
  });
  return (
    <div id="nav" className="top-0">
      <div class="navbar bg-base-100 shadow-lg py-5 px-12 ">
        <div class="flex-1">
          <NavLink to={"/"} class="btn btn-ghost normal-case text-xl">
            daisyUI
          </NavLink>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 space-x-3 text-xl">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="border border-primary rounded-xl">
              <NavLink to="/cart" className="indicator">
                <BsCart2 className="text-2xl " />
                <span class="indicator-item badge badge-secondary">9</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
