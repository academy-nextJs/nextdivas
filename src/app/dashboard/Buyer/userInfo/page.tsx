import Image from "next/image";
import React from "react";
import PhotoIcon from "../../../../../public/icons/Frame.png";

export default function UerInfo() {
  return (
    <div className="w-[95%]  h-full ">
      <div className=" w-full p-5 flex justify-end h-[180px] border-b-2 border-[#88888842] border-dashed ">
        <div className=" w-full h-full items-center flex justify-center  ">
          <div className=" w-[120px] relative h-[120px] rounded-full bg-[#D9D9D9]">
            <div className=" w-[25px] cursor-pointer flex justify-center items-center absolute right-0 top-[20%] h-[25px] bg-[#8CFF45] rounded-full border-2 border-white">
              <Image className="w-3.5 h-3.5 " src={PhotoIcon} alt="PhotoIcon" />
            </div>
            <div className=" w-[25px] cursor-pointer flex justify-center items-center absolute right-0 top-[60%] h-[25px] bg-[#FF5555] rounded-full border-2 border-white"></div>
          </div>
        </div>
        <div className="w-[45%] hidden md:flex flex-wrap h-[120px]">
          <span className="w-full text-right font-[900] text-[20px] text-black dark:text-black">
            عکس نمایه شما
          </span>
          <span className="w-full font-normal text-right text-[16px] text-black dark:text-[#CCCCCC]">
            میتوانید عکس نمایه خود را تغییر دهید
          </span>
        </div>
      </div>
      <div className=" h-[360px] flex p-5  w-full border-b-2 border-dashed border-[#88888842]">
        <div className="w-[55%] flex flex-wrap p-4 gap-2 h-full">
          <div className="w-full h-16  flex justify-center items-center">
            {" "}
            <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
              <input
                type="text"
                name="search"
                placeholder="امیر محمد"
                className="peer outline-none block w-full h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              />
              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-black">
                : نام
              </label>
            </div>
          </div>
          <div className="w-full h-16 flex justify-center items-center">
            <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
              <input
                type="text"
                name="search"
                placeholder="ملایی"
                className="peer outline-none block w-full h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              />
              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-black">
                : نام خانوادگی
              </label>
            </div>
          </div>
          <div className="w-full h-16 flex justify-center items-center">
            <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
              <input
                type="text"
                name="search"
                placeholder="example@gamil.com"
                className="peer outline-none block w-full h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              />
              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-black">
                : ایمیل
              </label>
            </div>
          </div>
          <div className="w-full h-16 flex justify-center items-center">
            <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
              <input
                type="text"
                name="search"
                placeholder="09123456789"
                className="peer outline-none block w-full h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              />
              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-black">
                : شماره موبایل
              </label>
            </div>
          </div>
        </div>
        <div className="w-[45%] hidden items-center  md:flex flex-wrap h-2/3">
          <span className="w-full text-right font-[900] text-[20px] text-black dark:text-black">
            اطلاعات فردی
          </span>
          <span className="w-full font-normal text-right text-[16px] text-black dark:text-[#CCCCCC]">
            میتوانید اطلاعات فردی خود را تغییر دهید
          </span>
          <div className=" w-full h-[70px] flex justify-around items-center ">
            <div className="w-[130px] cursor-pointer  flex justify-center items-center h-[40px] bg-[#8CFF45] rounded-[12px] text-black ">
              اعمال تغییرات
            </div>
            <div className="w-[130px] cursor-pointer flex justify-center items-center h-[40px] border border-white transition-all hover:border-black rounded-[12px] text-black ">
              انصراف
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[450px] flex p-5  w-full ">
        <div className="w-[55%] flex flex-wrap p-4 gap-2 h-full">
          <div className="w-full h-16  flex justify-center items-center">
            {" "}
            <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
              <input
                type="text"
                name="search"
                className="peer outline-none block w-full h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              />
              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-black">
                : رمزعبور قبلی 
              </label>
            </div>
          </div>
          <div className="w-full h-16 flex justify-center items-center">
            <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
              <input
                type="text"
                name="search"
                className="peer outline-none block w-full h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              />
              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-black">
                : رمزعبور جدید 
              </label>
            </div>
          </div>
          <div className="w-full h-16 flex justify-center items-center">
            <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
              <input
                type="text"
                name="search"
                className="peer outline-none block w-full h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              />
              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-black">
                : رمزعبور جدید 
              </label>
            </div>
          </div>
        </div>
        <div className="w-[45%] hidden items-center  md:flex flex-wrap h-2/3">
          <span className="w-full text-right font-[900] text-[20px] text-black dark:text-black">
            اطلاعات فردی
          </span>
          <span className="w-full font-normal text-right text-[16px] text-black dark:text-[#CCCCCC]">
            میتوانید اطلاعات فردی خود را تغییر دهید
          </span>
          <div className=" w-full h-[70px] flex justify-around items-center ">
            <div className="w-[130px] cursor-pointer  flex justify-center items-center h-[40px] bg-[#8CFF45] rounded-[12px] text-black ">
              اعمال تغییرات
            </div>
            <div className="w-[130px] cursor-pointer flex justify-center items-center h-[40px] border border-white transition-all hover:border-black rounded-[12px] text-black ">
              انصراف
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
