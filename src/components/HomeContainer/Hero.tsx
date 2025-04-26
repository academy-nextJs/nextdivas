import Image from "next/image";
import React from "react";
import hero from "../../../public/landing/hero.png";

const Hero = () => {
  return (
    <div className="relative">
      <Image src={hero} alt="hero" className="absolute -z-10 w-full h-screen max-md:h-[500px] max-sm:h-[400px] " />

      <div className="border border-red-500">
        
        <div className="grid grid-cols-2">
          <div>left</div>
          <div>right</div>
        </div>

        <div>filter</div>
      </div>

    </div>
  
)};

export default Hero;
