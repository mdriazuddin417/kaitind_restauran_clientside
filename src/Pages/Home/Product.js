import React from "react";
import { useState } from "react";

const Product = ({ product }) => {
  const { _id, balance, picture, category, name } = product;
  const [open, setOpen] = useState(false);
  return (
    <div className=" p-5 my-shadow">
      <img src={picture} alt="" />
      <div className="space-y-2 p-3">
        <h3>{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-red-900 text-2xl font-bold">{balance}</p>
          <div
            className=" bg-[tomato] px-10 py-2 rounded-full text-white font-bold cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            ADD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
