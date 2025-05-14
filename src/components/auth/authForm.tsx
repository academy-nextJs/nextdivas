// components/auth/AuthForm.tsx
"use client";

import { useState, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import searchIcon from "@/assets/image/search.png";
import { Stepper } from "@/components/auth/stepper";
import { ModeToggle } from "@/components/auth/modeToggle";
import { SocialButton } from "@/components/auth/socialButton";
import FullPageSkeleton from "@/components/skeletons/LoginSkeleton";
import { loginAction } from "@/app/actions/login-action";
import { registerAction } from "@/app/actions/register-action";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [showSkeleton, setShowSkeleton] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data: any) => {
    setError("");

    startTransition(async () => {
      try {
        if (mode === "login") {
          const res = await loginAction({
            email: data.loginEmail,
            password: data.loginPassword,
          });
          if (!res.success) throw new Error(res.message);
        } else {
          const result = await registerAction(step, {
            ...data,
            email: getValues("regEmail"), // حفظ ایمیل در step3
          });

          if (!result.success) throw new Error(result.message);

          if (step < 3) setStep((prev) => prev + 1);
        }
      } catch (err: any) {
        setError(err.message || "خطا در عملیات");
      }
    });
  };

  if (!showSkeleton || isPending) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FullPageSkeleton />
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-8 space-y-4"
      >
        <p className="text-sm text-right font-medium text-white">
          به خانواده دلتا خوش اومدی
        </p>
        <p className="text-sm text-right font-light text-lime-100">
          با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از
          پروژه‌هاتون خبر بگیرید
        </p>
      </motion.div>

      {/* سوییچ بین ورود و ثبت‌نام */}
      <div className="mt-6">
        <ModeToggle
          mode={mode}
          onChange={(m) => {
            setMode(m);
            setStep(1);
          }}
        />
      </div>

      {/* ورود با شبکه اجتماعی */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <SocialButton
          icon={<img src={searchIcon.src} alt="Google" loading="lazy" />}
        >
          ورود با گوگل
        </SocialButton>
        <SocialButton
          icon={
            <svg className="h-5 w-5" fill="currentColor">
              <path d="..." />
            </svg>
          }
        >
          ورود با اپل
        </SocialButton>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="relative mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-[#232323] px-2 text-white">یا می‌تونید</span>
        </div>
      </motion.div>

      {/* فرم */}
      <AnimatePresence mode="wait">
        <motion.form
          key={`${mode}-${step}`}
          className="space-y-6 mt-6"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Stepper
            mode={mode}
            step={step}
            register={register}
            errors={errors}
          />

          {error && (
            <p className="text-red-500 text-xs font-bold text-center mt-3">
              {error}
            </p>
          )}

          <motion.button
            type="submit"
            className="w-full rounded-xl bg-[#8CFF45] py-3 text-white font-medium text-sm"
            whileTap={{ scale: 0.98 }}
          >
            {mode === "login" ? "ورود" : step < 3 ? "مرحله بعد" : "ثبت نام"}
          </motion.button>
        </motion.form>
      </AnimatePresence>
    </>
  );
}
