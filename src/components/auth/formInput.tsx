// components/FormInput.tsx
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormInputProps extends HTMLMotionProps<"div"> {
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  className?: string; // برای اضافه کردن کلاس دلخواه
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  label,
  register,
  errors,
  className = "",
  ...motionProps
}) => (
  <motion.div className={`relative peer ${className}`} {...motionProps}>
    <input
      type={type}
      {...register(name, { required: true })}
      placeholder=" "
      className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
    />
    <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
      {label}
    </label>
    {errors?.[name] && (
      <p className="text-red-500 text-xs mt-1">وارد کردن {label} الزامی است</p>
    )}
  </motion.div>
);
