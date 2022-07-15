import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import useOrders from "../../customeHook/useOrders";

import CurrentBtn from "../CurrentBtn";

const Product = ({ product, value, refetch }) => {
  const { _id, price, image, category, name, text } = product;

  const [updateCount, setUpdateCount] = useState(0);
  const [orders] = useOrders("order");

  useEffect(() => {
    if (orders) {
      const updateCount = orders?.filter((order) => order._id === _id);
      if (updateCount[0]?.quantity) {
        setUpdateCount(updateCount[0]?.quantity);
      } else {
        setUpdateCount(0);
      }
    }
  }, [orders, _id]);
  return (
    <div className=" p-5 my-shadow  h-full ">
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

          <CurrentBtn
            product={product}
            refetch={refetch}
            count={updateCount}
            setCount={setUpdateCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
