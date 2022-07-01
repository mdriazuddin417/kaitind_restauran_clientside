import React from "react";

const Button = () => {
  return (
    <div className="flex bg-[tomato] w-[120px] rounded-full justify-around items-center p-1 text-white font-bold">
      <p className="cursor-pointer">-</p>
      <p className="w-[30px] h-[30px] rounded-full my-shadow flex items-center justify-center">
        1
      </p>
      <p className="cursor-pointer">+</p>
    </div>
  );
};

export default Button;
