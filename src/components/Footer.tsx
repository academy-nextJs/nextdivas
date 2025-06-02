"use client";

import { motion } from "framer-motion";
import myPhoto2 from "../assets/image/login.png";
import { usePathname } from "next/navigation";
import FileContainer from "./common/FileContainer";
import Image from "next/image";
import fotertext from "../../public/Group 2.png";
import footer1 from "../../public/footer1.png";
import footer2 from "../../public/footer2.png";
import footer3 from "../../public/footer3.png";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAlternateEmail, MdKeyboardArrowLeft } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { TbBrandLinkedin } from "react-icons/tb";
import InputField from "./common/InputField";
import SubmitButton from "./common/SubmitButton";
import { useForm } from "react-hook-form";
import { PiStarFourFill } from "react-icons/pi";

const navigation = {
  company: [
    {
      name: " 09229167194 - 098541612310 ",
      href: "#",
      icon: <FiPhoneCall className="mx-2 w-4 h-4" />,
    },
    {
      name: "Delta@gmail.com",
      href: "#",
      icon: <MdAlternateEmail className="mx-2 w-4 h-4" />,
    },
    {
      name: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده",
      href: "#",
      icon: <HiOutlineLocationMarker className="mx-2 w-4 h-4" />,
    },
  ],
  support: [
    { name: "پرسش متداول میزبان ", href: "#" },
    { name: "پرسش متداول مهمان ", href: "#" },
    { name: " چطور اقامتگاه ثبت کنم؟ ", href: "#" },
    { name: " حریم شخصی کاربران ", href: "#" },
  ],
  solutions: [
    { name: "راهنمای رزرو اقامتگاه", href: "#" },
    { name: "شیوه پرداخت ", href: "#" },
    { name: " لغو رزرو", href: "#" },
  ],
  social: [
    {
      name: "اینستاگرام",
      href: "#",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    { name: "تلگرام", href: "#", icon: <FaTelegram className="w-5 h-5" /> },
    { name: "توییتر", href: "#", icon: <FaTwitter className="w-5 h-5" /> },
    {
      name: "لینکدین",
      href: "#",
      icon: <TbBrandLinkedin className="w-5 h-5" />,
    },
  ],
};

export default function Footer() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <div
      className="relative w-full max-md:w-[95%] p-10 max-md:p-1 max-md:m-2 rounded-xl grid justify-items-center max-md:bg-primary"
      aria-labelledby="footer-heading"
    >
      

      <FileContainer
        background="#8CFF45"
        radius="lg"
        size="lg"
        labelHeight="75px"
        labelWidth="25%"
        tagHeight="50px"
        width="fit max-md:w-[80%]"
        classNames={{
          base: "relative mx-auto p-10  max-sm:p-0 z-0 ",
          innerLabel: "!p-3 max-md:!p-1 flex justify-center items-center z-0",
        }}
      >
        <Image
        src={fotertext}
        alt="Delta"
        className="absolute max-md:hidden left-10 -top-32 max-xl:w-[340px] max-xl:-top-14 max-sm:w-96 max-sm:-top-[10px] z-10"
      />
        <div className="absolute max-lg:hidden max-xl:text-sm top-[-55px] z-50 right-5 bg-[#232323] text-white rounded-2xl px-5 py-3 flex gap-2">
          <FiPhoneCall className="m-1 w-7 h-7" />
          <p className="mt-1"> 09229167194 - 098541612310 </p>
        </div>
        <div className="relative w-full dark:bg-dark ">
          <motion.div
            className="z-10 px-4 max-md:px-2 flex max-lg:flex-wrap justify-center "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* left part */}
            <div className="max-md:hidden relative flex items-end" dir="rtl">
              {/* stars */}
              <div className="absolute top-0 left-0 w-full">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <PiStarFourFill className="absolute text-[#232323] text-[14px] left-20 top-10" />
                  <PiStarFourFill className="absolute text-[#232323] text-[11px] left-12 top-40 " />
                  <PiStarFourFill className="absolute text-[#232323] text-[12px] right-48 -top-3" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <PiStarFourFill className="absolute text-[#232323] text-[18px] left-12 top-60 " />
                  <PiStarFourFill className="absolute text-[#232323] text-[16px] top-14 right-8" />
                  <PiStarFourFill className="absolute text-[#232323] text-[16px] right-10 top-48 " />
                </motion.div>
              </div>
              <img
                src={myPhoto2.src}
                alt="عکس من"
                className="rounded-xl w-[450px]"
              />
            </div>
            {/* right part */}
            <motion.div
              className="relative mt-10 w-2/3 max-xl:w-[80%] max-md:w-[95%] px-4 max-md:px-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-black flex items-center justify-end gap-2 rtl:gap-0">
                <BiSolidRightArrow className="text-[10px] opacity-50 max-sm:hidden" />
                <BiSolidRightArrow className="text-xs opacity-90" />
                <BiSolidRightArrow />
                <h1 className="mx-2"> !همیشه کنارتیم </h1>
              </div>

              <p dir="rtl" className="text-2xl font-bold text-right text-black">
                24 ساعت روز و 7 روز هفته در کنار شماییم !
              </p>
              <p className="text-lg leading-8 font-medium text-right text-gray w-full">
                تیم دلتا با ارائه بهترین نیروهای خدماتی و سرویس‌های املاکی، .سعی
                دارد تا در تمام لحظات کنار شما باشد
              </p>

              {/* footer form */}

              <form className="relative my-5 space-y-5">
                <div className=" flex flex-col gap-5 justify-end sm:flex-row">
                  <InputField
                    type="text"
                    name="fullName"
                    label=":  نام و نام خانوادگی "
                    register={register}
                    errors={errors}
                    placeholderText="... وارد کنید "
                    inputStyle="placeholder-gray text-[#232323] rounded-2xl text-white text-right text-[14px] font-semibold p-4"
                    lableStyle=" bg-primary text-gray font-semibold"
                  />
                  <InputField
                    type="text"
                    name="email"
                    label=": شماره یا ایمیل "
                    register={register}
                    errors={errors}
                    placeholderText="... وارد کنید "
                    inputStyle="placeholder-gray text-[#232323] rounded-2xl text-white text-right text-[14px] font-semibold p-4"
                    lableStyle="bg-primary text-gray font-semibold"
                  />
                </div>

                <textarea
                  id="area"
                  {...register("textarea", { required: true })}
                  placeholder="...."
                  className="placeholder-gray text-[#232323] w-full rounded-2xl h-60 text-right text-[14px] font-semibold p-4 appearance-none bg-transparent peer border-2 border-gray-500 focus:outline-0 focus:border-white shadow-sm"
                />
                <label
                  htmlFor="area"
                  className="absolute right-3 top-16 px-1 text-sm bg-primary text-gray-500 font-semibold"
                >
                  : پیام شما
                </label>
                <SubmitButton
                  text="ارسال پیام"
                  icon={<MdKeyboardArrowLeft className="mt-1" />}
                  style="w-full bg-gray text-white p-2 flex-row-reverse mainshadow"
                />
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-[#232323] relative z-20 p-10 max-sm:p-2 shadow-md rounded-[50px] max-md:rounded-[30px] mx-auto w-full max-md:w-[90%]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row-reverse flex-wrap gap-4 max-sm:gap-1 text-right justify-start">
              <div className="text-white text-right grid gap-8 max-sm:gap-4">
                <h2 className="text-3xl max-sm:text-lg max-sm:text-center font-bold">
                  {" "}
                  پلتفرم دلتا{" "}
                </h2>
                <p className=" max-w-[450px] text-lg max-sm:text-xs max-sm:text-center">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  consequuntur. Quisquam, amet? Veniam itaque odio deleniti et
                  obcaecati , alias dolore, vero eligendi, voluptates maxime
                  temporibus animi totam sit maiores veritatis? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Vel,
                  consequuntur. Quisquam,{" "}
                </p>
                <div className="flex flex-row-reverse flex-wrap gap-3 p-3">
                  <Image
                    src={footer2}
                    alt="Footer Image 1"
                    className="w-14 h-14 p-2 rounded-xl border-2 border-white hover:bg-white"
                  />
                  <Image
                    src={footer3}
                    alt="Footer Image 1"
                    className="w-14 h-14 p-2 rounded-xl border-2 border-white hover:bg-white"
                  />
                  <Image
                    src={footer1}
                    alt="Footer Image 1"
                    className="w-14 h-14 p-2 rounded-xl border-2 border-white hover:bg-white"
                  />
                </div>
              </div>

              <div className="pt-16">
                <h2 className="text-white text-xl max-sm:text-md font-semibold pr-7">
                  {" "}
                  نحوه رزرو اقامتگاه{" "}
                </h2>
                <ul className=" mt-4 space-y-4 text-neutral-400">
                  {navigation.solutions.map((item) => (
                    <li
                      key={item.name}
                      className="group hover:text-white transition-all duration-500 flex justify-end"
                    >
                      <a href={item.href}>{item.name}</a>
                      <BiSolidRightArrow className="rotate-180 m-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-16">
                <h2 className="text-white text-xl max-sm:text-md font-semibold pr-7">
                  {" "}
                  خدمات مشتریان{" "}
                </h2>
                <ul className="mt-4 space-y-2 text-neutral-400 max-sm:text-sm">
                  {navigation.support.map((item) => (
                    <li
                      key={item.name}
                      className="group hover:text-white transition-all duration-500 flex justify-end"
                    >
                      <a href={item.href}>{item.name}</a>
                      <BiSolidRightArrow className="rotate-180 m-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-16">
                <h2 className="text-white text-xl max-sm:text-md font-semibold pr-7">
                  {" "}
                  راه ارتباطی دلتا{" "}
                </h2>
                <ul className="mt-4 space-y-2 max-sm:text-sm text-neutral-400">
                  {navigation.company.map((item) => (
                    <li
                      key={item.name}
                      className="group hover:text-white transition-all duration-500 flex justify-end "
                    >
                      <a href={item.href} className="">
                        {item.name}
                      </a>
                      {item.icon}
                      <BiSolidRightArrow className="rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between border-t border-white pt-5">
              <div className="flex justify-center sm:justify-end space-x-6 rtl:space-x-reverse">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-black border-2 border-white hover:bg-white rounded-xl p-2 transition-all duration-500"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <p className="text-right leading-5 text-white">
                &copy; تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است.
              </p>
            </div>
          </motion.div>
        </div>
      </FileContainer>
    </div>
  );
}
