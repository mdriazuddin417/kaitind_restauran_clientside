import React from "react";

const DeliveryMethod = () => {
  return (
    <div className="space-y-5 shadow-lg border border-gray-200 p-10">
      <h3 className="text-xl font-semibold">Delivery Method</h3>

      <p className="text-sm font-semibold">Payment Now</p>

      <p className="text-sm text-[#ff5200] font-bold cursor-pointer">
        Schedule for later
      </p>
    </div>
  );
};

export default DeliveryMethod;
