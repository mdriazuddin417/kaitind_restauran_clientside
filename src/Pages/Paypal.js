import React from "react";

const Paypal = ({ price }) => {
  const name = "Riaz Uddin";
  const email = "mdriazuddin417@gmail.com";
  return (
    <div className="">
      <div>
        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
        <div class="modal bg-[#ECF0F3]">
          <div class="modal-box my-modal relative space-y-5">
            <h3 className="text-center text-[#ff5200] text-3xl font-semibold">
              Welcome to PayPal
            </h3>
            <div>
              <p className="text-2xl font-semibold">{name}</p>
              <p className="text-xl font-semibold">{email}</p>
              <p className="text-xl font-bold">
                Total Price: <span className="text-[#ff5200]">$ {price}</span>
              </p>
            </div>

            <div class="modal-action">
              <label for="my-modal-2" class="btn btn-sm bg-[#ff5200]">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
