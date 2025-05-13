"use client";

import LandingTitle from "../common/LandingTitle";
import { FaStar } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import FileContainer from "../common/FileContainer";
SwiperCore.use([Navigation, Pagination]);

const UserComments = () => {
  const comment = [
    {
      id: 1,
      image: "234",
      name: " محمد رضا ساداتی",
      date: "1/2/3 شنبه ",
      text: "” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ وه از طراحان گرافیک است. چاپگر ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی موردرها و متون بلکه روز استفادمه و مجدلهناز و کاربا نرد.... “ ",
    },
    {
      id: 2,
      image: "234",
      name: " محمد رضا ساداتی",
      date: "1/2/3 شنبه ",
      text: "” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ وه از طراحان گرافیک است. چاپگر ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی موردرها و متون بلکه روز استفادمه و مجدلهناز و کاربا نرد.... “ ",
    },
    {
      id: 3,
      image: "234",
      name: " محمد رضا ساداتی",
      date: "1/2/3 شنبه ",
      text: "” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ وه از طراحان گرافیک است. چاپگر ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی موردرها و متون بلکه روز استفادمه و مجدلهناز و کاربا نرد.... “ ",
    },
    {
      id: 4,
      image: "234",
      name: " محمد رضا ساداتی",
      date: "1/2/3 شنبه ",
      text: "” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ وه از طراحان گرافیک است. چاپگر ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی موردرها و متون بلکه روز استفادمه و مجدلهناز و کاربا نرد.... “ ",
    },
    {
      id: 5,
      image: "234",
      name: " محمد رضا ساداتی",
      date: "1/2/3 شنبه ",
      text: "” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ وه از طراحان گرافیک است. چاپگر ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی موردرها و متون بلکه روز استفادمه و مجدلهناز و کاربا نرد.... “ ",
    },
  ];

  return (
    <div className="my-20 grid">
      <LandingTitle
        title="نظر کاربران"
        mainTitle="رضایت شما اعتبار و ارزش دلتا را می سازد !"
        details="تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد ."
      />

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
                  {items.text}
                </p>
                <div className="p-2 rounded-xl bg-neutral-500 m-3 flex justify-end gap-4 text-sm font-semibold">
                  <div>
                    <p className="mb-2"> {items.name} </p>
                    <p className="flex justify-end opacity-65">
                      {items.date}
                      <LuCalendarDays className="m-1" />
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-lg bg-neutral-300">
                    {""}
                  </div>
                </div>
              </FileContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserComments;
