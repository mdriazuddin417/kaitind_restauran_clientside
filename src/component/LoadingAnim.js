import React from "react";

const LoadingAnim = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <div class="bg-[#ff5200]  p-2  w-2 h-2 rounded-full animate-bounce blue-circle"></div>
      <div class="bg-[#ff5200]  p-2 w-2 h-2 rounded-full animate-bounce green-circle"></div>
      <div class="bg-[#ff5200]  p-2  w-2 h-2 rounded-full animate-bounce red-circle"></div>
      <div class="bg-[#ff5200]  p-2  w-2 h-2 rounded-full animate-bounce yellow-circle"></div>
    </div>
  );
};

export default LoadingAnim;
