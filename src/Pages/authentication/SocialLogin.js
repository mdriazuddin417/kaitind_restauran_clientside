import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    toast.success("Login success");
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div class="divider">OR</div>
      <div
        onClick={() => signInWithGoogle()}
        className="my-input-2 flex justify-center items-center mt-3 cursor-pointer hover:bg-gray-800 hover:text-white duration-300"
      >
        <FcGoogle className="text-2xl mr-3" />
        <p className="text-xl font-semibold">Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
