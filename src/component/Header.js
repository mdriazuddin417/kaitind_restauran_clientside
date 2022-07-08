import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import Loading from "./Loading";
import useOrders from "../customeHook/useOrders";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../assets/images/logo2.png";

const Header = () => {
  const [orders, refetch, isLoading] = useOrders("order");
  const [user] = useAuthState(auth);

  let quantity = 0;

  if (orders) {
    for (let order of orders) {
      quantity = quantity + order.quantity;
    }
    refetch();
  }

  return (
    <div id="nav" className="top-0 sticky z-30 ">
      <div class="navbar bg-base-100 shadow-lg py-5 px-12 ">
        <div class="flex-1">
          <NavLink to={"/"} class="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className="w-[50px]" />
          </NavLink>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 space-x-3 text-xl">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>

            <li>
              <label
                for="my-drawer-4"
                class="drawer-button btn btn-primary indicator"
              >
                <BsCart2 className="text-2xl text-white " />
                <span class="indicator-item badge badge-secondary">
                  {isLoading ? (
                    <div class="w-3 h-3 border-b-2 border-white rounded-full animate-spin"></div>
                  ) : (
                    quantity
                  )}
                </span>
              </label>
            </li>
            {!user ? (
              <li class="dropdown dropdown-end">
                <label tabindex="0">
                  <GrUserAdmin />
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-sm space-y-2 "
                >
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>

                  <li>
                    <NavLink to="/signup">SignUp</NavLink>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <div onClick={() => signOut(auth)}>SignOut</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
