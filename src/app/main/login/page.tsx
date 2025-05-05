// File: app/components/Login.tsx
"use client";
import { useState } from "react";
import myPhoto2 from "../../assets/image/login2.png";
import search from "../../assets/image/search.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerAction } from "@/app/actions/authActions";
import { loginAction } from "@/app/actions/loginAction";

export default function Login() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const loginSchema = Yup.object({
    email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: Yup.string().required("رمز عبور الزامی است"),
  });

  const registerSchemas = [
    Yup.object({
      email: Yup.string()
        .email("ایمیل نامعتبر است")
        .required("ایمیل الزامی است"),
    }),
    Yup.object({
      code: Yup.string().required("کد تأیید الزامی است"),
    }),
    Yup.object({
      phone: Yup.string().required("شماره تماس الزامی است"),
      password: Yup.string()
        .min(6, "رمز باید حداقل 6 کاراکتر باشد")
        .required("رمز عبور الزامی است"),
    }),
  ];

  return (
    <>
      <div className="flex min-h-full bg-[#232323]">
        <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-20">
          <img src={myPhoto2.src} alt="عکس من" />
        </div>
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mt-8">
              <p className="text-sm text-right leading-12 font-medium text-white">
                به خانواده دلتا خوش اومدی
              </p>
              <p className="text-sm leading-8 text-right font-light text-lime-100">
                با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از
                پروژه‌هاتون خبر بگیرید
              </p>

              <div className="flex bg-[#303030] my-6 py-1.5 rounded-2xl">
                <button
                  onClick={() => setMode("login")}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-xl ${
                    mode === "login"
                      ? "text-white bg-[#8CFF45]"
                      : "text-white hover:bg-[#8CFF45]"
                  }`}
                >
                  ورود به حساب کاربری
                </button>
                <button
                  onClick={() => {
                    setMode("register");
                    setStep(1);
                  }}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-xl ${
                    mode === "register"
                      ? "text-white bg-[#8CFF45]"
                      : "text-white hover:bg-[#8CFF45]"
                  }`}
                >
                  ساخت حساب کاربری
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button className="inline-flex w-full justify-center items-center gap-2 rounded-2xl border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">
                  <img src={search.src} alt="Google" />
                  ورود با حساب گوگل
                </button>
                <button className="inline-flex w-full justify-center items-center gap-2 rounded-2xl border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="..." />
                  </svg>
                  ورود با حساب اپل
                </button>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className=" bg-[#232323] px-2 text-white">
                    یا می‌تونید
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    code: "",
                    phone: "",
                  }}
                  validationSchema={
                    mode === "login" ? loginSchema : registerSchemas[step - 1]
                  }
                  onSubmit={async (
                    values,
                    { setSubmitting, setFieldError }
                  ) => {
                    setSubmitting(true);

                    if (mode === "login") {
                      try {
                        const res = await loginAction(values); // باید جداگانه بنویسی
                        if (!res.success) {
                          setFieldError("email", res.message || "خطا در ورود");
                        }
                      } catch (err: any) {
                        setFieldError(
                          "email",
                          err.message || "خطایی رخ داده است"
                        );
                      } finally {
                        setSubmitting(false);
                      }
                    } else {
                      // ثبت‌نام مرحله‌ای
                      const result = await registerAction(step, values);

                      if (result.success) {
                        if (step === 1) {
                          // ایمیل رو نگه دار برای مرحله ۳
                          values.email = values.email;
                        }

                        if (step < 3) {
                          nextStep();
                        } else {
                          // نهایی‌سازی
                          console.log("ثبت‌نام کامل شد:", result);
                        }
                      } else {
                        // نمایش خطای سمت سرور
                        const errorField =
                          step === 1
                            ? "email"
                            : step === 2
                            ? "code"
                            : "password";
                        setFieldError(
                          errorField,
                          result.message || "خطا در ثبت‌نام"
                        );
                      }

                      setSubmitting(false);
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-6">
                      {mode === "login" && (
                        <div className="flex gap-3">
                          <div className="relative w-full">
                            <Field
                              type="email"
                              name="email"
                              placeholder=" "
                              className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                            />
                            <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                              ایمیل
                            </label>
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                          <div className="relative w-full">
                            <Field
                              type="password"
                              name="password"
                              placeholder=" "
                              className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                            />
                            <label className="absolute right-3 -top-2.5 bg-[#232323] px-1 text-xs text-gray-500">
                              پسوورد
                            </label>
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                        </div>
                      )}

                      {mode === "register" && (
                        <>
                          {step === 1 && (
                            <div className="relative">
                              <Field
                                type="email"
                                name="email"
                                placeholder=" "
                                className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                              />
                              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-gray-500">
                                ایمیل
                              </label>
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                              />
                            </div>
                          )}
                          {step === 2 && (
                            <div className="relative">
                              <Field
                                type="text"
                                name="code"
                                placeholder=" "
                                className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                              />
                              <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-gray-500">
                                کد تایید
                              </label>
                              <ErrorMessage
                                name="code"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                              />
                            </div>
                          )}
                          {step === 3 && (
                            <div className="flex gap-3">
                              <div className="relative w-full">
                                <Field
                                  type="tel"
                                  name="phone"
                                  placeholder=" "
                                  className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                                />
                                <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-gray-500">
                                  شماره تماس
                                </label>
                                <ErrorMessage
                                  name="phone"
                                  component="div"
                                  className="text-red-500 text-xs mt-1"
                                />
                              </div>
                              <div className="relative w-full">
                                <Field
                                  type="password"
                                  name="password"
                                  placeholder=" "
                                  className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm"
                                />
                                <label className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-gray-500">
                                  رمز عبور
                                </label>
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="text-red-500 text-xs mt-1"
                                />
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            if (mode === "register" && step > 1) {
                              prevStep();
                            } else {
                              setMode("login");
                            }
                          }}
                          className="text-sm text-gray-500"
                        >
                          بازگشت
                        </button>

                        {mode === "register" && step < 3 ? (
                          <button
                            type="button"
                            onClick={nextStep}
                            className="bg-[#8CFF45] text-white px-4 py-2 rounded"
                          >
                            مرحله بعد
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="bg-[#8CFF45] text-white px-4 py-2 rounded"
                            disabled={isSubmitting}
                          >
                            {mode === "login" ? "ورود" : "ثبت‌نام"}
                          </button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
