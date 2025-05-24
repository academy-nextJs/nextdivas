import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface InputFieldProps extends HTMLMotionProps<"div"> {
  type: string;
  name: string;
  label: string;
  inputStyle?: string;
  lableStyle?: string;
  register?: any;
  placeholderText?: string;
  options?: { value: string; label: string }[];
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  inputStyle,
  lableStyle,
  options,
  placeholderText,
  ...motionProps
}) => {
  return (
    <motion.div className="group relative" {...motionProps}>
      {type === "select" ? (
        <>
          <select
            className={`border-2 border-gray-500 focus:outline-0 focus:border-white shadow-sm ${inputStyle}`}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label
            className={`"absolute right-3 -top-2.5 px-1 text-xs text-gray-500" ${lableStyle}`}
          >
            {label}
          </label>
        </>
      ) : (
        <>
          <input
            type={type}
            placeholder={placeholderText}
            className={`w-full border-2 border-gray-500 focus:outline-0 focus:border-white shadow-sm ${inputStyle}`}
          />
          <label
            className={`"absolute right-3 -top-2.5 px-1 text-xs text-gray-500" ${lableStyle}`}
          >
            {label}
          </label>
        </>
      )}
    </motion.div>
  );
};

export default InputField;
