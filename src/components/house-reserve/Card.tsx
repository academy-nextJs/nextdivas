import React from "react";
import Image from "next/image";

// فرض می‌کنیم این آیکن‌ها رو داری، اگه نداری باید مسیرشون رو درست کنی یا از کتابخونه استفاده کنی
import LocationIcon from "../../../public/icons/marker 1.png";
import TimeIcon from "../../../public/icons/clock 1.png";
import { FaStar } from "react-icons/fa";

interface CardProps {
  title: string;
  location: string;
  status: string;
  isFavorite?: boolean;
  star?: number;
  price: string
}

const Card: React.FC<CardProps> = ({
  title,
  location,
  status,
  isFavorite = false,
  star,
  price
}) => {
  // تابع تبدیل اعداد به فارسی
  const toPersianDigits = (num: string | number): string => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num
      .toString()
      .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };

  return (
    <div className="bg-[#303030] border-b-2 border-[#3B3B3B] p-4 flex gap-4 items-center">
      {/* تصویر سمت چپ */}
      <div className="w-32 h-32 bg-[#393939] rounded-xl hover:border hover:shadow-[#8CFF451F] hover:shadow-2xs  hover:border-[#8CFF45]" ></div>

      {/* بخش اطلاعات */}
      <div className="flex-1 text-right">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-[#7569FF] shadow-inner shadow-black/40 text-white text-xs px-3 py-1 rounded-lg">
            <FaStar className="inline text-xs mr-1" />
            {star ? toPersianDigits(star) : "اطلاعات موجود نیست"} ستاره{" "}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        {/* بخش آیکن‌ها (موقعیت و زمان) */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <div className="flex w-full items-center gap-1">
            <Image
              src={LocationIcon}
              alt="LocationIcon"
              width={16}
              height={16}
            />
            <p className="text-xs text-gray-400">ادرس: {location}</p>
          </div>
          <div className="flex w-full items-center gap-1">
            <Image src={TimeIcon} alt="TimeIcon" width={16} height={16} />
            <p className="text-xs text-gray-400">مدت زمان: ۵ روز</p>
          </div>
        </div>
      </div>

      {/* بخش وضعیت و علاقه‌مندی */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">

    <span className="text-[#7DF93A] font-semibold text-xl md:text-3xl mb-2 md:mt-14">
      {price ? toPersianDigits(price) : "XXX"}
    </span>
        </div>
        <button className="mt-2 font-medium px-4 py-2 border border-[#8CFF45] text-[#8CFF45] cursor-pointer hover:text-[#363636] hover:bg-[#8CFF45] transition-all rounded-lg text-sm ">
          بررسی و رزرو هتل
        </button>
      </div>
    </div>
  );
};

export default Card;
