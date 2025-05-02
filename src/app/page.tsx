import AboutUs from "@/components/HomeContainer/AboutUs";
import BuyIntertain from "@/components/HomeContainer/BuyIntertain";
import Category from "@/components/HomeContainer/Categories";
import Hero from "@/components/HomeContainer/Hero";
import Offer from "@/components/HomeContainer/Offer";
import Rent from "@/components/HomeContainer/Rent";
import UserComments from "@/components/HomeContainer/UserComments";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <Category />
        <Offer />
        <Rent />
        <AboutUs />
        <BuyIntertain />
        <UserComments />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>this is footer</p>
      </footer>
    </div>
  );
}
