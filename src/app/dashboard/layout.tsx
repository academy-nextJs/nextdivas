"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // اضافه کردن usePathname
import SmallMeno from "../../../public/icons/Vector 2.png";
import Bell from "../../../public/icons/Bell_pin.png";
import Line from "../../../public/icons/Line 1.png";
import Sun from "../../../public/icons/Sun_fill.png";
import Moon from "../../../public/icons/Moon_fill.png";
import Sign_in from "../../../public/icons/Sign_in_circle.png";
import Credit_card from "../../../public/icons/Credit card_fill.png";
import Link from "next/link";

interface User {
  name: string;
  role: string;
}

// کامپوننت SVG برای placeholder
const PlaceholderSVG = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="37" height="37" rx="8" fill="#D9D9D9" />
    <path
      d="M18.5 10C15.46 10 13 12.46 13 15.5C13 18.54 15.46 21 18.5 21C21.54 21 24 18.54 24 15.5C24 12.46 21.54 10 18.5 10ZM18.5 19C16.57 19 15 17.43 15 15.5C15 13.57 16.57 12 18.5 12C20.43 12 22 13.57 22 15.5C22 17.43 20.43 19 18.5 19ZM18.5 22C14.91 22 11.5 23.79 9.5 26.5H27.5C25.5 23.79 22.09 22 18.5 22Z"
      fill="#888888"
    />
  </svg>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const data: User[] = [{ name: "امیر محمد ملایی", role: "خریدار" }];
  const link = [
    { name: "داشبورد", link: "/dashboard", icon: Moon },
    { name: "اطلاعات کاربری", link: "/dashboard/Buyer/userInfo", icon: Moon },
    { name: "مدیریت رزروها", link: "/dashboard/Buyer/bookingManagement", icon: Moon },
    { name: "علاقه‌مندی‌ها", link: "/dashboard/Buyer/favorite", icon: Moon },
    { name: "پرداخت ها", link: "/dashboard/Buyer/payment", icon: Moon },
    { name: "اعلان ها", link: "/dashboard/Buyer/announcemets", icon: Moon },
  ];

  // مدیریت تم با useState
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // تم پیش‌فرض دارک

  // گرفتن مسیر فعلی
  const pathname = usePathname();

  // تابع برای تغییر تم
  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  // اعمال تم اولیه در کلاینت
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme ? (storedTheme as "light" | "dark") : "dark";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen p-5 flex flex-wrap items-center gap-[19px] bg-[#ECECEC] dark:bg-[#333333]">
      {/* هدر */}
      <div className="w-[77.3%] flex rounded-[12px] h-[65px] bg-white dark:bg-[#444444]">
        <div className="w-full sm:w-1/2 gap-4 flex justify-start items-center p-5">
          <div className="w-[155px] gap-2 flex justify-end items-center border-none h-[37px]">
            <Image
              className="w-[7px] h-[8px] cursor-pointer"
              src={SmallMeno}
              alt="منو"
            />
            <div className="w-[100px] overflow-hidden flex flex-wrap h-[37px]">
              <span className="w-full text-right font-normal text-[14px] text-black dark:text-white">
                {data[0]?.name || "نامشخص"}
              </span>
              <span className="w-full text-right text-[12px] text-[#888888] dark:text-[#CCCCCC]">
                {data[0]?.role || "نقش نامشخص"}
              </span>
            </div>
            <PlaceholderSVG />
          </div>
          <Image className="w-5 h-5 cursor-pointer" src={Bell} alt="زنگوله" />
          <Image className="h-8 cursor-pointer" src={Line} alt="خط" />
          <div className="w-[70px] items-center flex justify-around h-[30px] bg-[#D9D9D9] rounded-full">
            <div
              className={`p-0.5 rounded-full cursor-pointer ${
                theme === "light" ? "bg-[#8CFF45]" : "bg-transparent"
              }`}
              onClick={() => toggleTheme("light")}
            >
              <Image className="w-6 h-6" src={Sun} alt="خورشید" />
            </div>
            <div
              className={`p-0.5 rounded-full cursor-pointer ${
                theme === "dark" ? "bg-[#555555]" : "bg-transparent"
              }`}
              onClick={() => toggleTheme("dark")}
            >
              <Image className="w-6 h-6" src={Moon} alt="ماه" />
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden sm:flex justify-end items-center p-5">
          <span className="font-black text-[20px] leading-[100%] text-black dark:text-white">
            داشبورد
          </span>
        </div>
        {/* منوی سمت راست */}
        <div className="rounded-[12px] absolute top-5 p-5 right-7 w-[15%] md:w-[18.75%] h-[775px] bg-white dark:bg-[#444444]">
          <div className="w-full h-9 flex justify-between items-center">
            <Image
              className="w-6 h-6 cursor-pointer"
              src={Sign_in}
              alt="Sign_in"
            />
            <span className="text-[32px] hidden md:block text-black font-black dark:text-white">
              دلتا
            </span>
          </div>
          <div className="mt-11 items-start gap-2 w-full h-[80%] flex flex-col">
            {link.map((item, index) => (
              <Link
                href={item.link}
                className={`w-full gap-2 p-2 items-center flex justify-center md:justify-end rounded-[8px] hover:bg-[#D9D9D954] h-[40px] ${
                  pathname === item.link ? "bg-[#D9D9D954]" : ""
                }`}
                key={index}
                title={item.name}
              >
                <span className="text-[18px] hidden md:block font-normal text-black dark:text-white">
                  {item.name}
                </span>
                <Image className="w-6 h-6" src={item.icon} alt={item.name} />
              </Link>
            ))}
          </div>
          <div
            title="کیف پول"
            className="gap-4 cursor-pointer justify-end w-full h-[80px] flex items-center p-5 border-2 border-dashed rounded-[18px] border-[#88888880]"
          >
            <div className="w-[100px] hidden md:flex flex-wrap h-full">
              <span className="w-full text-right font-normal text-[17px] text-black dark:text-white">
                کیف پول
              </span>
              <span className="w-full text-right text-[12px] text-[#888888] dark:text-[#CCCCCC]">
                عدم موجودی
              </span>
            </div>
            <Image
              title="کیف پول"
              className="w-7 h-7"
              src={Credit_card}
              alt="Credit_card"
            />
          </div>
        </div>
      </div>

      {/* دایو وسط */}
      <div className="flex items-start justify-center gap-[19px] w-full">
        {/* محتوای children */}
        <div className="w-[75%] relative right-[50px] sm:right-[80px] md:right-[150px] h-auto md:h-[1066px] rounded-[12px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;