"use client";

import ButtonComponent from "../common/button";
import star from "../../../public/icons/Star.png";
import hotel from "../../../public/icons/greenhotel.png";
import peaple from "../../../public/icons/peaple.png";
import tik from "../../../public/icons/tik.png";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarClock, LuTicket } from "react-icons/lu";
import PassengerForm from "./PassengerForm";

import { motion } from "framer-motion";
import Image from "next/image";
import { FormInput } from "../auth/formInput";
import { useForm, FieldErrors } from "react-hook-form";
import ReserveBreadcrumb from "./ReserveBreadcrumb";

const PassengerInfo = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="grid gap-10">
      <ReserveBreadcrumb
        color1="fill-primary"
        color2="fill-white"
        color3="fill-[#AAAAAA]"
        color4="fill-[#AAAAAA]"
        color5="fill-[#AAAAAA]"
        cid={2}
      />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex max-md:flex-col justify-center items-center w-full text-white/50 bg-gray p-4 rounded-[25px] mx-auto "
      >
        <div className="flex flex-col justify-start items- gap-5 pr-16 max-xl:pr-8 max-lg:pr-2 max-md:w-full max-md:items-end">
          <div className="flex gap-2">
            <p className="text-2xl max-xl:text-sm font-bold text-primary">
              {" "}
              ت 15000000{" "}
            </p>
            <p className="rounded-full max-xl:text-sm bg-danger px-2 inset-shadow-sm inset-shadow-white/40">
              {" "}
              15%{" "}
            </p>
            <p className="opacity-65 relative max-xl:text-md">
              {" "}
              25000000 ت
              <span className="absolute bottom-2 left-0 w-24 max-lg:w-14 -rotate-6 border-[1.7px] border-neutral-500">
                {""}
              </span>
            </p>
          </div>
          <ButtonComponent
            linke="house-reserve"
            icon={hotel}
            text="تغییر هتل "
            style="border-[1.5px] leading-6 border-primary text-primary w-1/2 justify-self-start max-xl:text-sm"
          />
        </div>

        <div
          className="flex flex-col px-16 max-xl:px-8 max-lg:px-2 h-[110px] border-l-2 max-md:border-none 
        border-l-neutral-500 justify-start items-center max-xl:text-xs max-md:w-full max-md:items-end"
        >
          <p className="flex flex-row-reverse gap-2 max-xl:gap-0.5 mt-5">
            <LuCalendarClock className="mt-1.5 max-xl:mt-0.5" />
            :تاریخ ورود
            <span className="text-primary"> 1404/3/4 - ساعت 5 ب.ظ </span>
          </p>

          <p className="flex flex-row-reverse gap-2 max-xl:gap-0 mt-5">
            <LuCalendarClock className="mt-1.5 max-xl:mt-0.5" />
            :تاریخ خروج
            <span className="text-primary"> ساعت 5 ب.ظ- 1404/3/10</span>
          </p>
        </div>

        <div
          className="flex max-md:flex-col-reverse gap-4 max-xl:gap-2 border-l-2 max-md:border-none
         border-l-neutral-500 pl-16 max-xl:pl-8 max-lg:pl-2 max-md:w-full"
        >
          <div className="grid justify-items-end gap-3 text-white">
            <ButtonComponent
              icon={star}
              text="ستاره5 "
              style="bg-secondary text-sm inset-shadow-sm inset-shadow-white/40 text-white"
            />

            <h2 className="text-2xl max-xl:text-lg font-bold">
              هتل سراوان رشت
            </h2>
            <h3 className="flex max-xl:text-xs">
              <p className="w-full"> رشت خیابان فلان کوجه ی فلانی رشت </p>
              <span className="opacity-65"> :آدرس </span>
              <HiOutlineLocationMarker className="m-1 opacity-65" />
            </h3>
          </div>

          <div className="w-[170px] h-[120px] max-md:w-full max-md:h-[310px] max-sm:h-[200px] max-lg:hidden max-md:block bg-neutral-500 rounded-[25px]">
            {" "}
            image{" "}
          </div>
        </div>
      </motion.div>

      <PassengerForm />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="w-full text-white bg-gray p-2 rounded-[25px] mx-auto "
      >
        <div className="bg-neutral-500 rounded-[17px] flex items-center justify-end p-3">
          <span className="text-primary">
            {" "}
            (ارسال بلیط به ایمیل و شماره همراه دیگر )
          </span>
          ارسال بلیط به دیگری
          <Image src={peaple} alt="icon" className="w-4 h-4 m-1" />
        </div>

        <form
          className="grid grid-cols-2 justify-items-end m-5 gap-4"
          onSubmit={() => ""}
        >
          <ButtonComponent
            text="ثبت اطلاعات"
            style="border-2 border-primary text-primary leading-8 justify-self-start "
            icon={tik}
          />

          <div className="col-span-1 flex gap-5">
            <FormInput
              className=" rounded-full"
              type="text"
              name="firstName"
              label=": نام شما  "
              register={register}
              errors={errors}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />

            <FormInput
              type="text"
              name="lastName"
              label="نام خانوادگی"
              register={register}
              errors={errors}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="w-full text-white p-5 border-2 border-dashed border-white/60 grid grid-cols-2 mx-auto rounded-[25px]"
      >
        <ButtonComponent
          text="تایید و ادامه فرایند"
          style="border-2 border-primary text-primary leading-8 justify-self-start "
          icon={tik}
        />

        <div className="flex flex-row-reverse gap-2 font-semibold text-xl pt-2">
          <LuTicket className="rotate-90 w-6 h-6 " />
          <p> : قیمت بلیط </p>
          <p className="text-primary"> ت 15000000 </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PassengerInfo;
