"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import slider1 from "../../assets/image/slider1.png";
import slider2 from "../../assets/image/slider2.jpg";
import slider3 from "../../assets/image/slider3.jpg";

const images = [slider1, slider2, slider3];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="w-2/3 md:w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden"
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
