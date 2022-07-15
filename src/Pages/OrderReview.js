import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";

import { GiShoppingCart } from "react-icons/gi";
import useOrderQuery from "../customeHook/useOrderQuery";
const OrderReview = () => {
  const [count, setCount] = useState(0);
  const [orders, refetch] = useOrderQuery("order");
  let total = 0;
  if (orders) {
    for (const order of orders) {
      total = total + order.price * order.quantity;
    }
    refetch();
  }

  return (
    <ul class="menu p-4 overflow-y-auto w-[22rem] bg-base-100   space-y-3 menu-shadow">
      {orders?.map((order) => (
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
      ))}

      {orders?.length > 0 ? (
        <Link to={`/order`}>
          <div className="my-shadow text-center py-3 flex justify-center items-center">
            <GiShoppingCart className="text-2xl  mr-2" />
            <h3 className="text-xl font-semibold ">
              Place Order{"   "}
              <span className="text-xl font-semibold text-[#ff5200]">
                ${total}
              </span>
            </h3>
          </div>
        </Link>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="bg-[#ff5200] p-4 rounded-xl text-white text-center">
            Please browser product
          </p>
        </div>
      )}
    </ul>
  );
};

export default OrderReview;
