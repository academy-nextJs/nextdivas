"use client";
import { useState } from "react";
import { CalendarDays, Minus, Plus } from "lucide-react";

export default function ReserveBox() {
  const [guests, setGuests] = useState(1);

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-2xl w-full max-w-sm text-white space-y-4 shadow-lg">
      <h3 className="text-lg font-semibold">رزرو خونه برای:</h3>

      {/* تاریخ ورود و خروج */}
      <div className="flex items-center justify-between gap-2 bg-[#2A2A2A] p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <CalendarDays size={20} />
          <span className="text-sm">۱۴۰۴/۰۲/۱۲</span>
        </div>
        <span className="text-sm">تا</span>
        <div className="flex items-center gap-2">
          <CalendarDays size={20} />
          <span className="text-sm">۱۴۰۴/۰۲/۱۵</span>
        </div>
      </div>

      {/* تعداد مسافر */}
      <div className="bg-[#2A2A2A] p-3 rounded-xl flex justify-between items-center">
        <span className="text-sm">تعداد مسافران:</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="bg-[#3A3A3A] p-1 rounded-full"
          >
            <Minus size={16} />
          </button>
          <span className="text-sm">{guests}</span>
          <button
            onClick={() => setGuests(guests + 1)}
            className="bg-[#3A3A3A] p-1 rounded-full"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* قیمت‌ها */}
      <div className="bg-[#2A2A2A] p-3 rounded-xl text-sm space-y-1">
        <div className="flex justify-between">
          <span>هر شب:</span>
          <span>۵٬۰۰۰٬۰۰۰ تومان</span>
        </div>
        <div className="flex justify-between font-bold text-lime-400">
          <span>مبلغ کل:</span>
          <span>۱۵٬۰۰۰٬۰۰۰ تومان</span>
        </div>
      </div>

      {/* دکمه رزرو */}
      <button className="w-full bg-lime-400 text-black py-2 rounded-xl font-bold hover:bg-lime-300 transition">
        همین الان رزرو کن
      </button>
    </div>
  );
}
