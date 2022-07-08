import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import LoadingAnim from "../../component/LoadingAnim";
import ResetModal from "./ResetModal";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data?.email, data?.password);
  };
  if (user) {
    toast.success("Log In success");
    navigate(from, { replace: true });
  }
  useEffect(() => {
    if (error) {
      console.log(error.message);
      switch (error.message) {
        case "Firebase: Error (auth/wrong-password).":
          toast.error("Wrong Password");
          break;
        case "Firebase: Error (auth/user-not-found).":
          toast.error("Incorrect Email");
          break;

        default:
          toast.error("Please enter a valid information");
          break;
      }
    }
  }, [error]);
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
            <div className="relative">
              <input
                type={open ? "text" : "password"}
                placeholder="Password"
                className="my-input-2 "
                {...register("password", {
                  required: { value: true, message: "Password is Required" },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
                    message:
                      "1 digit, lowercase , uppercase & at least 8 letter",
                  },
                })}
              />
              <div className="absolute top-3 right-3">
                {!open ? (
                  <BiHide
                    className="text-2xl text-gray-600"
                    onClick={() => setOpen(!open)}
                  />
                ) : (
                  <BiShow
                    className="text-2xl text-gray-600"
                    onClick={() => setOpen(!open)}
                  />
                )}
              </div>
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
            {loading && <LoadingAnim />}
            <div>
              <input
                type="submit"
                value={"Submit"}
                className="w-full py-3 px-2 rounded-lg my-btn text-white font-samibold text-lg"
              />
            </div>
          </form>
          <div className="flex justify-between items-center text-sm mt-2">
            <Link to={"/signup"}>
              <p className="link hover:text-blue-800">
                I have not Account ?Register{" "}
              </p>
            </Link>
            <label for="passwordReset" className="link hover:text-blue-800">
              Forget Password
            </label>
          </div>
          <SocialLogin />
        </div>
      </div>
      <ResetModal />
    </div>
  );
};

export default Login;
