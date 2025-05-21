"use client";
import Image from "next/image";
import React, { useState } from "react";
import GoToIcon from "../../../../../public/icons/Group 33.png";

export default function BookingManagement() {
  const [booking, setBooking] = useState([
    {
      img: "",
      name: "هتل پارسیان",
      reservDate: "1404/02/01",
      price: "ت5,000,000",
      numberOfPassengers: "2",
      ReservStatus: true,
      PaymentStatus: true,
    },
    {
      img: "",
      name: "هتل آزادی",
      reservDate: "1404/02/02",
      price: "ت7,000,000",
      numberOfPassengers: "4",
      ReservStatus: false,
      PaymentStatus: false,
    },
    {
      img: "",
      name: "هتل آزادی",
      reservDate: "1404/02/02",
      price: "ت7,000,000",
      numberOfPassengers: "4",
      ReservStatus: true,
      PaymentStatus: false,
    },
    {
      img: "",
      name: "هتل آزادی",
      reservDate: "1404/02/02",
      price: "ت7,000,000",
      numberOfPassengers: "4",
      ReservStatus: true,
      PaymentStatus: false,
    },
    {
      img: "",
      name: "هتل آزادی",
      reservDate: "1404/02/02",
      price: "ت7,000,000",
      numberOfPassengers: "4",
      ReservStatus: true,
      PaymentStatus: false,
    },
    {
      img: "",
      name: "هتل لاله",
      reservDate: "1404/02/03",
      price: "ت6,000,000",
      numberOfPassengers: "3",
      ReservStatus: true,
      PaymentStatus: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // فیلتر کردن بر اساس جستجو
  const filteredBooking = booking.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // محاسبه ایتم‌های صفحه فعلی
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooking.slice(indexOfFirstItem, indexOfLastItem);

  // تعداد کل صفحات
  const totalPages = Math.ceil(filteredBooking.length / itemsPerPage);

  const handlePageChange = (pageNumber : number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center border-b-2 border-dashed border-[#88888842] h-[100px]">
        <div className="cursor-pointer w-1/2 gap-5 p-3 flex justify-start items-center">
          <div className="w-[85px] flex justify-center items-center text-[#363636] rounded-[12px] h-[50px] bg-[#8CFF45]">
            فیلتر
          </div>
          <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
            <input
              type="text"
              name="search"
              placeholder=".....نام هتل مورد نظر"
              className="peer rounded-[12px] dark:text-white outline-none block w-full h-full px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <label className="absolute right-3 -top-2.5 bg-white dark:bg-[#3a3a3acc] dark:text-white px-1 text-xs text-black">
              : جستجو
            </label>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-2 p-5">
          <span className="text-[18px] text-black dark:text-white">
            لیست رزرو های شما
          </span>
        </div>
      </div>

      {/* لیست */}
      <div className="flex flex-wrap justify-center w-full">
        <div className="grid items-center grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center rounded-[12px] w-[95%] h-auto sm:h-[50px] bg-[#F0F0F0] dark:bg-[#555555] p-2">
          <div className="hidden lg:block text-black dark:text-white"></div>
          <div className="hidden lg:block text-black dark:text-white">
            وضعیت پرداخت
          </div>
          <div className="hidden lg:block text-black dark:text-white">
            وضعیت رزرو
          </div>
          <div className="text-black dark:text-white">تعداد مسافر</div>
          <div className="text-black dark:text-white">قیمت کل</div>
          <div className="text-black dark:text-white">تاریخ رزرو</div>
          <div className="text-black dark:text-white">نام اقامتگاه</div>
          <div className="text-black dark:text-white"></div>
        </div>
        <div className="h-[600px] flex flex-wrap items-start w-full justify-center overflow-auto">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div
                key={index}
                className="w-full hover:bg-[#D9D9D929] items-center sm:w-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-2 p-2 bg-white dark:bg-[#444444] rounded-[8px]"
              >
                <div className="text-4xl h-full cursor-pointer text-black dark:text-white">
                  ...
                </div>
                <div className="hidden lg:block text-black dark:text-white">
                  {item.PaymentStatus ? (
                    <div className="w-[90px] p-2 flex justify-center items-center h-[22px] bg-[#8CFF45] rounded-[100px]">
                      {" "}
                      تایید شده{" "}
                    </div>
                  ) : (
                    <div className="w-[90px] p-2 flex justify-center items-center h-[22px] bg-[#FF989A] rounded-[100px]">
                      {" "}
                      لغو شده{" "}
                    </div>
                  )}
                </div>
                <div className="hidden lg:block text-black dark:text-white">
                  {item.ReservStatus ? (
                    <div className="w-[90px] p-2 flex justify-center items-center h-[22px] bg-[#8CFF45] rounded-[100px]">
                      {" "}
                      تایید شده{" "}
                    </div>
                  ) : (
                    <div className="w-[90px] p-2 flex justify-center items-center h-[22px] bg-[#FF989A] rounded-[100px]">
                      {" "}
                      لغو شده{" "}
                    </div>
                  )}
                </div>
                <div className="text-black flex justify-between w-[90px] text-left dark:text-white">
                  <span>{item.numberOfPassengers}</span>{" "}
                  <span> عدد مسافر </span>
                </div>
                <div className="text-black dark:text-white">
                  {item.price}
                </div>
                <div className="text-black dark:text-white">
                  {item.reservDate}
                </div>
                <div className="text-black dark:text-white">{item.name}</div>
                <Image
                  className="w-[105px] h-[72px] rounded-[12px] bg-[#D9D9D9]"
                  src={item.img || ""}
                  alt={item.name}
                />
              </div>
            ))
          ) : (
            <div className="w-full text-center col-span-6 text-black dark:text-white">
              رزرو ای وجود ندارد
            </div>
          )}
        </div>
        {/* پیجینیشن */}
        <div className="w-full h-[200px] flex justify-center items-center gap-4 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded disabled:opacity-50"
          >
            قبلی
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 ${
                currentPage === i + 1
                  ? "bg-[#8CFF45] text-white"
                  : "bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
              } rounded`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded disabled:opacity-50"
          >
            بعدی
          </button>
        </div>
      </div>
    </>
  );
}