import CardList from "@/components/common/cardList";
import ReserveBox from "@/components/SinglePagesComponents/reserveInfo";
import ImageSlider from "@/components/SinglePagesComponents/singleReserveSlider";
import GridComponent from "@/components/SinglePagesComponents/grid";
import AboutHouse from "@/components/SinglePagesComponents/aboutHouse";
import AccommodationFacilities from "@/components/SinglePagesComponents/facilities";
import UserComments from "@/components/HomeContainer/UserComments";
import MortgageTab from "@/components/SinglePagesComponents/MortgageTab";

export default function SingleReserve() {
  const tabs = [
    { name: "  توضیحات ملک", content: <AboutHouse /> },
    {
      name: "امکانات اقامتگاه",
      content: <AccommodationFacilities />,
    },
    {
      name: "نظرات کاربران",
      content: <UserComments />,
    },
  ];

  return (
    <div className="pt-28">
      <div className="flex gap-4 pb-10 px-5">
        <GridComponent />
        <ImageSlider />
      </div>

      <div className="flex gap-4 pb-10 px-5">
        <ReserveBox />
        <MortgageTab tabs={tabs} />
      </div>

      <CardList />
    </div>
  );
}
