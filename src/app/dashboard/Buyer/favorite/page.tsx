import React from "react";

export default function Favorite() {
  return (
    <>
      {" "}
      {/* بخش هد */}
      <div className="w-full flex justify-between items-center border-b-2 border-dashed border-[#88888842] h-[100px]">
        <div className="cursor-pointer w-1/2 gap-5 p-3 flex justify-start items-center">
          <div
            className="w-[320px] h-[50px] p-2 flex justify-center items-center bg-[#8CFF45] rounded-[12px] text-black text-[16px]"
          >
            علامت گذاری به عنوان خوانده شده
          </div>
          <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[165px]">
            <select className="peer dark:text-white border-none rounded-[12px] outline-none block w-full h-full px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent">
              <option value="">همه</option>
            </select>
            <label className="absolute right-3 -top-2.5 bg-white dark:bg-[#3a3a3acc] dark:text-white px-1 text-xs text-black">
              : نوع اعلان
            </label>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-2 p-5">
          <span className="text-[18px] text-black dark:text-white">
            لیست اعلان های شما
          </span>
        </div>
      </div>
    </>
  );
}
