import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CardComponent from "./CardComponent";

function CardList() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-4 gap-5 mt-12 z-10 max-md:grid-cols-1">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="group text-white cursor-pointer">
            <CardComponent />
            <div className="mx-7 grid gap-2">
              <div className="flex flex-row-reverse justify-between gap-2 max-xl:flex-col">
                <h2 className="font-bold text-xl max-2xl:text-lg max-xl:text-center">
                  آپارتمان لوکس زعفورانیه
                </h2>
                <p className="bg-danger pt-1 pb-2 px-3 rounded-xl max-xl:text-center">
                  15%
                </p>
              </div>

              <div className="flex gap-2 justify-end opacity-55">
                location <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div className="flex gap-2 justify-end opacity-55">
                detail <BiBuildingHouse className="text-lg mt-1" />
              </div>
              <div className="bg-[#393939] transition-all duration-500 group-hover:bg-primary group-hover:text-black px-3 py-1 rounded-lg text-center">
                ت8000 | 5000ت / هرشب
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
