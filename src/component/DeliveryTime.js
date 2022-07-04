import React from "react";
import CalendarModal from "./CalendarModal";

const DeliveryTime = () => {
  return (
    <div className="space-y-5 shadow-lg border border-gray-200 p-10">
      <h3 className="text-xl font-semibold">Delivery Time</h3>
      <div>
        <p className="text-sm font-semibold">Delivery Now</p>
        <p className="text-sm">
          Your order will be delivered within 45 minutes
        </p>
      </div>
      <div>
        <label
          for="my-modal-3"
          className="text-sm text-[#ff5200] font-bold cursor-pointer"
        >
          Schedule for later
        </label>
      </div>
      <CalendarModal />
    </div>
  );
};

export default DeliveryTime;
