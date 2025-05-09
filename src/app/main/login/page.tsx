"use client";

import React, { useState, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import myPhoto2 from "../../assets/image/login2.png";
import search from "../../assets/image/search.png";
import {
  serverLogin,
  serverStartRegistration,
  serverVerifyEmail,
  serverCompleteRegistration,
} from "../../../utils/service/api/auth/server-auth";
import FullPageSkeleton from "../../../components/skeletons/LoginSkeleton";

export default function Login() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [showSkeleton, setShowSkeleton] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
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
          await new Promise((r) => setTimeout(r, 500));
          await serverLogin({
            email: data.loginEmail,
            password: data.loginPassword,
          });
        } else if (step === 1) {
          await new Promise((r) => setTimeout(r, 500));
          await serverStartRegistration({ email: data.regEmail });
          setStep(2);
        } else if (step === 2) {
          await new Promise((r) => setTimeout(r, 500));
          await serverVerifyEmail({ email: data.regEmail, code: data.regCode });
          setStep(3);
        } else {
          await new Promise((r) => setTimeout(r, 500));
          await serverCompleteRegistration({
            email: data.regEmail,
            phone: data.regPhone,
            password: data.regPassword,
          });
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
    <div className="flex min-h-full bg-[#232323]">
      <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-20">
        <motion.img
          key={mode}
          src={myPhoto2.src}
          alt="عکس من"
          loading="lazy"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mt-8 space-y-4">
            {/* Header Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm text-right font-medium text-white">
                به خانواده دلتا خوش اومدی
              </p>
              <p className="text-sm text-right font-light text-lime-100">
                با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از
                پروژه‌هاتون خبر بگیرید
              </p>
            </motion.div>

            {/* Mode Toggle */}
            <motion.div className="flex bg-[#303030] rounded-2xl py-1.5" layout>
              <motion.button
                onClick={() => {
                  setMode("login");
                  setStep(1);
                }}
                className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-xl ${
                  mode === "login"
                    ? "text-white bg-[#8CFF45]"
                    : "text-white hover:bg-[#8CFF45]"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                ورود به حساب کاربری
              </motion.button>
              <motion.button
                onClick={() => {
                  setMode("register");
                  setStep(1);
                }}
                className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-xl ${
                  mode === "register"
                    ? "text-white bg-[#8CFF45]"
                    : "text-white hover:bg-[#8CFF45]"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                ساخت حساب کاربری
              </motion.button>
            </motion.div>

            {/* Social Buttons */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <motion.button
                className="inline-flex w-full justify-center items-center gap-2 rounded-2xl border bg-white py-2 px-4 text-sm font-medium shadow-sm transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img src={search.src} alt="Google" loading="lazy" /> ورود با
                گوگل {/* lazy load برای این تصویر */}
              </motion.button>
              <motion.button
                className="inline-flex w-full justify-center items-center gap-2 rounded-2xl border bg-white py-2 px-4 text-sm font-medium shadow-sm transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>{" "}
                ورود با اپل
              </motion.button>
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
                <span className="bg-[#232323] px-2 text-white">
                  یا می‌تونید
                </span>
              </div>
            </motion.div>

            {/* Form */}
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
                {mode === "login" ? (
                  <>
                    <div className="flex gap-3">
                      <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <input
                          type="email"
                          {...register("loginEmail", { required: true })}
                          placeholder=" "
                          className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                        />
                        <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                          ایمیل
                        </label>
                      </motion.div>
                      <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <input
                          type="password"
                          {...register("loginPassword", { required: true })}
                          placeholder=" "
                          className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                        />
                        <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                          پسورد
                        </label>
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    {/* Register Steps */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <input
                          type="email"
                          {...register("regEmail", { required: true })}
                          placeholder=" "
                          className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                        />
                        <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                          ایمیل
                        </label>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <input
                          type="text"
                          {...register("regCode", { required: true })}
                          placeholder=" "
                          className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                        />
                        <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                          کد تایید
                        </label>
                      </motion.div>
                    )}
                    {step === 3 && (
                      <div className="flex gap-3">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full"
                        >
                          <input
                            type="text"
                            {...register("regPhone", { required: true })}
                            placeholder=" "
                            className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                          />
                          <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                            شماره تماس
                          </label>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full"
                        >
                          <input
                            type="password"
                            {...register("regPassword", { required: true })}
                            placeholder=" "
                            className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                          />
                          <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                            پسورد
                          </label>
                        </motion.div>
                      </div>
                    )}
                  </>
                )}

                {error && (
                  <p className="text-red-500 text-xs font-bold text-center mt-3">
                    {error}
                  </p>
                )}

                <div className="mt-4 flex gap-4">
                  <motion.button
                    type="submit"
                    className="w-full rounded-xl bg-[#8CFF45] py-3 text-white font-medium text-sm"
                    whileTap={{ scale: 0.98 }}
                  >
                    {mode === "login" ? "ورود" : "ثبت نام"}
                  </motion.button>
                </div>
              </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
