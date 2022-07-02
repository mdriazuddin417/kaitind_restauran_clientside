import axios from "axios";
import React, { useState } from "react";

import { toast } from "react-toastify";

const Button = ({ product, count, setCount }) => {
  const cart = {
    quantity: count + 1,
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const handleIncrease = async () => {
    setCount(count + 1);
  };

  return (
    <div className="flex bg-[tomato] w-[120px] rounded-full justify-around items-center p-1 text-white font-bold">
      <p className="cursor-pointer" onClick={handleDecreaseCount}>
        -
      </p>
      <p className="w-[30px] h-[30px] rounded-full my-shadow flex items-center justify-center">
        {count}
      </p>
      <p className="cursor-pointer" onClick={handleIncrease}>
        +
      </p>
    </div>
  );
};

export default Button;
