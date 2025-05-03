import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { GoArrowLeft } from "react-icons/go";
import LandingTitle from "../common/LandingTitle";

const Categories = () => {
  const list = [
    // { id: 1, title: "home" },
    { id: 2, title: "home" },
    { id: 3, title: "home" },
    { id: 4, title: "home" },
    { id: 5, title: "home" },
  ];
  return (
    <div className="mt-5 py-36">
      <div
        className="absolute w-40 h-60 blur-3xl opacity-20 rounded-r-full
        bg-primary
      "
      >
        {" "}
      </div>
      {/* title */}
      <LandingTitle
        title="دسته بندی املاک دلتا "
        mainTitle=" !هر ملکی بخوای اینجا پیدا میشه"
        details="  با کلیک به روی هر دسته بندی میتوانید تمام آگهی مربوط آن را مشاهده کنید
          و به ملک مورد علاقه خود برسید"
      />

      {/* categories */}
      <div className="flex max-lg:flex-wrap justify-center mt-10">
        {list.map((items) => (
          <div key={items.id} className="group relative">
            <GoArrowLeft className="absolute top-5 left-7 text-white/50 text-xl" />
            <div className=" absolute right-10 -top-3 rounded-xl bg-neutral-700/80 shadow-2xl w-14 h-14"></div>
            <svg
              width="260"
              height="137"
              viewBox="0 0 260 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" fill-neutral-600/30 group-hover:fill-primary group-hover:cursor-pointer text-white"
            >
              <g filter="url(#filter0_d_67_169)">
                <path d="M127.145 39.5C132.011 39.5 136.528 36.9731 139.075 32.8265L145.31 22.6735C147.857 18.5269 152.374 16 157.24 16H222C229.732 16 236 22.268 236 30V91C236 98.732 229.732 105 222 105H38C30.268 105 24 98.732 24 91V53.5C24 45.768 30.268 39.5 38 39.5H127.145Z" />
              </g>
            </svg>
            <h3 className="absolute top-14 w-full text-center text-white group-hover:text-black">
              {items.title}kkkkkk
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
