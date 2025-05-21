// components/steps/ProfileStep.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { HTMLMotionProps, motion } from "framer-motion";
import { FormInput } from "./formInput";

interface ProfileStepProps extends HTMLMotionProps<"div"> {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  className?: string;
}

export const ProfileStep: React.FC<ProfileStepProps> = ({
  register,
  errors,
  className,
  ...motionProps
}) => (
  <motion.div className={className} {...motionProps}>
    <FormInput
      type="text"
      name="regPhone"
      label="شماره تماس"
      register={register}
      errors={errors}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    <FormInput
      type="password"
      name="regPassword"
      label="پسورد"
      register={register}
      errors={errors}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);
