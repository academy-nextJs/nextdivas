import React from "react";
import { commentType } from "@/types/landing.types";
import { Skeleton } from "@/components/ui/skeletone";

import { FaStar } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import FileContainer from "../FileContainer";
SwiperCore.use([Navigation, Pagination]);

type Props = {
  comment?: commentType[];
  loading?: boolean;
  error?: string | null;
  reply?: React.ReactNode;
  button?: React.ReactNode;
};

const Comment = ({ comment, loading, error ,reply ,button}: Props) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="w-1/3 h-4" />
            <Skeleton className="w-full h-12" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-sm">{error}</p>;
  }

  if (!comment?.length) {
    return <FileContainer
              background="#393939"
              radius="sm"
              size="md"
              labelHeight="25px"
              labelWidth="100px"
              tagHeight="30px"
              width="95%"
              classNames={{
                base: "group h-[70px] mx-2 my-10 p-4 pt-[32px] hover:!bg-primary hover:shadow-[0px_8px_24px_rgba(140,255,69,0.12)]",
                innerLabel: "!p-3 flex justify-center items-center",
                wrapperLabel: "group-hover:!bg-primary",
                coverHollow: "group-hover:!text-primary",
              }}>کامنتی ثبت نشده است.</FileContainer>;
  }

  return (
    <div className="grid my-10 p-20 max-sm:p-2 max-xl:gap-2">
      <Swiper
        pagination={{ clickable: true }}
        className="mySwiper text-white max-w-[1400px] w-[97%]"
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        spaceBetween={30}
      >
        {comment.map((items) => (
          <SwiperSlide
            key={items.id}
            className="relative mb-8 grid rounded-2xl"
          >
            <FileContainer
              key={items.id}
              background="#393939"
              radius="sm"
              size="md"
              labelHeight="25px"
              labelWidth="100px"
              tagHeight="30px"
              width="95%"
              classNames={{
                base: "group h-[70px] mx-2 my-10 p-4 pt-[32px] hover:!bg-primary hover:shadow-[0px_8px_24px_rgba(140,255,69,0.12)]",
                innerLabel: "!p-3 flex justify-center items-center",
                wrapperLabel: "group-hover:!bg-primary",
                coverHollow: "group-hover:!text-primary",
              }}
            >
              <div className="absolute -top-4 right-3 shadow-md shadow-amber-50/20 flex z-50 px-3 py-1 h-9 rounded-xl bg-white text-black transition-all duration-500 group-hover:text-white group-hover:bg-[#2D2D2D] ">
                {" "}
                <FaStar className="mt-1 mr-2" /> 4.5{" "}
              </div>
              <p className="text-right group-hover:text-black mx-3 my-5 ">
                {items.message}
              </p>

              {/* reply */}
              <div>{reply}</div>

              {/* name */}
              <div className="relative p-2 rounded-xl bg-neutral-500 m-3 flex gap-4 justify-end  text-sm font-semibold">
                <div className="absolute left-0">{button}</div>

                <div>
                  <p className="mb-2"> {items.userFullName} </p>
                  <p className="flex justify-end opacity-65">
                    {items.createdAt}
                    <LuCalendarDays className="m-1" />
                  </p>
                </div>
                <div className="w-14 h-14 rounded-lg bg-neutral-300">{""}</div>
              </div>
            </FileContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comment;
