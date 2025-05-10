import React from "react";
import Photo1 from "../../app/assets/image/Rectangle1.png";
import Photo2 from "../../app/assets/image/Rectangle2.png";

function AboutHouse() {
  return (
    <div className="px-4 py-8 md:px-12 lg:px-24">
      <Section />
      <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-4 my-8">
        <img
          src={Photo1.src}
          alt="عکس اول"
          className="w-full sm:w-1/2 rounded-lg object-cover"
        />
        <img
          src={Photo2.src}
          alt="عکس دوم"
          className="w-full sm:w-1/2 rounded-lg object-cover"
        />
      </div>
      <Section />
    </div>
  );
}

function Section() {
  return (
    <div className="mb-6">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
        بهترین سبک طراحی وبسایت در سال 2024 چیست ؟
      </h2>
      <p className="text-white leading-7 text-sm md:text-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در ست... لورم
        ایپسوم متن ساختگی با تولید سادگی نامف... لورم ایپسوم متن ساختگی با تولید
        سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون
        بلکه روزنامه و مجله ست... لورم ایپسوم متن ساختگی با تولید سادگی نامف...
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت...
      </p>
    </div>
  );
}

export default AboutHouse;
