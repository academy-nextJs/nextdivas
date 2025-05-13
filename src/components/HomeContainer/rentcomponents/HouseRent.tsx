"use client";
import ButtonComponent from "@/components/common/button";
import React, { useEffect, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import vectors from "../../../../public/icons/whiteflash.png";
import CardComponent from "@/components/common/CardComponent";
import Toggle from "@/components/common/Toggle";

import { House } from "@/types/landing.types";
import { getHouseRent, getMortgage } from "@/utils/service/api/landing/landing";
import CardBody from "@/components/common/CardBody";

//slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

const HouseRent = () => {
  const togle = ["رهن خونه ", " اجاره ملک"];
  const [togleButton, setTogleButton] = useState(" اجاره ملک");

  // اجاره رو گذاشتیم و رهن مونده
  const [deltaHouseRent, setdeltaHouseRent] = useState<House[]>([]);
  const [deltaHouseMortgage, setdeltaHouseMortgage] = useState<House[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rent = await getHouseRent();
        setdeltaHouseRent(rent);
        const mortgage = await getMortgage();
        setdeltaHouseMortgage(mortgage);
      } catch (err) {
        console.log(" errore : ", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-16 py-12 max-sm:mx-2 ">
      <div
        className="absolute right-0 w-40 h-60 blur-3xl opacity-20 rounded-l-full
        bg-secondary 
      "
      >
        {" "}
      </div>

      {/* title-part */}
      <div className="grid justify-items-end z-10 gap-4 text-white">
        <div className="text-primary flex gap-1 items-center justify-center ">
          <BiSolidRightArrow className="text-[9px] max-sm:mx-text-[5px] opacity-50" />
          <BiSolidRightArrow className="text-[11px] max-sm:mx-text-[7px] opacity-80" />
          <BiSolidRightArrow className="text-sm max-sm:mx-text-xs" />
          <h1 className="mx-2 max-sm:mx-1"> با هر مبلغی خونه دار شو</h1>
        </div>
        <div className="grid grid-cols-2 w-full  max-md:grid-cols-1 max-md:justify-items-center">
          <ButtonComponent
            linke="mortgageAndHouseRent"
            icon={vectors}
            text="مشاهده همه"
            style="border-2 border-white bg-none flex-row-reverse pb-2 m-1 hover:border-primary hover:bg-primary/20 justify-self-start max-md:justify-self-end"
          />
          <div className="justify-self-end flex flex-row-reverse max-sm:grid gap-2 relative">
            <h1 className="font-bold text-2xl max-lg:mt-4 max-lg:text-[14px] pt-2 max-sm:text-lg pl-2 flex gap-2">
              <span className="border-l-[2.5px] border-white/20 mt-2 mb-3 max-md:hidden">
                {""}
              </span>
              رهن و اجاره ملک در دلتا
            </h1>
            {/* <Toggle
              mode={togle}
              onChange={(mode) => setTogleButton(mode[0] ? mode[1] : mode[0])}
            /> */}
          </div>
        </div>
      </div>

      {/* cart  */}
      <Swiper
        pagination={{ clickable: true }}
        className="mySwiper grid text-white w-[98%] my-8"
        modules={[Pagination]}
        breakpoints={{
          500: { slidesPerView: 1, spaceBetween: 10 },
          711: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
          1395: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {togleButton == "رهن خونه "
          ? deltaHouseRent.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group text-white cursor-pointer py-2">
                  <CardComponent
                    detailLink="single-house"
                    rate={item.rate}
                    photos={item.photos}
                  />
                  <CardBody
                    title={`${item.title}`}
                    address={`${item.address}`}
                    rooms={`${item.rooms} |`}
                    parking={`${item.parking} |`}
                    bathrooms={`${item.bathrooms} |`}
                    yard_type={`${item.yard_type} |`}
                    price={`${item.price} |`}
                  />
                </div>
              </SwiperSlide>
            ))
          : deltaHouseMortgage.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group text-white cursor-pointer py-2">
                  <CardComponent
                    detailLink="single-house"
                    rate={item.rate}
                    photos={item.photos}
                  />
                  <CardBody
                    title={`${item.title}`}
                    address={`${item.address}`}
                    rooms={`${item.rooms} |`}
                    parking={`${item.parking} |`}
                    bathrooms={`${item.bathrooms} |`}
                    yard_type={`${item.yard_type} |`}
                    price={`${item.price} |`}
                  />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default HouseRent;
