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

      <div className="grid my-10 p-20 max-xl:gap-2">
        <Swiper
          pagination={{ clickable: true }}
          className="mySwiper text-white max-w-[1400px] w-[93%]"
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
              className="relative mb-8 grid justify-items-center justify-self-center col-span-1 max-sm:bg-[#393939] rounded-2xl"
            >
              <svg
                height="309"
                viewBox="0 0 698 339"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[100%]"
              >
                <path
                  d="M554.978 27.4183C562.544 27.4183 569.668 23.8499 574.199 17.7897L580.301 9.62861C584.832 3.56845 591.956 0 599.522 0L654 0C667.255 0 678 10.7452 678 24V285C678 298.255 667.255 309 654 309H24C10.7452 309 0 298.255 0 285L0 51.4183C0 38.1635 10.7452 27.4183 24 27.4183L554.978 27.4183Z"
                  fill="#393939"
                />
              </svg>

              <div className="absolute top-4 right-5 text-white grid">
                <div className="shadow-md shadow-amber-50/20 flex z-20 px-3 py-1 mx-3 h-9 justify-self-end rounded-xl bg-white text-black transition-all duration-500 group-hover:text-white group-hover:bg-[#2D2D2D] ">
                  {" "}
                  <FaStar className="mt-1 mr-2" /> 4.5{" "}
                </div>
                <p className="text-right mx-3 my-5 ">{items.text}</p>
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserComments;
