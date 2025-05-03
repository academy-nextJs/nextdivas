import { BiBuildingHouse, BiSolidRightArrow } from "react-icons/bi";
import CardComponent from "../common/CardComponent";
import { LuClock8 } from "react-icons/lu";
import ButtonComponent from "../common/button";
import vectors from "../../../public/icons/whiteflash.png";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Offer = () => {
  return (
    <div className="relative max-xl:bg-[#2D2D2D] grid justify-items-center py-6 mx-4 pb-28">
      {/* background ui */}
      <div
        className="absolute right-0 w-40 h-60 blur-3xl opacity-20 rounded-l-full
        bg-secondary 
      "
      >
        {" "}
      </div>

      <svg
        height="744"
        viewBox="0 0 1376 744"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-4 w-[98%] -z-10 max-xl:hidden"
      >
        <path
          d="M1118.91 76.3207C1132.93 76.3207 1145.93 68.9783 1153.16 56.969L1175.84 19.3517C1183.07 7.34234 1196.07 0 1210.09 0H1336C1358.09 0 1376 17.9086 1376 40V704C1376 726.091 1358.09 744 1336 744H40C17.9086 744 0 726.091 0 704L0 116.321C0 94.2293 17.9086 76.3207 40 76.3207H1118.91Z"
          fill="#2D2D2D"
        />
      </svg>

      <div className="max-2xl:mt-9">
        {/* title-part */}
        <div className="grid justify-items-end z-10 gap-4 text-white">
          <div className=" bg-danger py-2 px-4 flex gap-2 items-center rounded-2xl ">
            <LuClock8 className=" text-md" />
            <p className="pb-1">ساعت الان</p>
          </div>

          <div className="text-primary flex gap-1 items-center justify-center ">
            <BiSolidRightArrow className="text-[9px] opacity-50" />
            <BiSolidRightArrow className="text-[11px] opacity-80" />
            <BiSolidRightArrow className="text-sm" />
            <h1 className="mx-2"> بهترین تخفیف</h1>
          </div>
          <div className="grid grid-cols-2 w-full">
            <ButtonComponent
              icon={vectors}
              text="مشاهده همه"
              style="border-2 border-white bg-none flex-row-reverse pb-2 hover:border-primary hover:bg-primary/20 justify-self-start"
            />
            <h1 className=" font-bold text-2xl max-sm:text-lg justify-self-end">
              پیشنهاد ویژه دلتا
            </h1>
          </div>
        </div>

        {/* card-part */}
        <div className="grid grid-cols-4 gap-5 mt-12 z-10 max-md:grid-cols-1">
          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="mx-7 grid gap-2 ">
              <div className="flex flex-row-reverse justify-between gap-2 max-xl:flex-col">
                <h2 className="font-bold text-xl max-2xl:text-lg max-xl:text-center">
                  {" "}
                  آپارتمان لوکس زعفورانیه
                </h2>
                <p className="bg-danger pt-1 pb-2 px-3 rounded-xl max-xl:text-center">
                  {" "}
                  15%{" "}
                </p>
              </div>

              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                location
                <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                detail
                <BiBuildingHouse className="text-lg mt-1" />
              </div>
              <div className="bg-[#393939] transition-all duration-500 group-hover:bg-primary group-hover:text-black px-3 py-1 rounded-lg text-center">
                {" "}
                ت8000 | 5000ت / هرشب
              </div>
            </div>
          </div>

          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="mx-7 grid gap-2">
              <div className="flex flex-row-reverse justify-between gap-2 max-xl:flex-col">
                <h2 className="font-bold text-xl max-2xl:text-lg max-xl:text-center">
                  {" "}
                  آپارتمان لوکس زعفورانیه
                </h2>
                <p className="bg-danger pt-1 pb-2 px-3 rounded-xl max-xl:text-center">
                  {" "}
                  15%{" "}
                </p>
              </div>

              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                location
                <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                detail
                <BiBuildingHouse className="text-lg mt-1" />
              </div>
              <div className="bg-[#393939] transition-all duration-500 group-hover:bg-primary group-hover:text-black px-3 py-1 rounded-lg text-center">
                {" "}
                ت8000 | 5000ت / هرشب
              </div>
            </div>
          </div>

          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="mx-7 grid gap-2">
              <div className="flex flex-row-reverse justify-between gap-2 max-xl:flex-col">
                <h2 className="font-bold text-xl max-2xl:text-lg max-xl:text-center">
                  {" "}
                  آپارتمان لوکس زعفورانیه
                </h2>
                <p className="bg-danger pt-1 pb-2 px-3 rounded-xl max-xl:text-center">
                  {" "}
                  15%{" "}
                </p>
              </div>

              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                location
                <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                detail
                <BiBuildingHouse className="text-lg mt-1" />
              </div>
              <div className="bg-[#393939] transition-all duration-500 group-hover:bg-primary group-hover:text-black px-3 py-1 rounded-lg text-center">
                {" "}
                ت8000 | 5000ت / هرشب
              </div>
            </div>
          </div>

          <div className="group text-white cursor-pointer">
            <CardComponent />
            <div className="mx-7 grid gap-2">
              <div className="flex flex-row-reverse justify-between gap-2 max-xl:flex-col">
                <h2 className="font-bold text-xl max-2xl:text-lg max-xl:text-center">
                  {" "}
                  آپارتمان لوکس زعفورانیه
                </h2>
                <p className="bg-danger pt-1 pb-2 px-3 rounded-xl max-xl:text-center">
                  {" "}
                  15%{" "}
                </p>
              </div>

              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                location
                <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div className="flex gap-2 justify-end opacity-55">
                {" "}
                detail
                <BiBuildingHouse className="text-lg mt-1" />
              </div>
              <div className="bg-[#393939] transition-all duration-500 group-hover:bg-primary group-hover:text-black px-3 py-1 rounded-lg text-center">
                {" "}
                ت8000 | 5000ت / هرشب
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
