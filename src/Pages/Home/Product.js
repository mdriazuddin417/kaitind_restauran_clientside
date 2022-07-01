import React from "react";

import { Link } from "react-router-dom";
import Button from "../../component/Button";

const Product = ({ product, value }) => {
  const { _id, price, image, category, name, text } = product;

  return (
    <div className=" p-5 my-shadow  h-full">
      <Link to={`/product/${_id}`} state={{ value }}>
        <img
          src={image}
          alt=""
          className="cursor-pointer"
          title="Product Details click"
        />
      </Link>
      <div className="space-y-2 p-3">
        <h3>{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-red-900 text-2xl font-bold">$ {price}</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
