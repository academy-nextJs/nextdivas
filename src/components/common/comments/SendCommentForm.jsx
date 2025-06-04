import React, { useState } from "react";
import { motion } from "framer-motion";
// import Image from "next/image"; // اگر از Next.js استفاده نمی‌کنید می‌تونید از <img> معمولی استفاده کنید
// import FilterIcon from "../assets/icons/filter.png"; // مسیر صحیح آیکون را وارد کن

function SendCommentForm() {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    rating: "",
  });

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="w-full gap-2 h-auto flex flex-wrap md:flex-nowrap items-center justify-center p-3">
        {/* حداقل قیمت */}
        <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-2.5 items-center w-[180px] sm:w-[200px] h-[40px]">
          <input
            type="text"
            name="minPrice"
            placeholder="حداقل قیمت"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="peer outline-none block w-[85%] h-full px-3 text-sm text-right shadow-sm bg-transparent"
          />
          <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
            : حداقل قیمت
          </label>
        </div>

        {/* حداکثر قیمت */}
        <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-2.5 items-center w-[180px] sm:w-[200px] h-[40px]">
          <input
            type="text"
            name="maxPrice"
            placeholder="حداکثر قیمت"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="peer outline-none block w-[85%] h-full px-3 text-sm text-right shadow-sm bg-transparent"
          />
          <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
            : حداکثر قیمت
          </label>
        </div>

        {/* امکانات / ستاره */}
        <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-1 items-center w-[180px] sm:w-[200px] h-[40px]">
          <select
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
            className="peer block w-[85%] outline-none h-full px-3 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none"
          >
            <option value="" disabled hidden>
              انتخاب کنید...
            </option>
            <option value="1" className="text-right">
              ۱ ستاره
            </option>
            <option value="2" className="text-right">
              ۲ ستاره
            </option>
            <option value="3" className="text-right">
              ۳ ستاره
            </option>
            <option value="4" className="text-right">
              ۴ ستاره
            </option>
            <option value="5" className="text-right">
              ۵ ستاره
            </option>
          </select>
          {/* 
          <Image
            className="mt-1"
            src={FilterIcon}
            alt="FilterIcon"
            width={16}
            height={16}
          /> */}

          <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
            امکانات هتل :
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

        {/* دکمه اشتراک‌گذاری */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsShareModalOpen(true)}
          className="bg-blue-600 text-white w-[120px] h-[40px] px-4 py-2 rounded-lg text-sm"
        >
          اشتراک‌گذاری
        </motion.button>
      </div>

      {/* برای تست باز شدن مودال */}
      {isShareModalOpen && (
        <div className="text-white text-sm mt-4">
          مودال اشتراک‌گذاری باز شد!
        </div>
      )}
    </div>
  );
}

export default SendCommentForm;
