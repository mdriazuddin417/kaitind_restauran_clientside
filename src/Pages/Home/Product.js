import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price, image, category, name, text } = product;
  const [open, setOpen] = useState(false);
  return (
    <Link to={`/product/${_id}`}>
      <div className=" p-5 my-shadow cursor-pointer h-full">
        <img src={image} alt="" />
        <div className="space-y-2 p-3">
          <h3>{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-red-900 text-2xl font-bold">$ {price}</p>
            <div
              className=" bg-[tomato] px-10 py-2 rounded-full text-white font-bold cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              ADD
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
