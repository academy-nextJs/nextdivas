type Facility = {
  title: string;
  value: string;
};

const facilities: Facility[] = [
  { title: "سن بنا", value: "نوساز" },
  { title: "نوع نما", value: "روبه" },
  { title: "وضعیت", value: "تخلیه" },
  { title: "وضعیت ملک", value: "در دسترس" },
  { title: "اوپن", value: "سبک" },
  { title: "بالکن", value: "دارد" },
  { title: "خط تلفن", value: "دارد" },
  { title: "۳ حمام", value: "دارد" },
  { title: "شوفاژ", value: "دارد" },
  { title: "کولر", value: "دارد" },
  { title: "گاز", value: "دارد" },
  { title: "آسانسور", value: "دارد" },
  { title: "پارکینگ", value: "دارد" },
  { title: "۴ خواب", value: "دارد" },
];

export default function AccommodationFacilities() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
      {facilities.map((item, index) => (
        <div
          key={index}
          className="bg-[#1F1F1F] rounded-xl p-4 flex flex-col justify-between items-center text-center min-h-[90px] text-sm text-white shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="font-semibold">{item.title}</span>
          <span className="text-white bg-[#6F52FF] px-4 py-1.5 mt-2 rounded-lg text-xs sm:text-sm font-medium">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
