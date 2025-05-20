"use client";

import { motion } from "framer-motion";
import { BiDollarCircle } from "react-icons/bi";
import ButtonComponent from "../common/button";
import { LuTicket } from "react-icons/lu";

import microphon from "../../../public/icons/microphon.svg";

import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import ReserveBreadcrumb from "./ReserveBreadcrumb";

const AcceptInfo = () => {
  return (
    <div className="grid gap-10">
      <ReserveBreadcrumb
        color1="fill-primary"
        color2="fill-primary"
        color3="fill-white"
        color4="fill-[#AAAAAA]"
        color5="fill-[#AAAAAA]"
        cid={3}
      />
      {/* check info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="w-full text-white bg-gray p-3 rounded-[25px] mx-auto "
      >
        مشخصات مسافران{" "}
      </motion.div>

      {/* Side cost */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="w-full text-white bg-gray p-3 rounded-[25px] mx-auto "
      >
        <div className="bg-neutral-500 rounded-[17px] flex items-center justify-end p-4">
          هزینه های جانبی
          <BiDollarCircle className="mt-1 w-5 h-5" />
        </div>

        <div className="max-w-[1260px] p-4 max-sm:p-1 max-sm:text-xs text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          natus ex ipsa ab autem rem error suscipit deserunt, quas quos, sequi
          nihil illo voluptatibus eligendi ducimus nostrum quia dolorem dolores.
          deserunt, quas quos, sequi nihil illo voluptatibus eligendi ducimus
          nostrum quia dolorem dolores. deserunt, quas quos, sequi nihil illo
          voluptatibus eligendi ducimus nostrum quia dolorem dolores. deserunt,
          quas quos, sequi nihil illo voluptatibus eligendi ducimus nostrum quia
          dolorem dolores. deserunt, quas quos, sequi nihil illo voluptatibus
          eligendi ducimus nostrum quia dolorem dolores. deserunt, quas quos,
          sequi nihil illo voluptatibus eligendi ducimus nostrum quia dolorem
          dolores.
        </div>
      </motion.div>

      {/* Notification */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="w-full text-white bg-gray p-3 rounded-[25px] mx-auto "
      >
        <div className="bg-neutral-500 rounded-[17px] flex items-center  justify-end p-4">
          <span className="text-primary text-xs font-semibold m-1 max-sm:hidden">
            {" "}
            (. اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود ){" "}
          </span>
          اطلاع رسانیه سفر
          <Image src={microphon} alt="microphon" className="m-1 w-4 h-4" />
        </div>

        <div className="flex flex-row-reverse max-sm:grid  max-sm:text-sm my-4 gap-4">
          <p className="flex gap-3 flex-row-reverse">
            <PiStarFourFill className="m-1" />
            {":"} شماره تماس
            <span className="text-primary"> 091111111 </span>
          </p>
          |
          <p className="flex gap-3 flex-row-reverse">
            <PiStarFourFill className="m-1" />
            {":"} ایمیل
            <span className="text-primary"> exaple123@gmail.com </span>
          </p>
        </div>
      </motion.div>

      {/* submit */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="w-full text-white p-5 border-2 border-dashed border-white/60 flex flex-row-reverse max-sm:grid  gap-2 mx-auto rounded-[25px]"
      >
        <div className="flex flex-row-reverse w-full justify-start  gap-2 font-semibold text-xl  max-sm:text-sm pt-2">
          <LuTicket className="rotate-90 w-6 h-6 " />
          <p> : قیمت هتل </p>
          <p className="text-primary"> ت 15000000 </p>
        </div>
        <ButtonComponent
          text=" مرحله قبل  >"
          style="border-2 border-white text-white leading-8"
          icon={""}
        />
        <ButtonComponent
          text=" < پرداخت انلاین "
          style="border-2 border-primary text-primary leading-8"
          icon={""}
        />
      </motion.div>
    </div>
  );
};

export default AcceptInfo;
