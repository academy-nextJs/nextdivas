import ButtonComponent from "@/components/common/button";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import vectors from "../../../../public/icons/whiteflash.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CardComponent from "@/components/common/CardComponent";
import { RiHotelBedLine } from "react-icons/ri";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdOutlineBathtub } from "react-icons/md";
import { LuTreePine } from "react-icons/lu";

const HouseRent = () => {
  return (
    <div className="mx-16 py-12 max-sm:mx-2 ">
      <div
        className="absolute right-0 w-40 h-60 blur-3xl opacity-20 rounded-l-full
        bg-secondary 
      "
      >
        {" "}
      </div>

      {/* title-part */}
      <div className="grid justify-items-end z-10 gap-4 text-white">
        <div className="text-primary flex gap-1 items-center justify-center ">
          <BiSolidRightArrow className="text-[9px] max-sm:mx-text-[5px] opacity-50" />
          <BiSolidRightArrow className="text-[11px] max-sm:mx-text-[7px] opacity-80" />
          <BiSolidRightArrow className="text-sm max-sm:mx-text-xs" />
          <h1 className="mx-2 max-sm:mx-1"> با هر مبلغی خونه دار شو</h1>
        </div>
        <div className="grid grid-cols-2 w-full  max-md:grid-cols-1 max-md:justify-items-center">
          <ButtonComponent
            icon={vectors}
            text="مشاهده همه"
            style="border-2 border-white bg-none flex-row-reverse pb-2 m-1 hover:border-primary hover:bg-primary/20 justify-self-start max-md:justify-self-end"
          />
          <div className="justify-self-end flex flex-row-reverse max-sm:grid gap-2 relative">
            <h1 className="font-bold text-2xl max-lg:mt-4 max-lg:text-[14px] pt-2 max-sm:text-lg pl-2 flex gap-2">
              <span className="border-l-[2.5px] border-white/20 mt-2 mb-3 max-md:hidden">
                {""}
              </span>
              رهن و اجاره ملک در دلتا
            </h1>
            <div className="flex justify-center rounded-xl bg-gray p-1.5  gap-2 text-sm">
              <h4 className="py-2 px-3 opacity-80">رهن خونه</h4>
              <h4 className="py-1.5 px-3 bg-primary text-black rounded-xl">
                اجاره ملک
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* cart  */}
      <div className="grid grid-cols-4 gap-5 mt-12 z-10 max-md:grid-cols-1">
        <div className="group text-white cursor-pointer">
          <CardComponent />
          <div className="mx-7 grid gap-2 mt-2">
            <h2 className="font-bold text-xl max-2xl:text-lg max-xl:text-center text-right">
              آپارتمان لوکس زعفورانیه
            </h2>

            <div className="flex gap-2 justify-end opacity-55">
              location
              <HiOutlineLocationMarker className="text-lg" />
            </div>
            <div className="flex gap-2 justify-end text-sm opacity-55">
              <div className="flex gap-1 items-center">
                4 خوابه
                <RiHotelBedLine />
              </div>
              <div className="flex gap-1 items-center border-l-2">
                1 پارکینگ
                <LiaCarSideSolid />
              </div>
              <div className="flex gap-1 items-center border-l-2">
                2حمام
                <MdOutlineBathtub />
              </div>
              <div className="flex gap-1 items-center border-l-2">
                حیاط
                <LuTreePine />
              </div>
            </div>

            <div className="bg-[#393939] flex gap-8 justify-center text-[14px] font-semibold transition-all duration-500 group-hover:bg-primary group-hover:text-black px-3 py-2 rounded-lg text-center">
              <p className="flex">
                <span className="opacity-55"> هر ماه / </span>
                5000000ت
              </p>

              <p className="opacity-55 "> :اجاره ی ماهیانه </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRent;
