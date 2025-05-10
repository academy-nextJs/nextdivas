"use client";
import CardComponent from "../common/CardComponent";
import ButtonComponent from "../common/button";
import Time from "../common/Time";

import { House } from "@/types/landing.types";
import { getOffers } from "@/utils/service/api/landing/landing";

import { BiBuildingHouse, BiSolidRightArrow } from "react-icons/bi";
import { LuClock8 } from "react-icons/lu";
import vectors from "../../../public/icons/whiteflash.png";

//slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import CardBody from "../common/CardBody";
SwiperCore.use([Navigation, Pagination]);

const Offer = () => {
  const [deltaOffers, setdeltaOffers] = useState<House[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOffers();
        setdeltaOffers(data);
      } catch (err) {
        console.log(" errore : ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative max-xl:bg-[#2D2D2D] grid py-6 pb-28">
      {/* background ui */}
      <div
        className="absolute right-0 w-40 h-60 blur-3xl opacity-20 rounded-l-full
        bg-secondary 
      "
      >
        {" "}
      </div>

      <svg
        height="744"
        viewBox="0 0 1376 744"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-4 w-[98%] -z-10 max-xl:hidden"
      >
        <path
          d="M1118.91 76.3207C1132.93 76.3207 1145.93 68.9783 1153.16 56.969L1175.84 19.3517C1183.07 7.34234 1196.07 0 1210.09 0H1336C1358.09 0 1376 17.9086 1376 40V704C1376 726.091 1358.09 744 1336 744H40C17.9086 744 0 726.091 0 704L0 116.321C0 94.2293 17.9086 76.3207 40 76.3207H1118.91Z"
          fill="#2D2D2D"
        />
      </svg>

      <div className="max-2xl:mt-9 mx-24 max-2xl:mx-8 ">
        {/* title-part */}
        <div className="grid justify-items-end z-10 gap-4 text-white">
          <div className=" bg-danger py-2 px-4 flex gap-2 items-center rounded-2xl ">
            <LuClock8 className=" text-md" />
            <p className="pb-1">
              <Time />
            </p>
          </div>

          <div className="text-primary flex gap-1 items-center justify-center ">
            <BiSolidRightArrow className="text-[9px] opacity-50" />
            <BiSolidRightArrow className="text-[11px] opacity-80" />
            <BiSolidRightArrow className="text-sm" />
            <h1 className="mx-2"> بهترین تخفیف</h1>
          </div>
          <div className="grid grid-cols-2 w-full">
            <ButtonComponent
              icon={vectors}
              text="مشاهده همه"
              style="border-2 border-white bg-none flex-row-reverse pb-2 hover:border-primary hover:bg-primary/20 justify-self-start"
            />
            <h1 className=" font-bold text-2xl max-sm:text-lg justify-self-end">
              پیشنهاد ویژه دلتا
            </h1>
          </div>
        </div>

        {/* card-part */}
        <div className="grid justify-items-center gap-5 mt-8 z-10 ">
          <Swiper
            pagination={{ clickable: true }}
            className="mySwiper grid text-white w-[98%]"
            modules={[Pagination]}
            breakpoints={{
              420: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            spaceBetween={30}
          >
            {deltaOffers.map((item: House) => (
              <SwiperSlide key={item.id} className="mb-12 text-right">
                <div className="group text-white cursor-pointer">
                  <CardComponent rate={item.rate} photos={item.photos} />
                  <CardBody
                    icon1={<BiBuildingHouse className="mt-1.5 w-4 h-4 ml-1.5" />}
                    title={`${item.title}`}
                    address={`${item.address}`}
                    rooms={`${item.rooms} ,`}
                    parking={`${item.parking} ,`}
                    bathrooms={`${item.bathrooms} ,`}
                    yard_type={`${item.yard_type}`}
                    price={`${item.price}`}
                  />
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Offer;
