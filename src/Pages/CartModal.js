import React from "react";
import Banner from "./Home/Banner";
import Category from "./Home/Category";
import CategoryHeader from "./Home/CategoryHeader";

import OrderReview from "./OrderReview";

const CartModal = () => {
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
