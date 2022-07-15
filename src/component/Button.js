import axios from "axios";
import React, { useState } from "react";
const Button = ({ product, count, setCount, refetch }) => {
  const [loading, setLoading] = useState(false);
  const handleDecreaseCount = async () => {
    setLoading(true);
    setCount(count - 1);
    updateQuantity(count - 1);
    refetch();
  };
  const handleIncrease = async () => {
    setLoading(true);
    setCount(count + 1);
    updateQuantity(count + 1);
    refetch();
  };
  const updateQuantity = async (countValue) => {
    if (countValue === 0) {
      await axios
        .delete(`https://kaitind-server.vercel.app/order/${product._id}`)
        .then((res) => {
          setLoading(false);
          refetch();
        });
    }
    await axios
      .patch(`https://kaitind-server.vercel.app/order/${product._id}`, {
        quantity: countValue,
      })
      .then((res) => {
        setLoading(false);
        refetch();
      });
  };
  return (
    <div className="flex bg-[tomato] w-[120px] rounded-full justify-around items-center p-1 text-white font-bold">
      <p
        className="cursor-pointer hover:text-gray-500"
        onClick={handleDecreaseCount}
      >
        -
      </p>
      <p
        className={`w-[30px] h-[30px] rounded-full my-shadow flex items-center justify-center `}
      >
        {loading ? (
          <div class="w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
        ) : (
          count || 0
        )}
      </p>
      <p
        className="cursor-pointer hover:text-gray-500"
        onClick={handleIncrease}
      >
        +
      </p>
    </div>
  );
};

export default Button;
