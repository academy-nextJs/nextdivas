// components/steps/EmailStep.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { HTMLMotionProps } from "framer-motion";
import { FormInput } from "./formInput"; // مسیر درست کامپوننت FormInput

interface StepProps extends HTMLMotionProps<"div"> {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  className?: string;
}

export const EmailStep: React.FC<StepProps> = ({
  register,
  errors,
  className,
  ...motionProps
}) => (
  <FormInput
    type="email"
    name="regEmail"
    label="ایمیل"
    register={register}
    errors={errors}
    className={className}
    // انیمیشن و سایر props مربوط به Framer Motion را می‌توان اینجا پاس داد:
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    {...motionProps}
  />
);
