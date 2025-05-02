import Image, { StaticImageData } from "next/image";
import React from "react";

interface aboutUsTypes {
  image: StaticImageData;
  icone: StaticImageData;
  title: string;
  detail: string;
  styl?: string;
}

const AboutCards = ({ image, icone, title, detail, styl }: aboutUsTypes) => {
  return (
    <div className="relative">
      <svg
        height="225"
        viewBox="0 0 445 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[100%]"
      >
        <path
          d="M279.881 30C285.543 30 291.023 28.0001 295.352 24.3501L317.526 5.6499C321.854 1.9999 327.334 0 332.996 0H421C434.255 0 445 10.75 445 24V201C445 214.25 434.255 225 421 225H24C10.7452 225 0 214.25 0 201V54C0 40.75 10.7452 30 24 30H279.881Z"
          fill="#393939"
        />
        <path
          d="M289.294 41C295.112 41 300.733 38.8898 305.109 35.0498L321.211 20.9502C325.587 17.1102 331.207 15 337.026 15H409C422.255 15 433 25.75 433 39V189C433 202.25 422.255 213 409 213H36C22.7452 213 12 202.25 12 189V65C12 51.75 22.7452 41 36 41H289.294Z"
          fill="#232323"
        />
      </svg>
      <div className="absolute w-[90%] top-12 max-sm:top-16 px-8 left-[13px] text-white grid justify-items-end">
        <Image
          src={image}
          alt="image"
          className={`absolute max-sm:hidden top-0 left-0 w-24 h-24 ${styl}`}
        />

        <div className=" p-2 rounded-lg bg-white mb-3">
          <Image src={icone} alt="icone" />
        </div>
        <h3 className="font-bold text-xl max-md:text-sm mb-3"> {title} </h3>
        <p className="opacity-70 max-md:text-xs"> {detail} </p>
      </div>
    </div>
  );
};

export default AboutCards;
