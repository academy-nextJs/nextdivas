"use client";
import CardWrapper from "@/components/mortgage/CardWrapper";
import React, { useState, useEffect } from "react";
import { getHousesWithFilters } from "@/utils/service/api/MortgageAndHouseRent";
import { ClipLoader } from "react-spinners";
import SearchIcon from "../../../../public/icons/search.png"
import CoinIcon from "../../../../public/icons/usd-circle 1.png"
import HouseIcon from "../../../../public/icons/house-building 1.png"
import FilterIcon from "../../../../public/icons/bars-filter (1) 1.png"
import LocationIcon from "../../../../public/icons/marker 1.png"
import Image from "next/image";

export default function MortgageAndHouseRent() {
  const [advertisementCount, setAdvertisementCount] = useState(0);
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // استیت برای تمام فیلترها
  const [filters, setFilters] = useState({
    search: "",
    transactionType: "",
    propertyType: "",
    sortBy: "",
    location: "",
    minMortgage: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    minRooms: "",
    maxRooms: "",
  });

  // فراخوانی API با تغییر فیلترها یا صفحه
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getHousesWithFilters(
        filters.transactionType,
        filters.propertyType,
        filters.sortBy,
        filters.location,
        filters.search,
        filters.minMortgage,
        filters.maxPrice,
        filters.minArea,
        filters.maxArea,
        currentPage.toString()
      );
      setCardsData(data);
      setAdvertisementCount(data.length);
      setLoading(false);
    };

    fetchData();
  }, [filters, currentPage]);

  // محاسبه تعداد صفحات و داده‌های صفحه فعلی
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = cardsData.slice(startIndex, startIndex + itemsPerPage);

  // مدیریت تغییرات فیلترها
  const handleFilterChange = (e : any) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // بازگشت به صفحه اول با تغییر فیلتر
  };

  // بررسی اینکه آیا فیلتری فعال است یا نه
  const isFilterActive = Object.values(filters).some((value) => value !== "");

  // تابع برای ریست کردن فیلترها
  const resetFilters = () => {
    setFilters({
      search: "",
      transactionType: "",
      propertyType: "",
      sortBy: "",
      location: "",
      minMortgage: "",
      maxPrice: "",
      minArea: "",
      maxArea: "",
      minRooms: "",
      maxRooms: "",
    });
    setCurrentPage(1); // بازگشت به صفحه اول
  };

  return (
    <div className="relative">
      {/* لودینگ */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      )}

      <form className="space-y-6">
        <div className="md:h-auto h-[200vh] bg-[#232323] text-white flex items-start md:items-center justify-center">
          <div className="w-[95.5%] h-full flex flex-wrap content-start">
            {/* بخش فیلترهای اولیه */}
            <div className="w-full mt-44 h-auto md:h-[85px] bg-[#303030] flex flex-wrap md:flex-nowrap rounded-3xl">
              <div className="w-full md:w-[15%] h-auto md:h-full flex justify-center items-center">
                <div className="w-[170px] rounded-2xl h-[55px] border border-white flex items-center justify-center gap-2">
                  <p>{advertisementCount}</p> <span>: تعداد آگهی</span>
                </div>
              </div>
              <div className="w-full sm:w-[85%] h-auto md:h-full p-3 flex flex-col sm:flex-wrap gap-4 items-center">
                {/* اینپوت جستجو */}
                <div className="relative rounded-2xl border text-white border-gray-300 flex justify-center gap-2.5 items-center w-[335px]">
                  <Image src={SearchIcon} alt="SearchIcon" />
                  <span className="text-[#AAAAAA]">|</span>
                  <input
                    type="text"
                    name="search"
                    placeholder=".....نام هتل مورد نظر"
                    value={filters.search}
                    onChange={handleFilterChange}
                    className="peer outline-none block w-[85%] h-full  px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent"
                  />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : جستجو
                  </label>
                </div>

                {/* سلکشن نوع معامله */}
                <div className="relative rounded-2xl border text-white border-gray-300 flex justify-center gap-1 items-center w-[200px]">
                  <select
                    name="transactionType"
                    value={filters.transactionType}
                    onChange={handleFilterChange}
                    className="peer block w-[85%] outline-none h-[52px] px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none"
                  >
                    <option value="" disabled hidden>
                      انتخاب کنید...
                    </option>
                    <option defaultChecked value="mortgage" className="text-right">رهن</option>
                    <option value="rental" className="text-right">اجاره</option>
                    <option value="reservation" className="text-right">رزرو</option>
                    <option value="direct_purchase" className="text-right">خرید مستقیم</option>
                  </select>
                  <Image className="mt-1" src={CoinIcon} alt="CoinIcon" />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : نوع معامله
                  </label>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* سلکشن نوع ملک */}
                <div className="relative rounded-2xl border text-white border-gray-300 flex justify-center gap-1 items-center w-[200px]">
                  <select
                    name="propertyType"
                    value={filters.propertyType}
                    onChange={handleFilterChange}
                     className="peer block w-[85%] outline-none h-[52px] px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none"
                  >
                    <option value="" disabled hidden>
                      انتخاب کنید...
                    </option>
                    <option value="hotel" className="text-right">هتل</option>
                    <option value="apartment" className="text-right">آپارتمان</option>
                    <option value="villa" className="text-right">ویلا</option>
                  </select>
                  <Image className="mt-1" src={HouseIcon} alt="CoinIcon" />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : نوع ملک
                  </label>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* سلکشن مرتب‌سازی بر اساس */}
                <div className="relative rounded-2xl border text-white border-gray-300 flex justify-center gap-1 items-center w-[200px]">
                  <select
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={handleFilterChange}
                     className="peer block w-[85%] outline-none h-[52px] px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none "
                  >
                    <option value="" disabled hidden>
                      انتخاب کنید...
                    </option>
                    <option value="price-asc" className="text-right">قیمت (صعودی)</option>
                    <option value="price-desc" className="text-right">قیمت (نزولی)</option>
                    <option value="date" className="text-right">تاریخ</option>
                  </select>
                  <Image className="mt-1" src={FilterIcon} alt="CoinIcon" />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : مرتب سازی بر اساس
                  </label>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* سلکشن محل مورد نظر */}
                <div className="relative rounded-2xl border text-white border-gray-300 flex justify-center gap-1 items-center w-[200px]">
                  <select
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="peer block w-[85%] outline-none h-[52px] px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none "
                  >
                    <option value="" disabled hidden>
                      انتخاب کنید...
                    </option>
                    <option value="گیلان" className="text-right">گیلان</option>
                    <option value="تهران" className="text-right">تهران</option>
                    <option value="مشهد" className="text-right">مشهد</option>
                    <option value="اصفهان" className="text-right">اصفهان</option>
                  </select>
                  <Image className="mt-1" src={LocationIcon} alt="CoinIcon" />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : محل مورد نظر
                  </label>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* دکمه حذف فیلترها */}
            {isFilterActive && (
              <div className="w-full mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  حذف فیلترها
                </button>
              </div>
            )}

            {/* بخش فیلترهای عددی (زیر کادر اصلی) */}
            <div className="w-full mt-6 h-auto rounded-3xl p-3 flex flex-wrap md:flex-nowrap justify-end gap-4 items-center">
  <div className="relative w-full md:w-[156px]">
    <input
      type="number"
      name="minArea"
      placeholder=" "
      value={filters.minArea}
      onChange={handleFilterChange}
      className="peer block w-full h-[52px] rounded-2xl border border-gray-300 px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-white placeholder-transparent"
    />
    <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-white">
      : حداقل متراژ
    </label>
  </div>
  <div className="relative w-full md:w-[156px]">
    <input
      type="number"
      name="maxArea"
      placeholder=" "
      value={filters.maxArea}
      onChange={handleFilterChange}
      className="peer block w-full h-[52px] rounded-2xl border border-gray-300 px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-white placeholder-transparent"
    />
    <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-white">
      : حداکثر متراژ
    </label>
  </div>
  <span className="hidden md:inline">|</span>
  <div className="relative w-full md:w-[156px]">
    <input
      type="number"
      name="minRooms"
      placeholder=" "
      value={filters.minRooms}
      onChange={handleFilterChange}
      className="peer block w-full h-[52px] rounded-2xl border border-gray-300 px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-white placeholder-transparent"
    />
    <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-white">
      : حداقل اتاق‌ها
    </label>
  </div>
  <div className="relative w-full md:w-[156px]">
    <input
      type="number"
      name="maxRooms"
      placeholder=" "
      value={filters.maxRooms}
      onChange={handleFilterChange}
      className="peer block w-full h-[52px] rounded-2xl border border-gray-300 px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-white placeholder-transparent"
    />
    <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-white">
      : حداکثر اتاق‌ها
    </label>
  </div>
  <span className="hidden md:inline">|</span>
  <div className="relative w-full md:w-[156px]">
    <input
      type="number"
      name="minMortgage"
      placeholder=" "
      value={filters.minMortgage}
      onChange={handleFilterChange}
      className="peer block w-full h-[52px] rounded-2xl border border-gray-300 px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-white placeholder-transparent"
    />
    <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-white">
      : حداقل رهن
    </label>
  </div>
  <div className="relative w-full md:w-[156px]">
    <input
      type="number"
      name="maxPrice"
      placeholder=" "
      value={filters.maxPrice}
      onChange={handleFilterChange}
      className="peer block w-full h-[52px] rounded-2xl border border-gray-300 px-3 pt-5 pb-2 text-sm text-right shadow-sm bg-transparent text-white placeholder-transparent"
    />
    <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-white">
      : حداکثر قیمت
    </label>
  </div>
</div>

            <span className="mt-6 w-full h-[0.2px] border border-[#4E4E4E]"></span>

            {/* بخش کارت‌ها با گرید ریسپانسیو */}
            <div className="w-full p-3 md:pt-28 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CardWrapper cardsData={currentCards} />
              </div>

              {/* بخش صفحه‌بندی */}
              {cardsData.length > 0 && (
                <div className="flex justify-center items-center mt-8 gap-4">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-[#303030] text-white rounded-lg disabled:opacity-50"
                  >
                    قبلی
                  </button>
                  <span className="text-gray-400">
                    صفحه {currentPage} از {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-[#303030] text-white rounded-lg disabled:opacity-50"
                  >
                    بعدی
                  </button>
                </div>
              )}

              {/* بخش اطلاعات اضافی */}
              <div className="mt-8 text-center text-gray-400 text-sm">
                <p>کل آگهی‌ها: {advertisementCount}</p>
                <p>نمایش {currentCards.length} از {cardsData.length} آگهی</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}