"use client";

import React, { useEffect, useState } from "react";
import CardComponent from "@/components/common/CardComponent";
import CardList from "@/components/common/cardList";
import UserComments from "@/components/HomeContainer/UserComments";
import AboutHouse from "@/components/SinglePagesComponents/aboutHouse";
import ContactInfo from "@/components/SinglePagesComponents/ContactInfo";
import AccommodationFacilities from "@/components/SinglePagesComponents/facilities";
import LocationMap from "@/components/SinglePagesComponents/location";
import LocationTabContent from "@/components/SinglePagesComponents/locationTabContent";
import SettingsTabs from "@/components/SinglePagesComponents/tab";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { getHouseById } from "@/utils/service/api/single-house/houseService";
import { commentType } from "@/types/landing.types";
import { getHouseComments } from "@/utils/service/api/commentsApi/cmmentsApi";
import { Comment } from "@/components/common/comments/Comment";

export interface type {
  comment: commentType[];
  button?: React.ReactElement;
  reply?: React.ReactElement;
}

function SingleHouse() {
  const [house, setHouse] = useState<any>(null);
  const [comments, setComments] = useState<commentType[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [errorComments, setErrorComments] = useState<string | null>(null);

  // گرفتن اطلاعات خانه
  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const data = await getHouseById("3");
        setHouse(data);
      } catch (error) {
        console.error("Error fetching house:", error);
      }
    };

    fetchHouse();
  }, []);

  // گرفتن کامنت‌ها
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoadingComments(true);
      try {
        const data = await getHouseComments({ houseId: "3" });
        setComments(data?.comments || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setErrorComments("خطا در دریافت نظرات");
      } finally {
        setIsLoadingComments(false);
      }
    };

    fetchComments();
  }, []);

  const tabs = [
    { name: "درباره ی ملک", value: "about", content: <AboutHouse /> },
    {
      name: "امکانات اقامتگاه",
      value: "facility",
      content: <AccommodationFacilities />,
    },
    {
      name: "نظرات کاربران",
      value: "comments",
      content: (
        <Comment
          comment={comments}
          loading={isLoadingComments}
          error={errorComments}
        />
      ),
    },
    {
      name: "موقعیت ملک",
      value: "location",
      content: <LocationTabContent />,
    },
  ];

  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16 sm:py-24 sm:px-6">
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
                  src={
                    house?.photos?.[0] || "https://via.placeholder.com/500x300"
                  }
                  alt="photo-1"
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
                  src={
                    house?.photos?.[1] || "https://via.placeholder.com/500x300"
                  }
                  alt="photo-2"
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
                  src={
                    house?.photos?.[2] || "https://via.placeholder.com/500x300"
                  }
                  alt="photo-3"
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

        {/* لایک، اشتراک‌گذاری و تگ‌ها */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-red-500 transition">
              ❤️ <span className="ml-1">{house?.likes || 12}</span>
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition">
              🔗 اشتراک‌گذاری
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {(house?.tags || ["فوری", "آپارتمانی", "فروش"]).map(
              (tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* عنوان و آدرس */}
        <div className="text-right text-white leading-20">
          <h2>{house?.title || "فروش آپارتمان 262 متر در شهرک غرب"}</h2>
        </div>

        <div className="flex pt-3.5 flex-wrap gap-2 justify-end w-full">
          <div className="flex items-center gap-1">
            <HiOutlineLocationMarker className="text-lg text-green-500" />
            <span className="text-white">
              {house?.address || "گیلان، رشت، جاده دریا"}
            </span>
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

      <SettingsTabs tabs={tabs} defaultTab="about" />

      <div className="flex justify-between items-center bg-[#393939] px-5 mx-5 rounded-lg">
        <p className="text-white leading-10">مشاهده همه</p>
        <p className="text-white leading-10">آگهی های مشابه</p>
      </div>

      <CardList />
    </div>
  );
}

export default SingleHouse;
