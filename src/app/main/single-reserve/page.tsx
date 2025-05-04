import CardList from "@/components/common/cardList";
import ReserveBox from "@/components/SinglePagesComponents/reserveInfo";
import ImageSlider from "@/components/SinglePagesComponents/singleReserveSlider";
import SettingsTabs from "@/components/SinglePagesComponents/tab";
import React from "react";

function SingleReserve() {
  return (
    <div>
      <ReserveBox />
      <ImageSlider />
      <SettingsTabs />
      <CardList />
    </div>
  );
}

export default SingleReserve;
