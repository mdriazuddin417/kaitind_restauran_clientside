import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="min-w-[300px] w-[450px] my-modal rounded-lg overflow-hidden p-10 relative my-parent-path">
        <div className="my-child-path flex justify-around items-center">
          <div className="w-1 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
        </div>
        <div>
          <h3 className="uppercase text-3xl text-[#ff5200] font-bold text-center my-5">
            Please Log In
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="my-input-2"
                {...register("email", {
                  required: { value: true, message: "Email is Required" },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a  valid email",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.email?.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="my-input-2"
                {...register("password", {
                  required: { value: true, message: "Password is Required" },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
                    message:
                      "1 digit, lowercase , uppercase & at least 8 letter",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.password?.message}
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="submit"
                value={"Submit"}
                className="w-full py-3 px-2 rounded-lg my-btn text-white font-samibold text-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
