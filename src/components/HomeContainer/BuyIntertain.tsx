import React from "react";
import BuyHouse from "./BuyHouse";
import NewInternainment from "./NewInternainment";

const BuyIntertain = () => {
  return (
    <div className="relative bg-[#2D2D2D] grid gap-14 rounded-b-[55px] -mt-10 py-20 -z-50">
      <div className="absolute w-40 z-20 h-60 blur-3xl opacity-20 rounded-r-full bg-primary">
        {" "}
      </div>
      <BuyHouse />
      <NewInternainment />
      <div className="absolute right-0 bottom-0 w-40 h-60 blur-3xl opacity-20 rounded-l-full bg-secondary">
        {" "}
      </div>
    </div>
  );
};

export default BuyIntertain;
