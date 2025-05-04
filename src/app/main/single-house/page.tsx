import CardComponent from "@/components/common/CardComponent";
import CardList from "@/components/common/cardList";
import ContactInfo from "@/components/SinglePagesComponents/ContactInfo";
import SettingsTabs from "@/components/SinglePagesComponents/tab";
import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function SingleHouse() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* تصاویر و ContactInfo در یک ردیف */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* بخش Contact Info - عرض 2 از 5 */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* بخش عکس‌ها - عرض 3 از 5 */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:row-span-2">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg"
                  alt=""
                  className="object-cover object-center group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        New Arrivals
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-white">Shop now</p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:relative sm:h-full">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                  alt=""
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
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
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:relative sm:h-full">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                  alt=""
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
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
        <div className="flex pt-3.5 flex-wrap gap-2 justify-end w-full">
          {/* آدرس */}
          <div className="flex items-center gap-1">
            <HiOutlineLocationMarker className="text-lg text-green-500" />
            <span>گیلان، رشت، جاده دریا</span>
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
      <CardList />
    </div>
  );
}

export default SingleHouse;
