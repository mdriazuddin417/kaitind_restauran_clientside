import React, { useState } from "react";

import DeliveryAddress from "../component/DeliveryAddress";
import DeliveryMethod from "../component/DeliveryMethod";
import DeliveryTime from "../component/DeliveryTime";
import Help from "../component/Help";
import ProductReview from "../component/ProductReview";
import { useForm } from "react-hook-form";
const PlaceOrder = () => {
  const { resetField } = useForm();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [userInfo, setUserInfo] = useState({});
  console.log(date, time);
  const onSubmit = (data) => {
    setUserInfo(data);
    resetField();
  };
  console.log(userInfo);
  return (
    <div>
      <h2 className="bg-[#ff5200] py-4 text-center text-white">
        Safety Assured Meals and Contactless Delivery
      </h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 lg:my-16 lg:px-12">
        <div className=" space-y-5 ">
          <DeliveryTime
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
          />
          <DeliveryAddress onSubmit={onSubmit} />
          <DeliveryMethod date={date} time={time} userInfo={userInfo} />
        </div>
        <div className="space-y-5">
          <ProductReview />
          <Help />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
