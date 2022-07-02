import React from "react";
import Button from "../component/Button";
import Add from "./Add";

const CurrentBtn = ({ count, product, setCount }) => {
  return (
    <div>
      {count > 0 && (
        <Button product={product} count={count} setCount={setCount} />
      )}

      {count === 0 && (
        <Add product={product} count={count} setCount={setCount} />
      )}
    </div>
  );
};

export default CurrentBtn;
