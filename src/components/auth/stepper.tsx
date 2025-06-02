// components/Stepper.tsx
import React from "react";
import { motion } from "framer-motion";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import InputField from "../common/InputField";

interface StepperProps {
  mode: "login" | "register";
  step: number;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export const Stepper: React.FC<StepperProps> = ({
  mode,
  step,
  register,
  errors,
}) => {
  if (mode === "login") {
    return (
      <motion.div
        className="grid grid-cols-2 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <InputField
          type="email"
          name="loginEmail"
          label="ایمیل"
          register={register}
          errors={errors}
          placeholderText="ایمیل خود را وارد کنید"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        />
        <InputField
          type="password"
          name="loginPassword"
          label="پسورد"
          register={register}
          errors={errors}
          placeholderText="رمز عبور را وارد کنید"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }

  // حالت ثبت‌نام
  switch (step) {
    case 1:
      return (
        <InputField
          type="email"
          name="registerEmail"
          label="ایمیل"
          register={register}
          errors={errors}
          placeholderText="ایمیل خود را وارد کنید"
          className="w-full"
        />
      );
    case 2:
      return (
        <InputField
          type="text"
          name="verificationCode"
          label="کد تایید"
          register={register}
          errors={errors}
          placeholderText="کد ارسال شده را وارد کنید"
          className="w-full"
        />
      );
    case 3:
      return (
        <div className="flex flex-col sm:flex-row gap-3">
          <InputField
            type="text"
            name="username"
            label="نام کاربری"
            register={register}
            errors={errors}
            placeholderText="یک نام کاربری انتخاب کنید"
            className="w-full"
          />
          <InputField
            type="password"
            name="password"
            label="رمز عبور"
            register={register}
            errors={errors}
            placeholderText="رمز عبور قوی وارد کنید"
            className="w-full"
          />
        </div>
      );
    default:
      return null;
  }
};
