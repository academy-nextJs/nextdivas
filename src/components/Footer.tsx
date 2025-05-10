"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import myPhoto2 from "../app/assets/image/login.png";

const navigation = {
  company: [
    { name: "درباره ما", href: "#" },
    { name: "تماس با ما", href: "#" },
  ],
  support: [
    { name: "سوالات متداول", href: "#" },
    { name: "پشتیبانی", href: "#" },
  ],
  solutions: [
    { name: "نحوه رزرو", href: "#" },
    { name: "راهنمای استفاده", href: "#" },
  ],
  social: [
    { name: "اینستاگرام", href: "#", icon: FaInstagram },
    { name: "تلگرام", href: "#", icon: FaTelegram },
    { name: "توییتر", href: "#", icon: FaTwitter },
  ],
};

export default function Footer() {
  return (
    <div className="relative p-14 w-full" aria-labelledby="footer-heading">
      <div className="relative py-14 w-full dark:bg-dark overflow-hidden">
        {/* Mobile background rectangle */}
        <div className="absolute inset-0 bg-[#8CFF45] rounded-2xl lg:hidden"></div>

        {/* SVG background on desktop and above */}
        <svg
          viewBox="0 0 1376 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full z-0 hidden lg:block"
          preserveAspectRatio="none"
        >
          <path
            d="M1118.91 76.3207C1132.93 76.3207 1145.93 68.9783 1153.16 56.969L1175.84 19.3517C1183.07 7.34234 1196.07 0 1210.09 0H1336C1358.09 0 1376 17.9086 1376 40V744C1376 766.091 1358.09 784 1336 784H40C17.9086 784 0 766.091 0 744L0 116.321C0 94.2293 17.9086 76.3207 40 76.3207H1118.91Z"
            fill="#8CFF45"
          />
        </svg>

        <motion.div
          className="relative z-10 p-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6 lg:px-8">
            <div
              className="flex justify-center lg:justify-end mt-8 lg:mt-32"
              dir="rtl"
            >
              <img
                src={myPhoto2.src}
                alt="عکس من"
                className="rounded-xl w-64 sm:w-72 lg:w-[20rem]"
              />
            </div>

            <motion.div
              className="relative w-full max-w-md px-4 sm:px-6 sm:max-w-3xl lg:px-0 lg:ml-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6">
                <p className="text-sm font-bold text-right text-black">
                  ! 24 ساعت روز و 7 روز هفته در اختیار شماییم
                </p>
                <p className="text-sm leading-8 font-medium text-right text-black">
                  تیم دلتا با ارائه بهترین نیروهای خدماتی و سرویس‌های املاکی،
                  سعی دارد تا در تمام لحظات کنار شما باشد.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-right text-black"
                    >
                      نام
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full px-3 h-12 rounded-md bg-[#303030] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="نام شما"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-right text-black"
                    >
                      ایمیل
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full px-3 h-12 rounded-md bg-[#303030] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-right text-black"
                  >
                    متن خود را وارد کنید
                  </label>
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="mt-1 block w-full px-3 rounded-md bg-[#303030] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="پیام شما..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-[#303030] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    ارسال فرم
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray relative z-20 shadow-md rounded-2xl mx-auto max-w-5xl px-6 pb-4 sm:pt-24 lg:px-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm text-right font-semibold leading-6 text-amber-50">
                    راه‌های ارتباطی
                  </h3>
                  <ul role="list" className="mt-6 text-right space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-amber-50 hover:text-amber-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-right text-amber-50">
                    خدمات مشتریان
                  </h3>
                  <ul role="list" className="mt-6 text-right space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-amber-50 hover:text-amber-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-right text-amber-50">
                    نحوه رزرو اقامتگاه
                  </h3>
                  <ul role="list" className="mt-6 text-right space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-amber-50 hover:text-amber-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <img
                className="h-7 text-right text-white"
                alt="پلتفرم دلتا"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              />
              <p className="text-sm leading-6 text-right text-amber-50">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است...
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-16 border-t border-amber-50 pt-8 sm:mt-20 lg:mt-24">
            <div className="flex justify-center sm:justify-end space-x-6 rtl:space-x-reverse">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-amber-50 hover:text-amber-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-xs text-right leading-5 text-amber-50">
              &copy; تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
