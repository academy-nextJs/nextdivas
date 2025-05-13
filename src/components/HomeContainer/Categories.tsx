import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import LandingTitle from "../common/LandingTitle";
import { getCategories } from "@/utils/service/api/landing/server-landing";

import { categoryType } from "@/types/landing.types";
import Image from "next/image";
import cottage from "../../../public/landing/cottage.png";
import FileContainer from "../common/FileContainer";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="mt-5 py-44">
      <div
        className="absolute w-40 h-60 blur-3xl opacity-20 rounded-r-full
        bg-primary
      "
      >
        {" "}
      </div>
      {/* title */}
      <LandingTitle
        title="دسته بندی املاک دلتا "
        mainTitle=" !هر ملکی بخوای اینجا پیدا میشه"
        details="  با کلیک به روی هر دسته بندی میتوانید تمام آگهی مربوط آن را مشاهده کنید
          و به ملک مورد علاقه خود برسید"
      />

      {/* categories */}
      <div className="flex max-lg:flex-wrap justify-center mt-20">
        {categories.map((items: categoryType) => (
          <FileContainer
            key={items.id}
            background="#393939"
            radius="sm"
            size="md"
            labelHeight="25px"
            labelWidth="100px"
            tagHeight="30px"
            width="210px"
            classNames={{
              base: "group h-[70px] mx-2 my-10 p-4 pt-[32px] hover:!bg-primary hover:shadow-[0px_8px_24px_rgba(140,255,69,0.12)]",
              innerLabel: "!p-3 flex justify-center items-center",
              wrapperLabel: "group-hover:!bg-primary",
              coverHollow: "group-hover:!text-primary",
            }}
          >
           
              <GoArrowLeft className="absolute left-0 -top-6 text-white/50 text-xl" />
              <Image
                className="absolute -top-12 right-4 z-50 rounded-xl bg-neutral-700/80 shadow-2xl p-2 w-14 h-14"
                src={cottage}
                alt="cottage "
              />
              <h3 className="flex justify-center items-center gap-3 w-full  text-white group-hover:text-black">
                <PiStarFourFill className="font-light"/> {items.name} <PiStarFourFill/> 
              </h3>
           
          </FileContainer>
        ))}
      </div>
    </div>
  );
};

export default Categories;
