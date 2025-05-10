"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

type CardType = {
  rate?: string;
  photos?: [string];
};

const CardComponent = ({ rate, photos }: CardType) => {
  return (
    <div className="relative grid justify-items-end text-white transition-all duration-500 pb-4 ">
      {/* image part  */}
      <div className="absolute top-4 left-6 px-4 py-1 rounded-lg bg-neutral-700/80 transition-all duration-500 group-hover:bg-primary group-hover:text-black">
        <GoArrowLeft />
      </div>

      <svg
        width="304"
        height="280"
        viewBox="0 0 330 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute fill-[#393939] group-hover:fill-primary" 
      >
        <g filter="url(#filter0_d_2_239)">
          <path d="M208.403 47.5C217.888 47.5 226.482 41.91 230.335 33.25L231.665 30.25C235.518 21.59 244.112 16 253.597 16H306C319.25 16 330 26.75 330 40V224C330 237.25 319.25 248 306 248H48C34.745 248 24 237.25 24 224V71.5C24 58.25 34.745 47.5 48 47.5H208.403Z" />
        </g>
      </svg>

      <div className="shadow-md shadow-amber-50/20 flex z-20 px-3 py-1 mx-3 mt-10 h-9 justify-self-end rounded-xl bg-white text-black transition-all duration-500 group-hover:text-white group-hover:bg-[#2D2D2D] ">
        {" "}
        <FaStar className="mt-1 mr-2" /> {rate}
      </div>
      <div className=" mr-3">
        <Swiper
        pagination={{ clickable: true }}
        className="mySwiper  z-20 justify-self-end my-2  h-[140px] rounded-2xl w-64"
        modules={[Pagination]}
        spaceBetween={30}
      >
        {photos?.map((item: string, i: number) => (
          <SwiperSlide key={i}>
            <Image
              src={item}
              alt="i"
              width={430}
              height={140}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
    </div>
  );
};

export default CardComponent;
