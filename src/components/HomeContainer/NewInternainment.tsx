"use client";

import React, { useEffect, useState } from "react";
import { BiBuildingHouse, BiSolidRightArrow } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CardComponent from "../common/CardComponent";
import ButtonComponent from "../common/button";
import vectors from "../../../public/icons/whiteflash.png";
import { House } from "@/types/landing.types";
import { getOffers } from "@/utils/service/api/landing/landing";

//slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

const NewInternainment = () => {
  const [deltaInternainment, setdeltaInternainment] = useState<House[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOffers();
        setdeltaInternainment(data);
      } catch (err) {
        console.log(" errore : ", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="relative grid  py-6 mx-4 pb-28">
      <svg
        height="551"
        viewBox="0 0 1376 551"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-4 w-[98%] -z-10 max-xl:hidden"
      >
        <path
          d="M1129.95 19.2078C1137.5 19.2078 1144.89 17.0748 1151.27 13.0551L1162.23 6.15275C1168.61 2.13297 1176 0 1183.55 0H1336C1358.09 0 1376 17.9086 1376 40V510.5C1376 532.591 1358.09 550.5 1336 550.5H40C17.9086 550.5 0 532.591 0 510.5L0 59.2078C0 37.1164 17.9086 19.2078 40 19.2078H1129.95Z"
          fill="#232323"
        />
      </svg>

      <div className="max-2xl:mt-9 max-xl:bg-[#232323] p-4 rounded-[55px] px-12 maxl-xl:px-4">
        {/* title-part */}
        <div className="grid justify-items-end z-10 gap-4 text-white px-6">
          <div className="text-primary flex gap-1 items-center justify-center ">
            <BiSolidRightArrow className="text-[9px] opacity-50" />
            <BiSolidRightArrow className="text-[11px] opacity-80" />
            <BiSolidRightArrow className="text-sm" />
            <h1 className="mx-2"> جدید ترین نقاط </h1>
          </div>
          <div className="grid grid-cols-2 w-full">
            <ButtonComponent
              icon={vectors}
              text="مشاهده همه"
              style="border-2 border-white bg-none flex-row-reverse pb-2 hover:border-primary hover:bg-primary/20 justify-self-start"
            />
            <h1 className=" font-bold text-2xl max-sm:text-lg justify-self-end">
              جدید ترین مناقط تفریحی
            </h1>
          </div>
        </div>

        {/* card-part */}
        <div className="grid justify-items-center gap-5 mt-8 z-10 px-4">
          <Swiper
            pagination={{ clickable: true }}
            className="mySwiper grid text-white w-[98%] "
            modules={[Pagination]}
            breakpoints={{
              420: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            spaceBetween={30}
          >
            {deltaInternainment.map((item: House) => (
              <SwiperSlide key={item.id} className="mb-12 text-right">
                <div className="group grid justify-items-center justify-self-center text-white cursor-pointer ">
                  <CardComponent rate={item.rate} photos={item.photos} />
                  <div className="grid grid-cols-2 w-full ">
                    <p className="text-neutral-500 flex text-rigth">
                      {" "}
                      ({item.capacity}مورد)
                    </p>
                    <h3 className="text-white w-full text-left text-lg font-bold justify-self-end">
                      {" "}
                      {item.title}{" "}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewInternainment;
