import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import useOrders from "../customeHook/useOrders";
import CurrentBtn from "./CurrentBtn";
import Banner from "./Home/Banner";
import Category from "./Home/Category";
import CategoryHeader from "./Home/CategoryHeader";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import OrderReview from "./OrderReview";

const CartModal = () => {
  const [count, setCount] = useState(0);
  const [orders, refetch] = useOrders("order");
  let total = 0;
  if (orders) {
    for (const order of orders) {
      total = total + order.price * order.quantity;
    }
  }

  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Banner />
        <CategoryHeader />
        <Category />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay menu-visibility"></label>

        <OrderReview />
      </div>
    </div>
  );
};

export default CartModal;
