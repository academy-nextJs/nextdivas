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
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-4">
      {facilities.map((item, index) => (
        <div
          key={index}
          className="bg-[#1F1F1F] rounded-lg p-3 flex flex-col justify-between items-center h-[80px] text-sm text-white"
        >
          <span>{item.title}</span>
          <span className="text-white bg-[#6F52FF] px-12 py-2 mt-1.5 rounded-xl font-medium">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
