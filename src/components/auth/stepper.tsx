// components/Stepper.tsx
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormInput } from "./formInput";
import { EmailStep } from "./emailStep";
import { CodeStep } from "./codeStep";
import { ProfileStep } from "./profileStep";

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
  // حالت لاگین
  if (mode === "login") {
    return (
      <motion.div
        className="grid grid-cols-2 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FormInput
          type="email"
          name="loginEmail"
          label="ایمیل"
          register={register}
          errors={errors}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        />
        <FormInput
          type="password"
          name="loginPassword"
          label="پسورد"
          register={register}
          errors={errors}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }

  // حالات ثبت‌نام
  switch (step) {
    case 1:
      return <EmailStep register={register} errors={errors} />;
    case 2:
      return <CodeStep register={register} errors={errors} />;
    case 3:
      return (
        <ProfileStep
          register={register}
          errors={errors}
          className="flex gap-3"
        />
      );
    default:
      return null;
  }
};
