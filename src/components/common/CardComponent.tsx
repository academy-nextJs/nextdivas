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
import Link from "next/link";
import FileContainer from "./FileContainer";
SwiperCore.use([Navigation, Pagination]);

type CardType = {
  rate?: string;
  photos?: [string];
  detailLink: string;
};

const CardComponent = ({ rate, photos, detailLink }: CardType) => {
  return (
    <>
      <FileContainer
        background="#393939"
        radius="md"
        size="md"
        labelHeight="30px"
        labelWidth="100px"
        tagHeight="28px"        
        classNames={{
          base: "h-[80px] w-[300px] max-sm:w-[230px] p-4 group-hover:!bg-primary group-hover:shadow-[0px_8px_24px_rgba(140,255,69,0.12)] text-white transition-all duration-500",
          innerLabel: "!p-3 flex justify-center items-center",
          wrapperLabel: "group-hover:!bg-primary",
          coverHollow: "group-hover:!text-primary",
        }}
      >
        <div className=" flex relative -mt-8 mb-12">
          {detailLink ? (
            <Link
              href={detailLink}
              className="absolute -top-4 -left-4 px-4 py-1 rounded-lg bg-neutral-700/80 transition-all duration-500 group-hover:bg-primary group-hover:text-black"
            >
              <GoArrowLeft />
            </Link>
          ) : (
            <span className="px-4 py-1 rounded-lg bg-neutral-700/80 opacity-50 cursor-not-allowed">
              <GoArrowLeft />
            </span>
          )}

          <div className="absolute -right-3 shadow-md shadow-amber-50/20 flex z-50 px-3 py-1 mx-3  h-9 rounded-xl bg-white text-black transition-all duration-500 group-hover:text-white group-hover:bg-[#2D2D2D] ">
            <FaStar className="mt-1 mr-2" /> {rate}
          </div>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          className="mySwiper z-20 justify-self-end h-[145px] rounded-2xl w-68 max-sm:w-[200px]"
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
      </FileContainer>
    </>
  );
};

export default CardComponent;
