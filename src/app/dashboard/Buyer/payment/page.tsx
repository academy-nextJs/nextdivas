"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Payment() {
  const [currentItems, setCurrentItems] = useState([
    {
      Date: "1404/2/3",
      trackingNumber: 12322143243,
      price: 1250000,
      payStatus: true,
      TransactionType: "رزرو",
    },
    {
      Date: "1404/1/22",
      trackingNumber: 23456789,
      price: 1550000,
      payStatus: false,
      TransactionType: "شارژ کیف پول",
    },
    {
      Date: "1404/2/1",
      trackingNumber: 34567890,
      price: 2000000,
      payStatus: true,
      TransactionType: "رزرو",
    },
    {
      Date: "1404/2/5",
      trackingNumber: 45678901,
      price: 1800000,
      payStatus: false,
      TransactionType: "شارژ کیف پول",
    },
    {
      Date: "1404/2/10",
      trackingNumber: 56789012,
      price: 1500000,
      payStatus: true,
      TransactionType: "رزرو",
    },
    {
      Date: "1404/2/15",
      trackingNumber: 67890123,
      price: 1300000,
      payStatus: false,
      TransactionType: "شارژ کیف پول",
    },
    {
      Date: "1404/2/20",
      trackingNumber: 78901234,
      price: 1600000,
      payStatus: true,
      TransactionType: "رزرو",
    },
    {
      Date: "1404/2/25",
      trackingNumber: 89012345,
      price: 1400000,
      payStatus: false,
      TransactionType: "شارژ کیف پول",
    },
    {
      Date: "1404/2/28",
      trackingNumber: 90123456,
      price: 1700000,
      payStatus: true,
      TransactionType: "رزرو",
    },
  ]);

  const [transactionFilter, setTransactionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // فیلتر کردن داده‌ها
  const filteredItems = currentItems.filter((item) => {
    const transactionMatch =
      !transactionFilter || item.TransactionType === transactionFilter;
    const statusMatch =
      !statusFilter || (statusFilter === "true" ? item.payStatus : !item.payStatus);
    return transactionMatch && statusMatch;
  });

  // محاسبه ایتم‌های صفحه فعلی
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDisplayedItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // تعداد کل صفحات
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber : number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* بخش هد */}
      <div className="w-full flex justify-between items-center border-b-2 border-dashed border-[#88888842] h-[100px]">
        <div className="cursor-pointer w-1/2 gap-5 p-3 flex justify-start items-center">
          <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
            <select
              className="peer dark:text-white border-none rounded-[12px] outline-none block w-full h-full px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              value={transactionFilter}
              onChange={(e) => setTransactionFilter(e.target.value)}
            >
              <option value="">همه تراکنش‌ها</option>
              <option value="رزرو">رزرو</option>
              <option value="شارژ کیف پول">شارژ کیف پول</option>
            </select>
            <label className="absolute right-3 -top-2.5 bg-white dark:bg-[#3a3a3acc] dark:text-white px-1 text-xs text-black">
              : نوع تراکنش
            </label>
          </div>
          <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
            <select
              className="peer rounded-[12px] dark:text-white outline-none block w-full h-full px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">همه وضعیت‌ها</option>
              <option value="true">تایید شده</option>
              <option value="false">رد شده</option>
            </select>
            <label className="absolute right-3 -top-2.5 bg-white dark:bg-[#3a3a3acc] dark:text-white px-1 text-xs text-black">
              : وضعیت پرداخت
            </label>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-2 p-5">
          <span className="text-[18px] text-black dark:text-white">
            لیست تراکنش های شما
          </span>
        </div>
      </div>

      {/* لیست */}
      <div className="flex flex-wrap justify-center w-full">
        <div className="grid items-center grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-2 text-center rounded-[12px] w-[95%] h-auto sm:h-[50px] bg-[#F0F0F0] dark:bg-[#555555] p-2">
          <div className="text-black dark:text-white">نوع تراکنش</div>
          <div className="text-black dark:text-white">وضعیت پرداخت</div>
          <div className="text-black dark:text-white">مبلغ</div>
          <div className="text-black hidden md:block dark:text-white">شماره پیگیری</div>
          <div className="text-black dark:text-white">تاریخ</div>
        </div>
        <div className="h-[600px] flex flex-wrap items-start w-full justify-center overflow-auto">
          {currentDisplayedItems.length > 0 ? (
            currentDisplayedItems.map((item, index) => (
              <div
                key={index}
                className="w-full hover:bg-[#D9D9D929] items-center  grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-2 p-2 bg-white dark:bg-[#444444] rounded-[8px]"
              >
                <div className="text-black flex justify-between w-[150px]  text-right dark:text-white">
                  {item.TransactionType}
                </div>
                <div className="hidden lg:block text-black dark:text-white">
                  {item.payStatus ? (
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
                <div className="text-black dark:text-white">{item.price.toLocaleString()} تومان</div>
                <div className="text-black hidden md:block dark:text-white">
                  {item.trackingNumber}
                </div>
                <div className="text-black dark:text-white">{item.Date}</div>
              </div>
            ))
          ) : (
            <div className="w-full text-center col-span-4 text-black dark:text-white">
              تراکنشی وجود ندارد
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