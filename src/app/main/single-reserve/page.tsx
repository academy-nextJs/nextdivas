import CardList from "@/components/common/cardList";
import ReserveBox from "@/components/SinglePagesComponents/reserveInfo";
import ImageSlider from "@/components/SinglePagesComponents/singleReserveSlider";
import SettingsTabs from "@/components/SinglePagesComponents/tab";
import React from "react";
import GridComponent from "../../../components/SinglePagesComponents/grid";

function SingleReserve() {
  return (
    <div className="pt-28 ">
      <div className="flex gap-4  pb-10 px-5 ">
        <GridComponent />

        <ImageSlider />
      </div>
      <div className=" flex gap-4 pb-10 px-5 ">
        <ReserveBox />
        <SettingsTabs />
      </div>

      <CardList />
    </div>
  );
}

export default SingleReserve;
