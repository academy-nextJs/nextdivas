"use client"
import React, { useEffect, useState } from "react";
import CardComponent from "../common/CardComponent";
import { BiSolidRightArrow } from "react-icons/bi";
import ButtonComponent from "../common/button";
import vectors from "../../../public/icons/whiteflash.png";
import { getBuyHouse } from "@/utils/service/api/landing/landing";
import { House } from "@/types/landing.types";
import CardBody from "../common/CardBody";

const BuyHouse = () => {
  const [deltaBuyHouse, setDeltaBuyHouse] = useState<House[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBuyHouse();
        setDeltaBuyHouse(data);
      } catch (err) {
        console.log(" errore : ", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-16 py-12 max-sm:mx-2">
      {/* title-part */}
      <div className="grid justify-items-end z-10 gap-4 text-white">
        <div className="text-primary flex gap-1 items-center justify-center ">
          <BiSolidRightArrow className="text-[9px] max-sm:mx-text-[5px] opacity-50" />
          <BiSolidRightArrow className="text-[11px] max-sm:mx-text-[7px] opacity-80" />
          <BiSolidRightArrow className="text-sm max-sm:mx-text-xs" />
          <h1 className="mx-2 max-sm:mx-1"> !خونه از خودت میخوای</h1>
        </div>
        <div className="grid grid-cols-2 w-full  max-md:grid-cols-1 max-md:justify-items-center">
          <ButtonComponent
            icon={vectors}
            text="مشاهده همه"
            style="border-2 border-white bg-none flex-row-reverse pb-2 m-1 hover:border-primary hover:bg-primary/20 justify-self-start max-md:justify-self-end"
          />
          <div className="justify-self-end flex flex-row-reverse max-sm:grid gap-2 relative">
            <h1 className="font-bold text-2xl max-lg:mt-4 max-lg:text-[14px] pt-2 max-sm:text-lg pl-2 flex gap-2">
              خرید و فروش ملک در دلتا
            </h1>
          </div>
        </div>
      </div>

      {/* cart  */}
      <div className="grid grid-cols-4 gap-5 mt-12 z-10 max-md:grid-cols-1">
        {deltaBuyHouse.map((item) => (
          <div key={item.id} className="group text-white cursor-pointer">
            <CardComponent rate={item.rate} photos={item.photos} />
            <CardBody
              title={`${item.title} |`}
              address={`${item.address} |`}
              rooms={`${item.rooms} |`}
              parking={`${item.parking} |`}
              bathrooms={`${item.bathrooms} |`}
              yard_type={`${item.yard_type}`}
              price={`${item.price}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyHouse;
