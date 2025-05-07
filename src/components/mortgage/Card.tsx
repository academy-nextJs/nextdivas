"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import LocationIcon from "../../../public/icons/marker 1.png"
import { FaBath, FaCar, FaBed } from "react-icons/fa6";
import Image from "next/image";

// تعریف رابط برای تایپ data
interface CardData {
  rate?: string | number;
  title?: string;
  address?: string;
  bathrooms?: number;
  parking?: number;
  rooms?: number;
  price?: string | number;
}

// تابع تبدیل اعداد به فارسی
const toPersianDigits = (num: string | number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div
      dir="rtl"
      className="relative w-[678px] h-[198px] hover:shadow-2xl transition-all hover:cursor-pointer shadow-[#8CFF451F] rounded-[16px] flex justify-between p-4 text-white"
    >
      <svg
        height="240"
        viewBox="0 0 679 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bottom-[-5px] left-[-0px] absolute"
      >
        <path
          d="M554.978 27.4183C562.544 27.4183 569.668 23.8499 574.199 17.7897L580.301 9.62861C584.832 3.56845 591.956 0 599.522 0L654 0C667.255 0 678 10.7452 678 24V285C678 298.255 667.255 309 654 309H24C10.7452 309 0 298.255 0 285L0 51.4183C0 38.1635 10.7452 27.4183 24 27.4183L554.978 27.4183Z"
          fill="#393939"
        />
      </svg>
      {/* سمت چپ: تصویر (اگر داشتی اضافه کن) */}
      <div className="w-[120px] z-10 h-full bg-neutral-700 rounded-[12px]"></div>

      {/* مرکز: اطلاعات ملک */}
      <div className="flex-1 z-10 mx-4 flex flex-col justify-between text-right">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="bg-[#7569FF] shadow-inner shadow-black/40 text-white text-xs px-3 py-1 rounded-lg">
              {data.rate ? toPersianDigits(data.rate) : "اطلاعات موجود نیست"} ستاره{" "}
              <FaStar className="inline text-xs mr-1" />
            </span>
          </div>

          <h2 className="text-lg font-bold mb-1">
            {data.title || "هتل سراوان راین رشت"}
          </h2>

          <p className="mt-10 text-sm flex gap-2 text-gray-300">
          <Image src={LocationIcon} alt="LocationIcon" />  <span className="text-[#AAAAAA]">آدرس:</span> {data.address || "گیلان، رشت، میدان آزادی، جلال"}
          </p>
        </div>

        {/* امکانات */}
        <div className="flex justify-start gap-8 mt-3 text-sm text-white opacity-90">
          <div className="flex items-center gap-1">
            {data.bathrooms ? toPersianDigits(data.bathrooms) : "۲"} حمام{" "}
            <FaBath />
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            {data.parking ? toPersianDigits(data.parking) : "۴"} پارکینگ{" "}
            <FaCar />
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            {data.rooms ? toPersianDigits(data.rooms) : "۴"} خوابه <FaBed />
          </div>
        </div>
      </div>

      {/* سمت راست: قیمت و دکمه */}
      <div className="z-10 flex flex-col justify-between items-center text-right">
        <span className="text-[#7DF93A] mt-14 font-semibold text-3xl">
          {data.price ? toPersianDigits(data.price) : "XXX"}ت
        </span>

        <button className="hover:bg-[#7DF93A] hover:shadow-2xl border border-[#8CFF45] shadow-inner shadow-[#8CFF451F] text-[#8CFF45] hover:text-black text-sm font-bold w-40 h-11 rounded-xl hover:brightness-110 transition-all">
          مشاهده ملک
        </button>
      </div>
    </div>
  );
};

export default Card;