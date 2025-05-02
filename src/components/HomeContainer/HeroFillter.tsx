"use client";
import Image from "next/image";
import { useState } from "react";
import booking from "../../../public/icons/booking.png";
import rent from "../../../public/icons/rent.png";
import buy from "../../../public/icons/buy.png";
// import ButtonComponent from "../common/button";

const HeroFillter = () => {
  const [searchIN, setSearchIN] = useState("");

  const fillter = [
    {
      id: 1,
      title: "خرید و فروش",
      icon: buy,
    },
    {
      id: 2,
      title: "رهن و اجاره",
      icon: rent,
    },
    {
      id: 3,
      title: "رزرو ملک",
      icon: booking,
    },
  ];
  return (
    <div className=" mx-auto pt-6 w-[70%] max-sm:w-[85%] text-lg max-md:text-sm max-sm:text-xs">    
      <div className="flex justify-end items-center gap-4 max-sm:gap-2 mt-10 ">
        {fillter.map((item) => (
          <div
            key={item.id}
            onClick={() => setSearchIN(item.title)}
            className={`flex items-center gap-2 max-sm:gap-1 border-l-3 px-4 max-sm:px-1 pb-2 hover:text-white cursor-pointer transition-all duration-300 ease-in-out
            ${searchIN === item.title ? "text-white" : "text-[#8C8C8C]"}
        `}
          >
            {item.title}
            <Image src={item.icon} alt="" className="mt-1.5" />
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center border-2 border-neutral-700 bg-neutral-800 rounded-3xl p-8">

        {/* <ButtonComponent icon={""} text="جستجو کن" style="bg-primary"/> */}
      </div>
    </div>
  );
};

export default HeroFillter;
