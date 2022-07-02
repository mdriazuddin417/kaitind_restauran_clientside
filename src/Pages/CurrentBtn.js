import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../component/Button";
import useOrders from "../customeHook/useOrders";
import Add from "./Add";

const CurrentBtn = ({ count, product, setCount, refetch }) => {
  return (
    <div>
      {count > 0 && (
        <Button
          product={product}
          count={count}
          setCount={setCount}
          refetch={refetch}
        />
      )}

      {count === 0 && (
        <Add
          product={product}
          count={count}
          setCount={setCount}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default CurrentBtn;
