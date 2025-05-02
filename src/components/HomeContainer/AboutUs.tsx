import React from "react";
import LandingTitle from "../common/LandingTitle";
import AboutCards from "./aboutUscomponent/AboutCards";
import heart from "../../../public/landing/heart3 1.png";
import a from "../../../public/landing/a.png";
import time from "../../../public/landing/timer.png";
import smaile from "../../../public/landing/smile.png";
import dicon from "../../../public/landing/3d-icon.png";
import fave from "../../../public/landing/fave(1).png";
import price from "../../../public/landing/price.png";
import cup from "../../../public/landing/Group.png";

const AboutUs = () => {
  return (
    <div className="relative px-16 max-md:px-0 bg-[#232323] rounded-b-[55px] py-22 grid z-20">
      <div
        className="absolute right-0 w-40 h-60 blur-3xl opacity-20 rounded-l-full
        bg-secondary 
      "
      >
        {" "}
      </div>

      <LandingTitle
        title="درباره ما"
        mainTitle="دلتا رو بیشتر بشناس"
        details="تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد"
      />

      <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-12 z-10 max-md:grid-cols-1 text-white justify-items-center justify-self-center">
        {/* left */}
        <div className="grid gap-2 col-span-1">
          <AboutCards
            image={a}
            icone={time}
            title="24/7 ساعت شبانه روز "
            detail="تیم پشتیبانی در تمام طول روز همراه شما هستند "
          />
          <AboutCards
            image={heart}
            icone={smaile}
            title="24/7 ساعت شبانه روز "
            detail="تیم پشتیبانی در تمام طول روز همراه شما هستند "
          />
        </div>

        {/* center */}
        <div className="relative col-span-1 max-sm:bg-[#393939] max-sm:p-3 rounded-lg">
          <svg
            height="470"
            viewBox="0 0 446 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[100%] max-sm:hidden"
          >
            <path
              d="M280.324 31C286.111 31 291.702 28.9092 296.07 25.1127L318.185 5.8873C322.552 2.09078 328.144 0 333.931 0L422 0C435.255 0 446 10.7452 446 24V446C446 459.255 435.255 470 422 470H24C10.7452 470 0 459.255 0 446L0 55C0 41.7452 10.7452 31 24 31H280.324Z"
              fill="#393939"
            />
          </svg>

          <svg
            height="446"
            viewBox="0 0 422 446"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 left-3 z-10 w-[94%] fill-secondary  max-sm:hidden"
          >
            <path d="M277.751 29.417C283.704 29.417 289.444 27.205 293.857 23.2105L312.643 6.20648C317.056 2.212 322.796 0 328.749 0L398 0C411.255 0 422 10.7452 422 24V422C422 435.255 411.255 446 398 446H24C10.7452 446 0 435.255 0 422L0 53.417C0 40.1622 10.7452 29.417 24 29.417H277.751Z" />
          </svg>
          <p className="absolute max-sm:relative z-20 top-14 max-sm:top-0 max-sm:left-0 left-3 right-3 text-center max-sm:text-xs max-sm:bg-secondary py-2 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            dolorem maxime maiores! Eos libero incidunt commodi temporibus amet
            minus laudant ium perspiciatis sed ab, officiis pariatur quo
            numquam, aliquam alias quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid dolorem maxime maiores! Eos libero
            incidunt commodi temporibus amet minus laudant ium perspiciatis sed
            ab, officiis pariatur quo numquam, aliquam alias quos. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquid dolorem maxime
            maiores! Eos libero incidunt commodi temporibus amet minus laudant
            ium perspiciatis sed ab, officiis pariatur quo numquam, aliquam
            alias quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid dolorem maxime maiores! Eos libero incidunt commodi
            temporibus amet minus laudant ium perspiciatis sed ab, officiis
            pariatur quo numquam, aliquam alias quos.
          </p>
        </div>

        {/* right */}
        <div className="col-span-1 grid gap-2">
          <AboutCards
            styl="w-28 h-28"
            image={dicon}
            icone={fave}
            title="24/7 ساعت شبانه روز "
            detail="تیم پشتیبانی در تمام طول روز همراه شما هستند "
          />
          <AboutCards
            image={price}
            icone={cup}
            title="24/7 ساعت شبانه روز "
            detail="تیم پشتیبانی در تمام طول روز همراه شما هستند "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
