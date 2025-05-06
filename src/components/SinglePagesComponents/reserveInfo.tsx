"use client";

import React, { useState, useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { CalendarIcon, Plus, Minus } from "lucide-react";

// Constants
const PRICE_PER_NIGHT = 15000000; // تومان
const DISCOUNT_RATE = 0.15; // ۱۵٪ تخفیف

export default function ReservationForm() {
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);
  const [nights, setNights] = useState<number>(1);
  const [guests, setGuests] = useState<number>(2);

  // Update nights when dates change
  useEffect(() => {
    if (startDate && endDate) {
      const start = startDate.toDate();
      const end = endDate.toDate();
      const diff = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      setNights(diff > 0 ? diff : 1);
    }
  }, [startDate, endDate]);

  const increaseGuests = () => setGuests((g) => Math.min(10, g + 1));
  const decreaseGuests = () => setGuests((g) => Math.max(1, g - 1));

  const priceList = Array.from({ length: nights }, (_, i) => ({
    nights: i + 1,
    price: PRICE_PER_NIGHT * (i + 1),
  }));
  const totalPrice = PRICE_PER_NIGHT * nights;
  const discountedPrice = Math.round(totalPrice * (1 - DISCOUNT_RATE));

  return (
    <div className="relative bg-[#1F1F1F] rounded-xl p-4 text-white w-full max-w-sm mx-auto">
      <h3 className="text-sm font-semibold mb-4 text-center">
        رزرو خونه برای :
      </h3>

      {/* Date Inputs Container */}
      <div className="relative space-y-3 mb-8">
        {/* Start Date */}
        <div className="flex items-center bg-[#2A2A2A] px-3 py-2 rounded-md text-sm">
          <CalendarIcon size={16} className="text-[#A1A1A1] ml-2" />
          <DatePicker
            value={startDate}
            onChange={(date: DateObject | null) => setStartDate(date)}
            calendar={persian}
            locale={persian_fa}
            format="YYYY/MM/DD"
            inputClass="bg-transparent text-white placeholder-[#A1A1A1] focus:outline-none w-full"
            calendarPosition="bottom-center"
          />
        </div>

        {/* End Date */}
        <div className="flex items-center bg-[#2A2A2A] px-3 py-2 rounded-md text-sm">
          <CalendarIcon size={16} className="text-[#A1A1A1] ml-2" />
          <DatePicker
            value={endDate}
            onChange={(date: DateObject | null) => setEndDate(date)}
            calendar={persian}
            locale={persian_fa}
            format="YYYY/MM/DD"
            inputClass="bg-transparent text-white placeholder-[#A1A1A1] focus:outline-none w-full"
            calendarPosition="bottom-center"
          />
        </div>

        {/* Nights Badge Overlap */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/3 bg-[#6D6BF3] text-white text-xs font-bold px-4 py-2 rounded-lg">
          {nights} شب
        </div>
      </div>

      {/* Guests */}
      <div className="mb-4">
        <label className="block text-sm mb-2">تعداد مسافران:</label>
        <div className="flex items-center justify-between bg-[#2A2A2A] px-3 py-2 rounded-md text-sm">
          <button onClick={decreaseGuests}>
            <Minus size={18} />
          </button>
          <span className="text-white">{guests} نفر</span>
          <button onClick={increaseGuests}>
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Price List */}
      <div className="mb-4">
        <div className="px-4 py-2 bg-[#2A2A2A] rounded-t-md text-xs font-medium">
          قیمت‌های رزرو
        </div>
        <div className="bg-[#1F1F1F] px-4 py-3 rounded-b-md text-xs space-y-2">
          {priceList.map(({ nights, price }) => (
            <div key={nights} className="flex justify-between">
              <span>{nights} شب</span>
              <span>{price.toLocaleString()} تومان</span>
            </div>
          ))}
        </div>
      </div>

      {/* Total & Discount */}
      <div className="mb-4 px-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-[#FF5454] text-white text-[10px] font-bold px-2 py-1 rounded">
            %{Math.round(DISCOUNT_RATE * 100)}
          </span>
          <span className="text-xs line-through text-[#A1A1A1]">
            {totalPrice.toLocaleString()} تومان
          </span>
        </div>
        <div className="text-sm font-bold text-[#6DFB8A]">
          {discountedPrice.toLocaleString()} تومان
        </div>
      </div>

      {/* Reserve Button */}
      <button className="w-full bg-[#6FDF4E] text-black font-semibold py-2 rounded-lg text-sm">
        همین الان رزرو کن ←
      </button>
    </div>
  );
}
