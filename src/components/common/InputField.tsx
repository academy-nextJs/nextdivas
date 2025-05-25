import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface InputFieldProps extends HTMLMotionProps<"div"> {
  type: string;
  icon?: React.ReactNode;
  name: string;
  label: string;
  inputStyle?: string;
  lableStyle?: string;
  register: UseFormRegister<any> | undefined;
  errors?: FieldErrors<any>;
  placeholderText?: string;
  options?: { value: string; label: string }[];
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  icon,
  name,
  label,
  inputStyle,
  lableStyle,
  register,
  errors,
  options,
  placeholderText,
  ...motionProps
}) => {
  return (
    <motion.div className="group relative" {...motionProps}>
      {type === "select" ? (
        <>
          <select
            {...(register ? register(name, { required: true }) : {})}
            className={`appearance-none bg-transparent peer grid pl-10 border-2 border-gray-500 focus:outline-0 focus:border-white shadow-sm ${inputStyle}`}
          >
            {options?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-white text-black text-right"
              >
                {option.label}
              </option>
            ))}
          </select>
          {icon && <span className="absolute top-3 left-0">{icon}</span>}
          <label
            className={`absolute right-3 -top-2.5 px-1 text-xs text-gray-500 ${lableStyle}`}
          >
            {label}
          </label>
        </>
      ) : (
        <>
          <input
            {...(register ? register(name, { required: true }) : {})}
            type={type}
            placeholder={placeholderText}
            className={`appearance-none bg-transparent peer w-full border-2 border-gray-500 focus:outline-0 focus:border-white shadow-sm ${inputStyle}`}
          />

          <label
            className={`"absolute right-3 -top-2.5 px-1 text-xs text-gray-500" ${lableStyle}`}
          >
            {label}
          </label>
          {errors?.[name] && (
            <p className="text-red-500 text-xs mt-1">
              وارد کردن {label} الزامی است
            </p>
          )}
        </>
      )}
    </motion.div>
  );
};

export default InputField;
