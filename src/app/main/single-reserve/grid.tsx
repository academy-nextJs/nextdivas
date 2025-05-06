import React from "react";

const GridComponent = () => {
  return (
    <>
      <div className="w-1/8  p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 1</div>
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 2</div>
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 3</div>
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 4</div>
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 1</div>
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 2</div>
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 3</div>
          <div className="h-16 rounded-xl bg-[#393939]">Empty Slot 4</div>
        </div>
      </div>
    </>
  );
};

export default GridComponent;
