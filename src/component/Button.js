import axios from "axios";
import React, { useState } from "react";

import { toast } from "react-toastify";
import useOrders from "../customeHook/useOrders";

const Button = ({ product, count, setCount, refetch }) => {
  const handleDecreaseCount = async () => {
    setCount(count - 1);
    updateQuantity(count - 1);
    refetch();
  };
  const handleIncrease = async () => {
    setCount(count + 1);
    updateQuantity(count + 1);
    refetch();
  };
  const updateQuantity = async (countValue) => {
    console.log(countValue);
    if (countValue === 0) {
      await axios
        .delete(`http://localhost:5000/order/${product._id}`)
        .then((res) => {
          toast("Delete");
          console.log("delete", res.data);
        });
    }
    await axios
      .patch(`http://localhost:5000/order/${product._id}`, {
        quantity: countValue,
      })
      .then((res) => {
        refetch();
        console.log(res.data);
      });
  };
  return (
    <div className="flex bg-[tomato] w-[120px] rounded-full justify-around items-center p-1 text-white font-bold">
      <p className="cursor-pointer" onClick={handleDecreaseCount}>
        -
      </p>
      <p className="w-[30px] h-[30px] rounded-full my-shadow flex items-center justify-center">
        {count || 0}
      </p>
      <p className="cursor-pointer" onClick={handleIncrease}>
        +
      </p>
    </div>
  );
};

export default Button;
