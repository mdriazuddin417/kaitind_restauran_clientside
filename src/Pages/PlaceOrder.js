import React from "react";

import DeliveryAddress from "../component/DeliveryAddress";
import DeliveryMethod from "../component/DeliveryMethod";
import DeliveryTime from "../component/DeliveryTime";
import ProductReview from "../component/ProductReview";
const PlaceOrder = () => {
  return (
    <div>
      <h2 className="bg-[#ff5200] py-4 text-center text-white">
        Safety Assured Meals and Contactless Delivery
      </h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 lg:my-16 lg:px-12">
        <div className=" space-y-5 ">
          <DeliveryTime />
          <DeliveryAddress />
          <DeliveryMethod />
        </div>
        <div>
          <ProductReview />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
