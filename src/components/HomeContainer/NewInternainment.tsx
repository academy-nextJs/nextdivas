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
import FileContainer from "../common/FileContainer";
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
    <>
      <FileContainer
        background="#232323"
        radius="lg"
        size="lg"
        labelHeight="35px"
        labelWidth="185px"
        tagHeight="30px"
       
        classNames={{
          base: " w-[90%] max-xl:w-[98%] max-xl:mx-0 my-10 px-2 max-sm:p-2 z-0 mx-auto",
          innerLabel: "!p-3 flex justify-center items-center z-0",
        }}
      >
        {/* title-part */}
        <div className="grid justify-items-end z-10 gap-4 text-white px-6">
          <div className="text-primary flex gap-1 items-center justify-center ">
            <BiSolidRightArrow className="text-[9px] opacity-50" />
            <BiSolidRightArrow className="text-[11px] opacity-80" />
            <BiSolidRightArrow className="text-sm" />
            <h1 className="mx-2"> جدید ترین نقاط </h1>
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 w-full">
            <ButtonComponent
              icon={vectors}
              text="مشاهده همه"
              style="border-2 border-white bg-none flex-row-reverse pb-2 hover:border-primary hover:bg-primary/20 justify-self-start max-sm:justify-self-center"
            />
            <h1 className=" font-bold text-2xl max-sm:text-lg justify-self-end max-sm:justify-self-center">
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
              500: { slidesPerView: 1, spaceBetween: 10 },
              711: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 15 },
              1395: { slidesPerView: 4, spaceBetween: 30 },
            }}
            spaceBetween={30}
          >
            {deltaInternainment.map((item: House) => (
              <SwiperSlide key={item.id} className="mb-12 text-right py-2">
                <div className="group grid justify-items-center justify-self-center text-white cursor-pointer ">
                  <CardComponent
                    detailLink="single-reserve"
                    rate={item.rate}
                    photos={item.photos}
                  />
                  <div className="flex justify-end items-center p-2 gap-2 w-full max-w-[300px] max-sm:max-w-[200px]">
                    <p className="text-neutral-500 "> ({item.capacity}مورد)</p>
                    <h3 className="text-left text-lg font-bold ">
                      {" "}
                      {item.title}{" "}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </FileContainer>
    </>
  );
};

export default NewInternainment;
