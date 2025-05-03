// File: app/components/Login.tsx
"use client";
import { useState } from "react";
import myPhoto from "../../assets/image/login.png";
import myPhoto2 from "../../assets/image/login2.png";
import search from "../../assets/image/search.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mt-8">
              <p className="text-sm leading-12 font-medium text-white">
                به خانواده دلتا خوش اومدی
              </p>
              <p className="text-sm leading-8 font-light text-lime-100">
                با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از
                پروژه‌هاتون خبر بگیرید!
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
                  onSubmit={(values) => {
                    console.log("ارسال شد", values);
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

        <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-10">
          <img src={myPhoto2.src} alt="عکس من" />
        </div>
      </div>

      <div className="relative bg-[#232323] dark:bg-dark py-16 sm:py-24">
        <div className="lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative max-w-md px-6 sm:max-w-3xl lg:px-0 lg:mr-10">
            <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6">
              <p className="text-sm leading-12 font-medium text-lime-50">
                24 ساعت روز و 7 روز هفته در اختیار شماییم !
              </p>
              <p className="text-sm leading-8 font-light text-lime-100">
                تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی
                دارد تا بتواند در تمام لحظات کنار شما باشد .
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  text-lime-100"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-3 rounded-md h-12 bg-[#303030] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-lime-100"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full px-3 text-white rounded-md h-12 bg-[#303030] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-lime-100"
                >
                  Add your comment
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full px-3 text-white rounded-md bg-[#303030] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#8CFF45] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  ارسال فرم
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:py-16 lg:py-0">
            <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-10">
              <img src={myPhoto.src} alt="عکس من" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
