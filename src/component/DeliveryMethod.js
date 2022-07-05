import React from "react";
import img1 from "../assets/images/paypal.png";
import img2 from "../assets/images/card.png";

const DeliveryMethod = ({ date, time, userInfo }) => {
  return (
    <div className="space-y-5 shadow-lg border border-gray-200 p-10">
      <h3 className="text-xl font-semibold">Delivery Method</h3>

      <p className="text-sm font-bold">Payment Now</p>
      {date && time && userInfo ? (
        <p className="text-sm font-bold text-[#ff5200]">
          Select online payment Method
        </p>
      ) : (
        <p className="text-lg font-bold text-red-500 ">
          Please Delivery Time & Address fill up
        </p>
      )}
      {date && time && userInfo ? (
        <div className="space-y-5">
          <div className="">
            <label
              for="my-modal-2"
              className="my-modal flex justify-center items-center hover:bg-[#ff5200]  duration-500 p-2 cursor-pointer hover:text-white rounded"
            >
              <img src={img1} alt="" className="w-[50px]" />
              <span className="text-xl font-semibold ml-2">PayPal</span>
            </label>
          </div>
          <div>
            <label
              for="my-modal-1"
              className="my-modal flex justify-center items-center hover:bg-[#ff5200]  duration-500 p-2 cursor-pointer hover:text-white rounded"
            >
              <img src={img2} alt="" className="w-[50px]" />
              <span className="text-xl font-semibold ml-2">
                Debit credit card
              </span>
            </label>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <label className="my-modal text-gray-400 font-bold flex flex-col justify-center items-center p-5  rounded">
              <span className="text-xl font-semibold ml-2">PayPal</span>
              <span className="text-xl font-semibold ml-2">
                Debit credit card
              </span>
            </label>
          </div>
        </div>
      )}
      <div className="flex justify-around items-center gap-5">
        <div className="w-1/3 ">
          <img src="https://i.ibb.co/G2b98d7/paypal-2-1.png" alt="" />
        </div>
        <div className="w-1/3 ">
          <img src="https://i.ibb.co/9G4rzD8/visa-1.png" alt="" />
        </div>
        <div className="w-1/3 ">
          <img src="https://i.ibb.co/4Jz1h72/47653.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethod;
