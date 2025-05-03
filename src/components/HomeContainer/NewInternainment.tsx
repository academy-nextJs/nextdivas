import React from "react";
import { BiBuildingHouse, BiSolidRightArrow } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CardComponent from "../common/CardComponent";
import ButtonComponent from "../common/button";
import vectors from "../../../public/icons/whiteflash.png";

const NewInternainment = () => {
  return (
    <div className="relative grid justify-items-center py-6 mx-4 pb-28">
      <svg
        height="551"
        viewBox="0 0 1376 551"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-4 w-[98%] -z-10 max-xl:hidden"
      >
        <path
          d="M1129.95 19.2078C1137.5 19.2078 1144.89 17.0748 1151.27 13.0551L1162.23 6.15275C1168.61 2.13297 1176 0 1183.55 0H1336C1358.09 0 1376 17.9086 1376 40V510.5C1376 532.591 1358.09 550.5 1336 550.5H40C17.9086 550.5 0 532.591 0 510.5L0 59.2078C0 37.1164 17.9086 19.2078 40 19.2078H1129.95Z"
          fill="#232323"
        />
      </svg>

      <div className="max-2xl:mt-9 max-xl:bg-[#232323] p-4 rounded-[55px]">
        {/* title-part */}
        <div className="grid justify-items-end z-10 gap-4 text-white">
          <div className="text-primary flex gap-1 items-center justify-center ">
            <BiSolidRightArrow className="text-[9px] opacity-50" />
            <BiSolidRightArrow className="text-[11px] opacity-80" />
            <BiSolidRightArrow className="text-sm" />
            <h1 className="mx-2"> بهترین تخفیف</h1>
          </div>
          <div className="grid grid-cols-2 w-full">
            <ButtonComponent
              icon={vectors}
              text="مشاهده همه"
              style="border-2 border-white bg-none flex-row-reverse pb-2 hover:border-primary hover:bg-primary/20 justify-self-start"
            />
            <h1 className=" font-bold text-2xl max-sm:text-lg justify-self-end">
              پیشنهاد ویژه دلتا
            </h1>
          </div>
        </div>

        {/* card-part */}
        <div className="grid grid-cols-4 gap-5 mt-10 z-10 max-md:grid-cols-1">
          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
              <p className="text-neutral-500"> {"(56 مورد)"} </p>
              <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
            </div>
          </div>

          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
              <p className="text-neutral-500"> {"(56 مورد)"} </p>
              <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
            </div>
          </div>

          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
              <p className="text-neutral-500"> {"(56 مورد)"} </p>
              <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
            </div>
          </div>

          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
              <p className="text-neutral-500"> {"(56 مورد)"} </p>
              <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInternainment;
