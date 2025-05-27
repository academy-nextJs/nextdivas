"use client";
import CardComponent from "@/components/common/CardComponent";
import LandingTitle from "@/components/common/LandingTitle";
import { House } from "@/types/landing.types";
import { getHouseRent } from "@/utils/service/api/landing/landing";
import React, { useEffect, useState } from "react";

//slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import CardsSkeleton from "@/components/skeletons/CardsSkeleton";
SwiperCore.use([Navigation, Pagination]);

const DreamRent = () => {
  const [deltaHouseRent, setdeltaHouseRent] = useState<House[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHouseRent();
        setdeltaHouseRent(data);
      } catch (err) {
        console.log(" errore : ", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pb-20">
      <div className="absolute w-40 z-20 h-60 blur-3xl opacity-20 rounded-r-full bg-primary">
        {" "}
      </div>

      {/* Header */}
      <LandingTitle
        title="مقصد رویا ها"
        mainTitle="اجاره ویلا در محبوب ترین مقتصد این ماه"
        details="!در این جا میتوانید محبوب ترین مقصد هارا از بین انتخاب کاربران مشاهده کنید و بررسی کنید"
      />
      {isLoading ? (
        <div className="flex justify-center gap-10 ">
          <CardsSkeleton stly=" max-2xl:hidden" />
          <CardsSkeleton stly=" max-lg:hidden" />
          <CardsSkeleton stly=" max-sm:hidden" />
          <CardsSkeleton />
        </div>
      ) : (
        <Swiper
          pagination={{ clickable: true }}
          className="mySwiper grid text-white w-[95%] mx-4 my-5"
          modules={[Pagination]}
          breakpoints={{
            500: { slidesPerView: 1, spaceBetween: 10 },
            711: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
            1395: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {deltaHouseRent.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group text-white cursor-pointer max-w-[300px] max-sm:max-w-[200px] py-2">
                <CardComponent
                  detailLink="single-house"
                  rate={item.rate}
                  photos={item.photos}
                />
                <div className="flex justify-end items-center p-2 gap-2 w-full ">
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
      )}
    </div>
  );
};

export default DreamRent;
