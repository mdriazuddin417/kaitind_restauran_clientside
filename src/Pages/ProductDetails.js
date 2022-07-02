import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useOrders from "../customeHook/useOrders";

import CurrentBtn from "./CurrentBtn";
import MoreProductSingle from "./Home/MoreProductSingle";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const values = location.state.value;

  const product = values?.filter((value) => value._id === id);
  const { image, price, text, name, _id } = product[0];
  const [updateCount, setUpdateCount] = useState(0);
  const [orders, refetch] = useOrders("order");

  useEffect(() => {
    if (orders) {
      const updateCount = orders?.filter((order) => order._id === _id);
      if (updateCount[0]?.quantity) {
        setUpdateCount(updateCount[0]?.quantity);
        refetch();
      } else {
        setUpdateCount(0);
      }
    }
  }, [orders, _id, refetch]);
  return (
    <div className="lg:pt-20 lg:pb-24 lg:px-12 p-5">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10  my-shadow p-5">
        <div>
          <img src={image} alt="" className="w-[80%]" />
        </div>
        <div className="p-8 space-y-5">
          <h1 className="text-2xl">{name}</h1>
          <p className=" font-bold text-gray-500">
            <span className="text-2xl text-[tomato]"> $ {price}</span>
            /Item
          </p>
          <CurrentBtn
            product={product[0]}
            refetch={refetch}
            count={updateCount}
            setCount={setUpdateCount}
          />

          <p className="text-gray-500 text-md">
            <span className="font-bold text-lg">Description:</span> {text}
          </p>
        </div>
      </div>

      <div className="my-16">
        <div class="divider text-3xl">YOU MIGHT ALSO LIKE</div>
        <div className="flex gap-5 overflow-x-auto mt-10 p-5">
          {values.map((product) => (
            <MoreProductSingle
              refetch={refetch}
              product={product}
              value={values}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
