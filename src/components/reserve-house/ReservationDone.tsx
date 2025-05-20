import Image from "next/image";
import React from "react";
import done from "../../../public/tik2.png";
import arrow from "../../../public/icons/whiteflash.png";
import ButtonComponent from "../common/button";
import ReserveBreadcrumb from "./ReserveBreadcrumb";

const ReservationDone = () => {
  return (
    <div className="grid gap-4 justify-items-center">
      <ReserveBreadcrumb
        color1="fill-primary"
        color2="fill-primary"
        color3="fill-primary"
        color4="fill-primary"
        color5="fill-white"
        cid={5}
      />{" "}
      <Image src={done} alt="Done" className="w-60 h-60 p-0" />
      <h1 className="text-2xl font-bold">
        ! رزرو بلیط شما با موفقیت انجام شد{" "}
      </h1>
      <div className="flex gap-3">
        <ButtonComponent
          icon={arrow}
          style="border-2 border-primary text-primary flex-row-reverse leading-4"
          text="بلیط های من"
        />
        <ButtonComponent
          icon={arrow}
          style="border-2 border-white text-white flex-row-reverse leading-5"
          text="بازگشت به صفحه اصلی"
        />
      </div>
    </div>
  );
};

export default ReservationDone;
