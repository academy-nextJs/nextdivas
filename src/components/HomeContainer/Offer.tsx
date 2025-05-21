"use client";
import { useEffect, useState } from "react";

import CardComponent from "../common/CardComponent";
import ButtonComponent from "../common/button";
import Time from "../common/Time";

import { House } from "@/types/landing.types";
import { getOffers } from "@/utils/service/api/landing/landing";
import FileContainer from "../common/FileContainer";
import CardBody from "../common/CardBody";



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
    <div className="relative flex mx-auto py-6 pb-28">
      {/* background ui */}
      <div
        className="absolute right-0 w-40 h-60 blur-3xl opacity-20 rounded-l-full
        bg-secondary 
      "
      >
        {" "}
      </div>

      <FileContainer
        background="#2D2D2D"
        radius="lg"
        size="lg"
        labelHeight="65px"
        labelWidth="185px"
        tagHeight="30px"
        width="100%"
        classNames={{
          base: "mx-10 max-xl:mx-2 my-10 px-7 max-sm:p-2 z-0 ",
          innerLabel: "!p-3 flex justify-center items-center z-0",
         
        }}
      >
        {/* title-part */}
        <div className="relative grid justify-items-end gap-4 text-white -mt-8 ">
          <div className=" bg-danger py-2 px-4 flex gap-2 items-center rounded-2xl z-50 max-sm:hidden">
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
          <div className="grid grid-cols-2 max-sm:grid-cols-1 w-full">
            
            <ButtonComponent
              linke="mortgageAndHouseRent"
              icon={vectors}
              text="مشاهده همه"
              style="border-2 border-white bg-none flex-row-reverse pb-2 hover:border-primary hover:bg-primary/20 justify-self-start max-sm:justify-self-center"
            />
            <h1 className=" font-bold text-2xl max-sm:text-lg justify-self-end max-sm:justify-self-center">
              پیشنهاد ویژه دلتا
            </h1>
          </div>
        </div>

        {/* card-part */}
        <div className="grid justify-items-center gap-5 mt-10 z-10 ">
          <Swiper
            pagination={{ clickable: true }}
            className="mySwiper grid text-white w-[98%]"
            modules={[Pagination]}
            breakpoints={{
              500: { slidesPerView: 1, spaceBetween: 10},
              711: { slidesPerView: 2 ,spaceBetween: 30 },
              1024: { slidesPerView: 3 ,spaceBetween: 15 },
              1395: { slidesPerView: 4 ,spaceBetween: 30 },
            }}
          >
            {deltaOffers.map((item: House) => (
              <SwiperSlide key={item.id} className="mb-12 text-right">
                <div className="group text-white cursor-pointer py-2">
                  <CardComponent
                    detailLink={"single-reserve"}
                    rate={item.rate}
                    photos={item.photos}
                  />
                  <CardBody
                    icon1={
                      <BiBuildingHouse className="mt-1.5 w-4 h-4 ml-1.5" />
                    }
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
      </FileContainer>
    </div>
  );
};

export default Offer;
