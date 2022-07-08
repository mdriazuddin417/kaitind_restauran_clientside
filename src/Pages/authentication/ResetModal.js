import { async } from "@firebase/util";
import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import LoadingAnim from "../../component/LoadingAnim";
import auth from "../../firebase.init";

const ResetModal = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Send email.");
  };
  return (
    <div>
      <div>
        <input type="checkbox" id="passwordReset" class="modal-toggle" />

        <div class="modal bg-[#ECF0F3]">
          <div class="modal-box my-modal relative space-y-5">
            <label
              for="passwordReset"
              class="btn btn-sm btn-circle bg-[#ff5200] absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleReset} className="space-y-3 text-center">
              <input
                name="email"
                required
                type="email"
                className="my-input-2"
              />
              {sending && <LoadingAnim />}
              <button className=" py-2 px-10 shadow text-white font-semibold bg-[#ff5200] rounded-lg">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
