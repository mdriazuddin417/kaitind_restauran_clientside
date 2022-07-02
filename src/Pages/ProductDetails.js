import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import CurrentBtn from "./CurrentBtn";
import MoreProductSingle from "./Home/MoreProductSingle";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const values = location.state.value;
  const [count, setCount] = useState(0);

  const product = values.filter((value) => value._id === id);
  const { image, price, text, name } = product[0];

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
          <CurrentBtn product={product[0]} count={count} setCount={setCount} />

          <p className="text-gray-500 text-md">
            <span className="font-bold text-lg">Description:</span> {text}
          </p>
        </div>
      </div>

      <div className="my-16">
        <div class="divider text-3xl">YOU MIGHT ALSO LIKE</div>
        <div className="flex gap-5 overflow-x-auto mt-10 p-5">
          {values.map((product) => (
            <MoreProductSingle product={product} value={values} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
