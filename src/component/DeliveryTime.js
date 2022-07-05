import React, { useState } from "react";

const DeliveryTime = ({ date, setDate, time, setTime }) => {
  const dates = (e) => {
    setDate(e.target.value);
  };
  const timeManage = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="space-y-5 shadow-lg border border-gray-200 p-10">
      <h3 className="text-xl font-semibold">Delivery Time</h3>
      <div>
        <p className="text-sm font-semibold">Delivery Now</p>
        <p className="text-sm flex justify-start items-center gap-3">
          {date && (
            <p className="text-lg ">
              Date: <span className="text-[#ff5200]">{date}</span>
            </p>
          )}
          {time && (
            <p className="text-lg ">
              Time: <span className="text-[#ff5200]"> {time}</span>
            </p>
          )}
          {!date && !time && (
            <span>Your order will be delivered within 45 minutes</span>
          )}
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        {
          <input
            type="date"
            className="input ring ring-[#ff5200] w-full max-w-xs"
            onChange={(e) => dates(e)}
          />
        }
        <select
          class="select ring ring-[#ff5200]"
          onChange={(e) => timeManage(e)}
        >
          <option disabled selected>
            Select you time
          </option>
          <option value="8 am">8 am</option>
          <option value="9 am">9 am </option>
          <option value="10 am">10 am</option>
          <option value="11 am">11 am</option>
          <option value="12 pm">12 pm</option>
          <option value="1 pm">1 pm</option>
          <option value="2 pm">2 pm</option>
          <option value="3 pm">3 pm</option>
          <option value="4 pm">4 pm</option>
          <option value="5 pm">5 pm</option>
          <option value="6 pm">6 pm</option>
          <option value="7 pm">7 pm</option>
        </select>
      </div>
    </div>
  );
};

export default DeliveryTime;
