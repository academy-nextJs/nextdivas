import React from "react";
import LandingTitle from "../common/LandingTitle";
import { FaStar } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const UserComments = () => {
  return (
    <div className="my-20 grid ">
      <LandingTitle
        title="نظر کاربران"
        mainTitle="رضایت شما اعتبار و ارزش دلتا را می سازد !"
        details="تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد ."
      />

      <div className="grid grid-cols-2 justify-self-center my-10 p-20 max-xl:gap-2">
        <div className="relative grid justify-items-center col-span-1 max-xl:bg-[#393939] rounded-2xl">
          <svg
            height="309"
            viewBox="0 0 698 339"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[100%]"
          >
            <path
              d="M554.978 27.4183C562.544 27.4183 569.668 23.8499 574.199 17.7897L580.301 9.62861C584.832 3.56845 591.956 0 599.522 0L654 0C667.255 0 678 10.7452 678 24V285C678 298.255 667.255 309 654 309H24C10.7452 309 0 298.255 0 285L0 51.4183C0 38.1635 10.7452 27.4183 24 27.4183L554.978 27.4183Z"
              fill="#393939"
            />
          </svg>

          <div className="absolute top-4  right-5 text-white grid">
            <div className="shadow-md shadow-amber-50/20 flex z-20 px-3 py-1 mx-3 h-9 justify-self-end rounded-xl bg-white text-black transition-all duration-500 group-hover:text-white group-hover:bg-[#2D2D2D] ">
              {" "}
              <FaStar className="mt-1 mr-2" /> 4.5{" "}
            </div>
            <p className="text-right mx-3 my-5 ">
              ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربرد.... “
            </p>
            <div className="p-2 rounded-xl bg-neutral-500 m-3 flex justify-end gap-4 text-sm font-semibold">
              <div>
                <p className="mb-2">محمد رضا ساداتی</p>
                <p className="flex justify-end opacity-65">
                  تاریخ
                  <LuCalendarDays className="m-1" />
                </p>
              </div>
              <div className="w-14 h-14 rounded-lg bg-neutral-300">{""}</div>
            </div>
          </div>
        </div>

        <div className="relative grid justify-items-center col-span-1 max-xl:bg-[#393939] rounded-2xl">
          <svg
            height="309"
            viewBox="0 0 698 339"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[100%]"
          >
            <path
              d="M554.978 27.4183C562.544 27.4183 569.668 23.8499 574.199 17.7897L580.301 9.62861C584.832 3.56845 591.956 0 599.522 0L654 0C667.255 0 678 10.7452 678 24V285C678 298.255 667.255 309 654 309H24C10.7452 309 0 298.255 0 285L0 51.4183C0 38.1635 10.7452 27.4183 24 27.4183L554.978 27.4183Z"
              fill="#393939"
            />
          </svg>

          <div className="absolute top-4  right-5 text-white grid">
            <div className="shadow-md shadow-amber-50/20 flex z-20 px-3 py-1 mx-3 h-9 justify-self-end rounded-xl bg-white text-black transition-all duration-500 group-hover:text-white group-hover:bg-[#2D2D2D] ">
              {" "}
              <FaStar className="mt-1 mr-2" /> 4.5{" "}
            </div>
            <p className="text-right mx-3 my-5 ">
              ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربرد.... “
            </p>
            <div className="p-2 rounded-xl bg-neutral-500 m-3 flex justify-end gap-4 text-sm font-semibold">
              <div>
                <p className="mb-2">محمد رضا ساداتی</p>
                <p className="flex justify-end opacity-65">
                  تاریخ
                  <LuCalendarDays className="m-1" />
                </p>
              </div>
              <div className="w-14 h-14 rounded-lg bg-neutral-300">{""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
