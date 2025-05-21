"use client";
import React, { useState } from "react";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, date: "1404/02/01", message: "رزرو شما با موفقیت ثبت شد", isRead: false },
    { id: 2, date: "1404/02/02", message: "پرداخت شما رد شد", isRead: true },
    { id: 3, date: "1404/02/03", message: "پروفایل شما به‌روزرسانی شد", isRead: false },
    { id: 4, date: "1404/02/04", message: "رزرو جدید ثبت شد", isRead: true },
    { id: 5, date: "1404/02/05", message: "کیف پول شما شارژ شد", isRead: true },
    { id: 6, date: "1404/02/06", message: "اعلان جدید", isRead: false },
    { id: 7, date: "1404/02/07", message: "رزرو شما لغو شد", isRead: true },
    { id: 8, date: "1404/02/08", message: "پرداخت موفق", isRead: false },
  ]);

  const [unreadOpen, setUnreadOpen] = useState(true);
  const [readOpen, setReadOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const unreadItems = announcements.filter((item) => !item.isRead);
  const readItems = announcements.filter((item) => item.isRead);

  // پیجینیشن برای بخش خوانده شده
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReadItems = readItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(readItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const markAsRead = (id) => {
    setAnnouncements(
      announcements.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
  };

  const markAllAsRead = () => {
    setAnnouncements(announcements.map((item) => ({ ...item, isRead: true })));
  };

  return (
    <>
      {/* بخش هد */}
      <div className="w-full flex justify-between items-center border-b-2 border-dashed border-[#88888842] h-[100px]">
        <div className="cursor-pointer w-1/2 gap-5 p-3 flex justify-start items-center">
          <div
            className="w-[320px] h-[50px] p-2 flex justify-center items-center bg-[#8CFF45] rounded-[12px] text-black text-[16px]"
            onClick={markAllAsRead}
          >
            علامت گذاری به عنوان خوانده شده
          </div>
          <div className="relative rounded-2xl border text-black border-gray-300 flex justify-center gap-2.5 items-center w-[165px]">
            <select className="peer dark:text-white border-none rounded-[12px] outline-none block w-full h-full px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent">
              <option value="">همه</option>
            </select>
            <label className="absolute right-3 -top-2.5 bg-white dark:bg-[#3a3a3acc] dark:text-white px-1 text-xs text-black">
              : نوع اعلان
            </label>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-2 p-5">
          <span className="text-[18px] text-black dark:text-white">
            لیست اعلان های شما
          </span>
        </div>
      </div>

      {/* لیست */}
      <div className="flex flex-col justify-center w-full">
        {/* بخش خوانده نشده */}
        <div className="mt-4">
          <div
            className="cursor-pointer p-4 bg-[#F0F0F0] dark:bg-[#555555] rounded-[12px] flex justify-between items-center"
            onClick={() => setUnreadOpen(!unreadOpen)}
          >
            <span className="text-black dark:text-white">{unreadOpen ? "▲" : "▼"}</span>
            <span className="text-black dark:text-white text-[18px]">
              خوانده نشده ({unreadItems.length})
            </span>
          </div>
          {unreadOpen && (
            <>
              <div className="grid items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 text-center rounded-[12px] w-[95%] h-auto sm:h-[50px] bg-[#F0F0F0] dark:bg-[#555555] p-2 mt-2">
                <div className="text-black dark:text-white"></div>
                <div className="text-black text-[20px] dark:text-white text-right">تاریخ</div>
                <div className="text-black text-[20px] dark:text-white text-right">اعلان</div>
              </div>
              <div className="h-auto flex flex-wrap items-start w-full justify-center overflow-auto">
                {unreadItems.length > 0 ? (
                  unreadItems.map((item) => (
                    <div
                      key={item.id}
                      className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 p-2 bg-white dark:bg-[#444444] rounded-[8px] mt-2"
                    >
                      <div className="flex justify-center">
                        <button
                          onClick={() => markAsRead(item.id)}
                          className="w-[214px] h-[22px] flex justify-center items-center rounded-[100px] bg-[#8CFF45] text-black text-[14px] font-medium"
                        >
                          علامت‌گذاری به‌عنوان خوانده شده
                        </button>
                      </div>
                      <div className="text-black dark:text-white text-[18px] text-right">
                        {item.date}
                      </div>
                      <div className="text-black dark:text-white text-[18px] text-right">
                        {item.message}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center col-span-3 text-black dark:text-white mt-2">
                    اعلان خوانده نشده‌ای وجود ندارد
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* بخش خوانده شده */}
        <div className="mt-4">
          <div
            className="cursor-pointer p-4 bg-[#F0F0F0] dark:bg-[#555555] rounded-[12px] flex justify-between items-center"
            onClick={() => setReadOpen(!readOpen)}
          >
            <span className="text-black dark:text-white">{readOpen ? "▲" : "▼"}</span>
            <span className="text-black dark:text-white text-[18px]">
              خوانده شده ({readItems.length})
            </span>
          </div>
          {readOpen && (
            <>
              <div className="grid items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 text-center rounded-[12px] w-[95%] h-auto sm:h-[50px] bg-[#F0F0F0] dark:bg-[#555555] p-2 mt-2">
                <div className="text-black dark:text-white"></div>
                <div className="text-black text-[20px] dark:text-white text-right">تاریخ</div>
                <div className="text-black text-[20px] dark:text-white text-right">اعلان</div>
              </div>
              <div className="h-auto flex flex-wrap items-start w-full justify-center overflow-auto">
                {currentReadItems.length > 0 ? (
                  currentReadItems.map((item) => (
                    <div
                      key={item.id}
                      className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 p-2 bg-white dark:bg-[#444444] rounded-[8px] mt-2"
                    >
                      <div className="text-black dark:text-white"></div>
                      <div className="text-black dark:text-white text-[18px] text-right">
                        {item.date}
                      </div>
                      <div className="text-black dark:text-white text-[18px] text-right">
                        {item.message}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center col-span-3 text-black dark:text-white mt-2">
                    اعلان خوانده شده‌ای وجود ندارد
                  </div>
                )}
              </div>
              {/* پیجینیشن */}
              {readItems.length > 0 && (
                <div className="w-full h-[450px] flex justify-center items-center gap-4 mt-4">
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
                      className={`px-3 py-2 ${
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
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}