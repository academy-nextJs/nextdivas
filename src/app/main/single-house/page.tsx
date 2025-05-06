import CardComponent from "@/components/common/CardComponent";
import CardList from "@/components/common/cardList";
import ContactInfo from "@/components/SinglePagesComponents/ContactInfo";
import SettingsTabs from "@/components/SinglePagesComponents/tab";
import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function SingleHouse() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16  sm:py-24 sm:px-6  ">
        {/* تصاویر و ContactInfo در یک ردیف */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-4 px-0">
          {/* Contact Info */}
          <div className="lg:col-span-1 ">
            <ContactInfo />
          </div>

          {/* Photos */}
          <div className="lg:col-span-4 space-y-4 pr-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
              {/* عکس بزرگ سمت راست */}
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:row-span-2">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
              </div>

              {/* عکس دوم */}
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:relative sm:h-full">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full group-hover:opacity-75 sm:absolute sm:inset-0"
                />
                <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
                <div className="flex items-end p-4 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Accessories
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-white">Shop now</p>
                  </div>
                </div>
              </div>

              {/* عکس سوم */}
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:relative sm:h-full">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full group-hover:opacity-75 sm:absolute sm:inset-0"
                />
                <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
                <div className="flex items-end p-4 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Workspace
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-white">Shop now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          {/* لایک و اشتراک‌گذاری */}
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-red-500 transition">
              ❤️ <span className="ml-1">12</span>
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition">
              🔗 اشتراک‌گذاری
            </button>
          </div>

          {/* تگ‌ها */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
              #فوری
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
              #آپارتمانی
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
              #فروش
            </span>
          </div>
        </div>
        <div className="text-right text-white leading-20">
          <h2>فروش آپارتمان 262 متر در شهرک غرب</h2>
        </div>
        <div className="flex pt-3.5 flex-wrap gap-2 justify-end w-full">
          {/* آدرس */}
          <div className="flex items-center gap-1">
            <HiOutlineLocationMarker className="text-lg text-green-500" />
            <span className="text-white">گیلان، رشت، جاده دریا</span>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>

      <SettingsTabs />
      <div className="flex justify-between items-center bg-[#393939] px-5 mx-5 rounded-lg">
        <p className="text-white leading-10">مشاهده همه</p>
        <p className="text-white leading-10">آگهی های مشابه</p>
      </div>

      <CardList />
    </div>
  );
}

export default SingleHouse;
