"use client";
import React, { useEffect, useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { TbCalendarPlus } from "react-icons/tb";
import { PiInvoiceLight } from "react-icons/pi";
import InputField from "../common/InputField";
import SubmitButton from "../common/SubmitButton";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";

const HeroFillter = ({}) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [searchIN, setSearchIN] = useState("| رزرو ملک");

  const fillter = [
    {
      id: 1,
      title: "خرید و فروش",
      icon: (
        <PiInvoiceLight
          className={`w-5 h-5 group-hover:text-white ${
            searchIN === "خرید و فروش" ? "text-white" : "text-[#8C8C8C]"
          }`}
        />
      ),
    },
    {
      id: 2,
      title: "| رهن و اجاره",
      icon: (
        <BiBuildingHouse
          className={`w-5 h-5 group-hover:text-white ${
            searchIN === "| رهن و اجاره" ? "text-white" : "text-[#8C8C8C]"
          }`}
        />
      ),
    },
    {
      id: 3,
      title: "| رزرو ملک",
      icon: (
        <TbCalendarPlus
          className={`w-5 h-5 group-hover:text-white ${
            searchIN === "| رزرو ملک" ? "text-white" : "text-[#8C8C8C]"
          }`}
        />
      ),
    },
  ];

  return (
    <div className=" mx-auto pt-3 w-[70%] max-2xl:w-[80%] max-xl:w-[95%] max-sm:w-[85%] text-lg max-md:text-sm max-sm:text-xs">
      <div className="flex justify-end items-center gap-4 max-sm:gap-2 mt-10 ">
        {fillter.map((item) => (
          <div
            key={item.id}
            onClick={() => setSearchIN(item.title)}
            className={`group flex items-center gap-2 max-sm:gap-1 max-sm:px-1 pb-2 font-semibold hover:text-white cursor-pointer transition-all duration-300 ease-in-out
            ${searchIN === item.title ? "text-white" : "text-[#8C8C8C]"}
        `}
          >
            {item.title}
            {item.icon}
          </div>
        ))}
      </div>

      <form className="flex max-lg:flex-wrap-reverse justify-end gap-4 max-xl:gap-2 items-center inset-shadow-sm inset-shadow-neutral-600 bg-gray rounded-[36px] p-8 max-xl:p-6">
        <SubmitButton
          text=" جستجو کن "
          style="bg-primary text-gray p-4 text-[14px] font-semibold leading-5"
          icon={<FiSearch className="mt-1" />}
        />

        <InputField
          type="text"
          name="count"
          label=": انتخاب نفرات  "
          register={register}
          errors={errors}
          placeholderText="... وارد کنید "
          inputStyle="rounded-2xl text-white text-right text-[14px] font-semibold p-4"
          lableStyle="absolute bg-gray text-white "
        />

        <InputField
          type="date"
          name="entryDate"
          label=": تاریخ خروج "
          register={register}
          errors={errors}
          placeholderText="... وارد کنید "
          inputStyle="rounded-2xl text-white text-right text-[14px] font-semibold p-4"
          lableStyle="absolute bg-gray text-white "
        />

        <InputField
          type="date"
          name="exitDate"
          label=": تاریخ ورود "
          register={register}
          errors={errors}
          placeholderText="... وارد کنید "
          inputStyle=" rounded-2xl text-white text-right text-[14px] font-semibold appearance-none bg-transparent p-4"
          lableStyle="absolute bg-gray text-white "
        />

        <InputField
          icon={<IoIosArrowDown className="text-white" />}
          type="select"
          name="choose"
          label=": انتخاب ملک"
          register={register}
          errors={errors}
          inputStyle="rounded-2xl text-[14px] font-semibold text-white flex flex-row-reverse text-right p-4"
          lableStyle="absolute bg-gray text-white "
          options={[
            { value: "holder", label: "... استان و اقامتگاه و سفر " },
            { value: "gilan", label: "گیلان" },
            { value: "mazandaran", label: "مازندران" },
            { value: "tehran", label: "تهران" },
            { value: "karaj", label: "کرج" },
            { value: "isfahan", label: "اصفهان" },
            { value: "shiraz", label: "شیراز" },
          ]}
        />
      </form>
    </div>
  );
};

export default HeroFillter;
