"use client";
import CardComponent from "@/components/common/CardComponent";
import LandingTitle from "@/components/common/LandingTitle";
import { House } from "@/types/landing.types";
import { getHouseRent } from "@/utils/service/api/landing/landing";
import React, { useEffect, useState } from "react";

// //slider imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Pagination, Navigation } from "swiper/modules";
// import SwiperCore from "swiper";
// import "swiper/swiper-bundle.css";
// import { useEffect, useState } from "react";
// SwiperCore.use([Navigation, Pagination]);

const DreamRent = () => {
  const [deltaHouseRent, setdeltaHouseRent] = useState<House[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHouseRent();
        setdeltaHouseRent(data);
      } catch (err) {
        console.log(" errore : ", err);
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

        <div className="grid grid-cols-4 gap-5 mt-12 z-10 max-md:grid-cols-1">
          {deltaHouseRent.map((item) => (
            <div key={item.id} className="group text-white cursor-pointer">
              <CardComponent rate={item.rate} photos={item.photos} />
              <div className="grid grid-cols-2 w-full border border-amber-500">
                <p className="text-neutral-500 flex"> {item.capacity}مورد</p>
                <h3 className="text-white w-full text-left text-lg font-bold justify-self-end border-2"> {item.title} </h3>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default DreamRent;
