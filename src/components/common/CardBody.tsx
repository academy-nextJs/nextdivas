import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";

import { CardBodyType } from "@/types/landing.types";

const CardBody = ({
  title,
  address,
  rooms,
  parking,
  bathrooms,
  yard_type,
  price,
  icon1,
  icon2,
  icon3,
  icon4,
}: CardBodyType) => {
  return (
    <div className=" grid gap-2 mt-2">
      <h2 className="font-bold text-xl max-2xl:text-lg max-xl:text-center text-right">
        {title}
      </h2>

      <div className="flex gap-2 justify-end opacity-55">
        <p className="truncate text-nowrap max-w-60 ">{address}</p>
        <HiOutlineLocationMarker className="text-lg mt-1.5" />
      </div>

      <div className="flex justify-end gap-2 text-sm opacity-55">
        <p>
          {rooms}
          خوابه
        </p>
        <p>
          {parking}
          پارکینگ
        </p>
        {icon2}
        <p>
          {bathrooms}
          حمام
        </p>
        {icon3}

        {icon4}

        <p>{yard_type}</p>

        {icon1}
      </div>

      <div className="bg-[#393939] flex gap-8 justify-center ml-14 text-[14px] font-semibold transition-all duration-500 group-hover:bg-primary group-hover:text-black px-3 py-2 rounded-lg text-center">
        <p className="flex">
          <span className="opacity-55"> هر ماه / </span>
          {price}ت
        </p>

        <p className="opacity-55 "> :اجاره ی ماهیانه </p>
      </div>
    </div>
  );
};

export default CardBody;
