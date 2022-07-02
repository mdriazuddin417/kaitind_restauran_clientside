import React, { useState } from "react";
import { Link } from "react-router-dom";

const MoreProductSingle = ({ product, value }) => {
  const { _id, price, image, category, name, text } = product;

  return (
    <div className=" px-10 py-2 my-shadow  h-[320px]">
      <Link to={`/product/${_id}`} state={{ value }}>
        <img
          src={image}
          alt=""
          className="cursor-pointer"
          title="Product Details click"
        />
        <div className="space-y-2 p-3">
          <h3 className="text-sm" title={`${name}`}>
            {name.length < 20 ? name : `${name.slice(0, 20)}...`}
          </h3>
          <div className="flex justify-between items-center flex-col">
            <p className="text-red-700 text-xl font-bold mb-2">$ {price}</p>

            <div className=" bg-[tomato] px-10 py-2 rounded-full text-white font-bold cursor-pointer">
              ADD
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoreProductSingle;
