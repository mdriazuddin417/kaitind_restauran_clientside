import React, { useState } from "react";
import useOrders from "../customeHook/useOrders";
import Card from "../Pages/Card";
import Paypal from "../Pages/Paypal";

import Button from "./Button";
import CalendarModal from "./CalendarModal";
import Loading from "./Loading";

const ProductReview = () => {
  const [count, setCount] = useState(0);
  const [orders, refetch, isLoading] = useOrders("order");

  let total = 0;
  if (orders) {
    for (const order of orders) {
      total = total + order.price * order.quantity;
    }
  }
  const fee = 20;
  const text = parseInt(total * (5 / 100));
  const updateTotal = text + fee + total;

  return (
    <div className="space-y-5 shadow-lg border border-gray-200 p-10">
      <h3 className="text-xl font-semibold">Product Review</h3>
      <div className="max-h-[500px] overflow-y-auto ">
        {isLoading && <Loading />}
        <ul class="menu p-4 overflow-y-auto  bg-base-100 space-y-3 ">
          {orders?.map((order) => {
            return (
              <li className="cursor-none flex flex-col  ">
                <div className=" my-shadow flex justify-between items-center border ">
                  <div className="w-[150px]">
                    <img src={order.image} alt="" className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-md">{order.name}</h1>
                    <Button
                      product={order}
                      count={order.quantity}
                      setCount={setCount}
                      refetch={refetch}
                    />
                    <p>
                      Total :$
                      <span className="text-primary">
                        {order.quantity * order.price}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center ">
          <p>Item Price</p>
          <p className="text-xl font-semibold text-[#ff5200]">${total}</p>
        </div>
        <div className="flex justify-between items-center ">
          <p>Packaging Fee</p>
          <p className="text-xl font-semibold text-[#ff5200]">${fee}</p>
        </div>
        <div className="flex justify-between items-center ">
          <p>GST(5%)</p>
          <p className="text-xl font-semibold text-[#ff5200]">${text}</p>
        </div>

        <div className="flex justify-between items-center border-t-2 border-black ">
          <p className="text-3xl font-semibold">Payable</p>
          <p className="text-3xl font-semibold text-[#ff5200]">
            ${updateTotal}
          </p>
        </div>
      </div>
      <Paypal price={updateTotal} />
      <Card price={updateTotal} />
    </div>
  );
};

export default ProductReview;
