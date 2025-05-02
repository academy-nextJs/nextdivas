import CardComponent from "@/components/common/CardComponent";
import LandingTitle from "@/components/common/LandingTitle";
import React from "react";

const DreamRent = () => {
  return (
    <div className="pb-20">
      <div className="absolute w-40 z-20 h-60 blur-3xl opacity-20 rounded-r-full bg-primary">
        {" "}
      </div>

      {/* Header */}
      <LandingTitle
        title="مقصد رویا ها"
        mainTitle="اجاره ویلا در محبوب ترین مقتصد این ماه"
        details="!در این جا میتوانید محبوب ترین مقصد هارا از بین انتخاب کاربران مشاهده کنید و بررسی کنید"
      />

      <div className="grid grid-cols-4 gap-6 mt-12 mx-16 z-10 max-md:grid-cols-1">
        <div className="col-span-1 cursor-pointer group">
          <CardComponent />
          <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
            <p className="text-neutral-500"> {"(56 مورد)"} </p>
            <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
          </div>
        </div>
        <div className="col-span-1 cursor-pointer group">
          <CardComponent />
          <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
            <p className="text-neutral-500"> {"(56 مورد)"} </p>
            <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
          </div>
        </div>
        <div className="col-span-1 cursor-pointer group">
          <CardComponent />
          <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
            <p className="text-neutral-500"> {"(56 مورد)"} </p>
            <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
          </div>
        </div>
        <div className="col-span-1 cursor-pointer group">
          <CardComponent />
          <div className="flex items-end gap-2 justify-end px-8 pt-2 ">
            <p className="text-neutral-500"> {"(56 مورد)"} </p>
            <h3 className="text-white"> اجاره ی ویلا در بندر انزلی</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamRent;
