"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import peaple from "../../../public/icons/peaple.png";
import { PiClockCounterClockwise } from "react-icons/pi";
import { FormInput } from "../auth/formInput";
import { useForm, FieldErrors } from "react-hook-form";

const PassengerForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="w-full text-white bg-gray p-2 rounded-[25px] mx-auto"
    >
      <div className="bg-neutral-500 rounded-[17px] grid grid-cols-2 p-3">
        <div className="text-primary flex">
          انتخاب مسافران سابق
          <PiClockCounterClockwise className="text-xl m-1 " />
        </div>

        <div className="flex justify-self-end">
          مشخصات مسافران
          <Image src={peaple} alt="icon" className="w-4 h-4 m-1" />
        </div>
      </div>

      {/* Form */}
      <AnimatePresence mode="wait">
        <motion.form
          className="flex flex-row-reverse m-5 gap-4"
          onSubmit={() => ""}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
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

          <FormInput
            type="select"
            name="gender"
            label=": جنسیت شما "
            register={register}
            errors={errors}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <FormInput
            type="text"
            name="lastName"
            label=": کد ملی "
            register={register}
            errors={errors}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />

          <FormInput
            type="text"
            name="lastName"
            label=": تاریخ تولد "
            register={register}
            errors={errors}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.form>
      </AnimatePresence>
    </motion.div>
  );
};

export default PassengerForm;
