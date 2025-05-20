import CardList from "@/components/common/cardList";
import ReserveBox from "@/components/SinglePagesComponents/reserveInfo";
import ImageSlider from "@/components/SinglePagesComponents/singleReserveSlider";
import SettingsTabs from "@/components/SinglePagesComponents/tab";
import GridComponent from "@/components/SinglePagesComponents/grid";
import AboutHouse from "@/components/SinglePagesComponents/aboutHouse";
import AccommodationFacilities from "@/components/SinglePagesComponents/facilities";
import UserComments from "@/components/HomeContainer/UserComments";

export default function SingleReserve() {
  const tabs = [
    { name: "درباره ی ملک", value: "about", content: <AboutHouse /> },
    {
      name: "امکانات اقامتگاه",
      value: "facility",
      content: <AccommodationFacilities />,
    },
    { name: "نظرات کاربران", value: "comments", content: <UserComments /> },
  ];

  return (
    <div className="pt-28">
      <div className="flex gap-4 pb-10 px-5">
        <GridComponent />
        <ImageSlider />
      </div>

      <div className="flex gap-4 pb-10 px-5">
        <ReserveBox />
        <SettingsTabs tabs={tabs} defaultTab="about" />
      </div>

      <CardList />
    </div>
  );
}
