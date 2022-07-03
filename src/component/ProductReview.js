import React from "react";
import OrderReview from "../Pages/OrderReview";

const ProductReview = () => {
  return (
    <div className="space-y-5 shadow-lg border border-gray-200 p-10">
      <h3 className="text-xl font-semibold">Product Review</h3>
      <div>
        <OrderReview />
      </div>
    </div>
  );
};

export default ProductReview;
