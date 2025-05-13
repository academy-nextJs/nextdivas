// components/steps/CodeStep.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { HTMLMotionProps } from "framer-motion";
import { FormInput } from "./formInput";

interface StepProps extends HTMLMotionProps<"div"> {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  className?: string;
}

export const CodeStep: React.FC<StepProps> = ({
  register,
  errors,
  className,
  ...motionProps
}) => (
  <FormInput
    type="text"
    name="regCode"
    label="کد تایید"
    register={register}
    errors={errors}
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    {...motionProps}
  />
);
