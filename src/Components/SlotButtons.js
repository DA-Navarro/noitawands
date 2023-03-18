import React from "react";

function SlotButtons({ addSlot, deleteSlot }) {
  return (
    <div>
      <div className="SlotButtons">
        <div className="SlotButton" onClick={deleteSlot}>
          -
        </div>
        <div className="SlotButton" onClick={addSlot}>
          +
        </div>
      </div>
    </div>
  );
}

export default SlotButtons;
