import React from "react";
import axios from "axios";

const Add = ({ setCount, count, product, refetch }) => {
  const { name, price, image, text, _id } = product;
  const email = "mdriazuddin417@gmail.com";
  const cart = {
    email,
    _id,
    name,
    price,
    image,
    text,
    quantity: 1,
  };
  const handleBtn = async () => {
    setCount(count + 1);

    await axios
      .post("http://localhost:5000/order", cart)
      .then((res) => console.log(res.data));
    refetch();
  };
  return (
    <div
      className="flex bg-[tomato] w-[120px] rounded-full justify-center items-center p-2 text-white font-bold cursor-pointer"
      onClick={handleBtn}
    >
      <p className="  flex items-center justify-center ">ADD +</p>
    </div>
  );
};

export default Add;
