import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import useProducts from "../customeHook/useProducts";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "./Loading";
import { useEffect } from "react";
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
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery(
    "parts",
    async () => await axios.get("http://localhost:5000/order"),
  );
  if (isLoading) {
    <Loading />;
  }
  const orders = parts?.data;

  let quantity = 0;

  if (orders) {
    for (let order of orders) {
      quantity = quantity + order.quantity;
    }
  }

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
                <span class="indicator-item badge badge-secondary">
                  {quantity}
                </span>
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
