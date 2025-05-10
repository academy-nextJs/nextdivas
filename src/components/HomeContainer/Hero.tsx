import Image from "next/image";
import React from "react";
import hero from "../../../public/landing/hero.png";
import arrow from "../../../public/icons/whiteflash.png";
import arrow2 from "../../../public/icons/flash.png";
import AAA from "../../../public/icons/AAA.png";
import vectors from "../../../public/landing/vector.png";
import ButtonComponent from "../common/button";
import { PiStarFourFill } from "react-icons/pi";
import HeroFillter from "./HeroFillter";

const Hero = () => {
  return (
    <div className=" pb-8 ">
      <div className="relative grid">
        <Image
          src={hero}
          alt="hero"
          className="absolute top-0 -z-10 w-[100%] h-[850px] max-xl:h-[650px] max-lg:h-[640px] max-sm:h-[390px] "
        />
      </div>

      <div className=" mt-[400px] max-xl:mt-[300px] max-lg:mt-[280px] max-sm:mt-[180px]">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center">
          {/* left  */}
          <div className="text-white ml-20 max-lg:ml-4  w-1/2 max-lg:w-2/3 text-right">
            <h1 className="relative flex text-lg max-xl:text-md max-lg:text-sm max-sm:hidden">
              <PiStarFourFill className="text-white text-[13px] absolute -right-5 top-3" />
              رزور، رهن، اجاره و حتی خرید و فروش ملک مورد نظرتون مثل آب خوردن
              فقط در دلتا
              <div className="w-30 border-b-2 absolute bottom-2.5 max-2xl:hidden"></div>
            </h1>
            <div className="flex gap-6 max-lg:gap-2 mt-12 max-xl:mt-4 max-md:flex-col items-end max-sm:items-center max-sm:justify-center justify-end">
              <ButtonComponent
                text="رهن و اجاره ملک"
                icon={arrow}
                style="bg-gray mainshadow text-sm flex-row-reverse pb-3"
              />
              <ButtonComponent
                text="آسون رزرو کن"
                icon={arrow2}
                style="bg-white text-black text-sm flex-row-reverse pb-3"
              />
            </div>

            <div className="flex gap-6 mt-12 max-xl:mt-4 justify-end text-sm max-lg:text-xs  max-sm:hidden">
              <h3 className="border-r-3 pr-4">
                <p className="font-semibold text-lg max-lg:text-sm">8500+</p>
                ملک برای رزرو و رهن اجاره
              </h3>

              <h3>
                <p className="font-semibold text-lg max-lg:text-sm">8500+</p>
                منطقه برای رزرو،ویلا و کلبه ها
              </h3>
            </div>
          </div>

          {/* right  */}
          <div className="text-white w-1/2 text-right grid justify-items-end justify-self-end mx-8 max-lg:text-sm max-sm:hidden">
            <Image src={vectors} alt="vectors" />
            <h3 className="text-xl font-bold">بیش از +7000 </h3>
            <h3 className="flex flex-row-reverse ">
              {" "}
              رضایت مشتریانی که به دلتا اعتماد کردند
              <Image src={AAA} alt="vectors" className="mt-3 h-auto w-auto" />
            </h3>
          </div>
        </div>

        <div>
          <HeroFillter />
        </div>
      </div>
    </div>
  );
};

export default Hero;
