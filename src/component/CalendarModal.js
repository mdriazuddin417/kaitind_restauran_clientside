import React, { useState } from "react";
import Calendar from "react-calendar";

const CalendarModal = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal bg-white bg-opacity-80">
        <div class="modal-box relative ">
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
          <div class="modal-action">
            <label for="my-modal-3" class="btn btn-sm bg-[#ff5200]">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
