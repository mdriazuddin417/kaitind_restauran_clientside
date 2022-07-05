import React from "react";
import { useForm } from "react-hook-form";
const DeliveryAddress = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  return (
    <div className="space-y-5 shadow-lg border border-gray-200 p-10">
      <h3 className="text-xl font-semibold">Delivery Address</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <input
              {...register("name", { required: true })}
              type="text"
              class="my-input"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-sm text-red-600">Name is required</p>
            )}
          </div>

          <div>
            <input
              {...register("email", { required: true })}
              type="email"
              class="my-input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-sm text-red-600">Email is required</p>
            )}
          </div>
          <div>
            <input
              {...register("address", { required: true })}
              type="text"
              class="my-input"
              placeholder="Home Address"
            />
            {errors.address?.type === "required" && (
              <p className="text-sm text-red-600">Address is required</p>
            )}
          </div>
          <div>
            <input
              {...register("number", { required: true })}
              type="text"
              class="my-input"
              placeholder="Phone"
            />
            {errors.number?.type === "required" && (
              <p className="text-sm text-red-600">Number is required</p>
            )}
          </div>

          <input
            type="submit"
            className=" text-white w-2/3 rounded-lg py-2 my-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
