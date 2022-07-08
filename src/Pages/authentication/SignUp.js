import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { BiHide, BiShow } from "react-icons/bi";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import LoadingAnim from "../../component/LoadingAnim";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [open, setOpen] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  //======================Authentication
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  ///=====================================================
  const onSubmit = async (data) => {
    if (data?.password === data?.conpass) {
      setOpen(false);
      setPasswordError("");
      await createUserWithEmailAndPassword(data?.email, data?.password);
      await updateProfile({ displayName: data?.name });
      reset();
    } else {
      setPasswordError("Password not match");
    }
  };
  if (user) {
    navigate(from, { replace: true });
    toast.success("Sign Up complete");
  }
  useEffect(() => {
    if (error) {
      switch (error.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          toast.error("Please enter a new email address");
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
            Please Sign Up
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                className="my-input-2"
                placeholder="Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>
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
            <div>
              <input
                {...register("conpass", { required: true })}
                type="password"
                className="my-input-2"
                placeholder="Confirm Password"
              />
              {errors.conpass?.type === "required" && (
                <p className="text-red-500 text-sm">
                  Confirm Password is required
                </p>
              )}

              <p className="text-red-500 text-sm">{passwordError}</p>
            </div>
            {loading && <LoadingAnim />}
            <div>
              <input
                className="w-full py-3 px-2 rounded-lg my-btn text-white font-samibold text-lg "
                type="submit"
                value={"Submit"}
              />
            </div>
          </form>
          <div className="flex justify-between items-center text-sm mt-2">
            <Link to={"/login"}>
              <p className="link hover:text-blue-800">I have a Account</p>
            </Link>
            <Link to={"/home"}>
              <p className="link hover:text-blue-800">Return Home</p>
            </Link>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
