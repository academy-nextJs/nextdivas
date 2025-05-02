import React from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

const CardComponent = () => {
  return (
    <div className="relative grid text-white transition-all duration-500 pb-4">
      {/* image part  */}
      <div className="absolute top-4 left-6 px-4 py-1 rounded-lg bg-neutral-700/80 transition-all duration-500 group-hover:bg-primary group-hover:text-black">
        <GoArrowLeft />
      </div>
      <svg
        width="354"
        height="280"
        viewBox="0 0 354 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-[98%] fill-[#393939] group-hover:fill-primary"
      >
        <g filter="url(#filter0_d_67_214)">
          <path d="M208.403 47.5C217.888 47.5 226.482 41.9144 230.335 33.2473L231.665 30.2527C235.518 21.5856 244.112 16 253.597 16L306 16C319.255 16 330 26.7452 330 40V224C330 237.255 319.255 248 306 248H48C34.7452 248 24 237.255 24 224L24 71.5C24 58.2452 34.7452 47.5 48 47.5L208.403 47.5Z" />
        </g>
      </svg>

      <div className="shadow-md shadow-amber-50/20 flex z-20 px-3 py-1 mx-9 mt-10 h-9 justify-self-end rounded-xl bg-white text-black transition-all duration-500 group-hover:text-white group-hover:bg-[#2D2D2D] ">
        {" "}
        <FaStar className="mt-1 mr-2" /> 4.5{" "}
      </div>
      <div className="flex z-20 mx-10 my-2 h-[135px]  rounded-2xl bg-[#444444]">
        slider
      </div>
    </div>
  );
};

export default CardComponent;
