"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import slider1 from "../../app/assets/image/slider1.png";
import slider2 from "../../app/assets/image/slider2.jpg";
import slider3 from "../../app/assets/image/slider3.jpg";

const images = [slider1, slider2, slider3];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="w-full h-[400px] rounded-xl overflow-hidden"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            width={1920}
            height={400}
            className="w-full h-full object-cover"
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
