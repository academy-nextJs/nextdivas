"use client";

import React, { useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function ContactUsPage() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await axios.post("https://delta-project.liara.run/api/contact-us", {
        name: values.name,
        message: values.message,
      });
      alert("پیام با موفقیت ارسال شد!");
      resetForm();
    } catch (error) {
      alert("خطا در ارسال پیام.");
    }
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleInput = () => {
      if (nameRef.current && emailRef.current && messageRef.current) {
        if (nameRef.current.value) {
          nameRef.current.nextElementSibling?.classList.add(
            "-translate-y-9",
            "text-xs",
            "text-[#8CFF45]"
          );
        } else {
          nameRef.current.nextElementSibling?.classList.remove(
            "-translate-y-9",
            "text-xs",
            "text-[#8CFF45]"
          );
        }
        if (emailRef.current.value) {
          emailRef.current.nextElementSibling?.classList.add(
            "-translate-y-9",
            "text-xs",
            "text-[#8CFF45]"
          );
        } else {
          emailRef.current.nextElementSibling?.classList.remove(
            "-translate-y-9",
            "text-xs",
            "text-[#8CFF45]"
          );
        }
        if (messageRef.current.value) {
          messageRef.current.nextElementSibling?.classList.add(
            "-translate-y-9",
            "text-xs",
            "text-[#8CFF45]"
          );
        } else {
          messageRef.current.nextElementSibling?.classList.remove(
            "-translate-y-9",
            "text-xs",
            "text-[#8CFF45]"
          );
        }
      }
    };

    if (nameRef.current && emailRef.current && messageRef.current) {
      nameRef.current.addEventListener("input", handleInput);
      emailRef.current.addEventListener("input", handleInput);
      messageRef.current.addEventListener("input", handleInput);
    }

    return () => {
      if (nameRef.current && emailRef.current && messageRef.current) {
        nameRef.current.removeEventListener("input", handleInput);
        emailRef.current.removeEventListener("input", handleInput);
        messageRef.current.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <div className=" md:h-screen h-[200vh] bg-[#232323] text-white flex items-start md:items-center justify-center">
      <div className="w-full max-w-[1440px] max-h-[385px] p-6">
        <div className="rounded-[20px] p-8 mb-16 flex items-center flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[580px] h-[690px] md:h-full flex justify-around md:justify-center items-center relative">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting, values }) => (
                <Form className="w-full h-[315px] z-30 bg-[#1C1C1C] p-4 rounded-[15px] space-y-6">
                  <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
                    <div className="relative w-full lg:w-1/2 mb-4 lg:mb-0">
                      <Field
                        innerRef={emailRef}
                        type="email"
                        name="email"
                        id="email"
                        className="w-full p-4 bg-[#1C1C1C] border-2 border-white rounded-[15px] text-white text-right pr-10 focus:outline-none peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className={`absolute right-4 top-4 text-gray-400 transition-all duration-300 transform ${
                          values.email
                            ? "-translate-y-9 text-xs text-[#8CFF45]"
                            : "translate-y-0"
                        } peer-focus:-translate-y-9 peer-focus:text-xs peer-focus:text-white`}
                      >
                        : ایمیل شما
                      </label>
                    </div>
                    <div className="relative w-full lg:w-1/2">
                      <Field
                        innerRef={nameRef}
                        type="text"
                        name="name"
                        id="name"
                        className="w-full p-4 bg-[#1C1C1C] border-2 border-white rounded-[15px] text-white text-right pr-10 focus:outline-none peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className={`absolute right-4 top-4 text-gray-400 transition-all duration-300 transform ${
                          values.name
                            ? "-translate-y-9 text-xs text-[#8CFF45]"
                            : "translate-y-0"
                        } peer-focus:-translate-y-9 peer-focus:text-xs peer-focus:text-white`}
                      >
                        : نام و نام خانوادگی
                      </label>
                    </div>
                  </div>
                  <div className="relative">
                    <Field
                      innerRef={messageRef}
                      as="textarea"
                      name="message"
                      id="message"
                      className="w-full p-4 bg-[#1C1C1C] border-2 border-white rounded-[15px] h-32 text-white text-right pr-10 focus:outline-none peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className={`absolute right-4 top-4 text-gray-400 transition-all duration-300 transform ${
                        values.message
                          ? "-translate-y-9 text-xs text-[#8CFF45]"
                          : "translate-y-0"
                      } peer-focus:-translate-y-9 peer-focus:text-xs peer-focus:text-white`}
                    >
                      : پیام شما
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8CFF45] text-black p-4 rounded-[15px] hover:bg-[#8ec16f] transition-all duration-200 font-[600] text-center"
                  >
                    ارسال درخواست
                  </button>
                </Form>
              )}
            </Formik>
            <div className="z-10 rounded-4xl w-[480px] h-[340px] bg-[#2D2D2D] absolute"></div>
            <div className="z-0 rounded-4xl w-[388px] h-[365px] bg-[#3B3B3B] absolute"></div>
          </div>
          <div className="w-full lg:w-1/2 h-full text-center flex flex-col lg:flex-wrap justify-center items-center">
            <h4 className="text-[16px] text-right w-full font-bold mb-4 text-[#8CFF45]">
              ارتباط با ما
            </h4>
            <p dir="rtl" className="text-[32px] w-full text-right">
              هر ساعت از شبانه روز که باشه ، <b dir="ltr">!ما کنارتیم</b>
            </p>
            <p className="text-[12px] mt-[34px] w-full text-right">
              هر ساعت از شبانه روز که باشه تیم پشتیبانی دلتا پاسخگوی سوالات و
              انتقادات شما هستند تا در اسرع وقت مشکلتان را حل کنیم !
            </p>
            <div dir="rtl" className="flex flex-col lg:flex-wrap justify-end w-full">
              <div className="mt-[36px] w-full lg:w-[340px] h-[50px] bg-[#303030] content-center rounded-2xl">
                <p className="mb-2 text-gray-300">09229167194 - 098541612310</p>
              </div>
              <div className="mt-[24px] w-full lg:w-[340px] h-[50px] bg-[#303030] content-center rounded-2xl">
                <p className="mb-2 text-gray-300">Delta@gmail.com</p>
              </div>
              <div className="mt-[24px] w-full lg:w-[340px] h-[50px] bg-[#303030] content-center rounded-2xl">
                <p className="mb-2 text-[13px] text-gray-300">
                  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}