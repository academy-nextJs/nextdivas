"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Pin_fill from "../../../public/icons/Pin_fill.png";
import GoToIcon from "../../../public/icons/Group 33.png";
import BookmarkIcon from "../../../public/icons/Bookmark_fill.png";

const Dashboard = () => {
  // تعریف آرایه داده‌ها با useState
  const [dashboardItems, setDashboardItems] = useState([
    { id: 1, count: 5, title: "علاقه مندی ها" },
    { id: 2, count: 5, title: "رزرو های پرداخت نشده" },
    { id: 3, count: 5, title: "رزرو های فعال" },
    { id: 4, count: 5, title: "کل رزرو ها" },
  ]);

  return (
    <>
      {/* بخش اول: چهار دایو بالا */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-5">
        {dashboardItems.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-3xs justify-center flex flex-wrap bg-white dark:bg-[#444444] h-[130px] rounded-[12px]"
          >
            <div className="w-[90%] gap-4 justify-end h-[65%] border-b-2 border-dashed border-[#88888842] flex pr-5">
              <div className="w-[100px] flex items-center flex-wrap h-[90%]">
                <span className="w-full text-right font-normal text-[17px] text-black dark:text-white">
                  {item.count}
                </span>
                <span className="w-full text-right text-[16px] text-[#888888] dark:text-[#CCCCCC]">
                  {item.title}
                </span>
              </div>
              <div className="w-[50px] flex justify-center p-3 items-end h-[60px] bg-[#ECECEC] dark:bg-[#555555] rounded-b-[12px]">
                <Image src={Pin_fill} alt="Pin_fill" />
              </div>
            </div>
            <div className="w-[90%] cursor-pointer flex justify-between items-center h-[35%]">
              <Image
                className="w-[63px] h-[17.5px]"
                src={GoToIcon}
                alt="GoToIcon"
              />
              <div className="text-[#7A7A7A] dark:text-[#AAAAAA]">مشاهده</div>
            </div>
          </div>
        ))}
      </div>

      {/* بخش دوم: دو دایو وسط */}
      <div className="w-full h-auto flex mt-5 flex-col md:flex-row items-center gap-5">
        {/* دایو وضعیت پروفایل */}
        <div className="w-full md:w-1/2 rounded-[12px] h-[255px] flex flex-wrap bg-white dark:bg-[#444444]">
          <div className="w-full flex justify-between items-center border-b-2 border-dashed border-[#88888842] h-[50px]">
            <div className="cursor-pointer w-1/2 gap-5 p-3 flex justify-start items-center">
              <Image
                className="w-[63px] h-[17.5px]"
                src={GoToIcon}
                alt="GoToIcon"
              />
              <span className="text-[#7A7A7A] dark:text-[#AAAAAA]">ویرایش</span>
            </div>
            <div className="w-1/2 flex items-center justify-end gap-2 p-5">
              <span className="text-[18px] text-black dark:text-white">
                وضعیت پروفایل شما
              </span>
              <Image
                className="w-6 h-6"
                src={BookmarkIcon}
                alt="BookmarkIcon"
              />
            </div>
          </div>
          <div className="w-full h-[205px] items-center flex justify-between">
            <div className="w-[20%] h-full"></div>
            <div className="w-[80%] justify-end flex flex-wrap p-5 h-full">
              <span className="w-full text-right text-[36px] text-black dark:text-white">
                40%
              </span>
              <p className="w-full text-right text-black dark:text-white">
                برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪
                تکمیل شده باشد.
              </p>
              <p className="text-[12px] text-[#888888] dark:text-[#CCCCCC]">
                آخرین تغییرات در 3 دقیقه پیش
              </p>
            </div>
          </div>
        </div>

        {/* دایو نمودار رزروها */}
        <div className="w-full md:w-1/2 rounded-[12px] h-[255px] flex flex-wrap bg-white dark:bg-[#444444]">
          <div className="w-full gap-2 flex justify-end items-center border-b-2 p-5 border-dashed border-[#88888842] h-[50px]">
            <span className="text-[18px] text-black dark:text-white">
              نمودار رزرو های شما
            </span>
            <Image className="w-6 h-6" src={BookmarkIcon} alt="BookmarkIcon" />
          </div>
          <div></div>
        </div>
      </div>

      {/* بخش سوم: رزروهای اخیر */}
      <div className="w-full mt-4 items-start rounded-[12px] flex flex-wrap justify-center h-auto md:h-[590px] bg-white dark:bg-[#444444]">
        <div className="w-full flex justify-between items-center border-b-2 border-dashed border-[#88888842] h-[50px]">
          <div className="cursor-pointer w-1/2 gap-5 p-3 flex justify-start items-center">
            <Image
              className="w-[63px] h-[17.5px]"
              src={GoToIcon}
              alt="GoToIcon"
            />
            <span className="text-[#7A7A7A] dark:text-[#AAAAAA]">ویرایش</span>
          </div>
          <div className="w-1/2 flex items-center justify-end gap-2 p-5">
            <span className="text-[18px] text-black dark:text-white">
              رزرو های اخیر
            </span>
            <Image
              className="w-6 h-6"
              src={BookmarkIcon}
              alt="BookmarkIcon"
            />
          </div>
        </div>
        <div className="grid items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 text-center rounded-[12px] w-[95%] h-auto sm:h-[50px] bg-[#F0F0F0] dark:bg-[#555555] p-2">
          <div className="hidden lg:block text-black dark:text-white">
            وضعیت
          </div>
          <div className="text-black dark:text-white">قیمت (تومان)</div>
          <div className="text-black dark:text-white">تاریخ رزرو</div>
          <div className="text-black dark:text-white">نام اقامتگاه</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;