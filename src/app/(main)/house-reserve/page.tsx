"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import SearchIcon from "../../../../public/icons/search.png";
import FilterIcon from "../../../../public/icons/bars-filter (1) 1.png";
import LocationIcon from "../../../../public/icons/marker 1.png";
import CardWrapper from "@/components/house-reserve/CardWrapper";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getHouseReserveWithFilters } from "@/utils/service/api/HouseReserve";

// وارد کردن کامپوننت‌های react-leaflet به صورت دینامیک
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface Filters {
  search: string;
  sortBy: string;
  location: string;
  minPrice: string;
  maxPrice: string;
  rating: string;
}

interface CardData {
  title: string;
  location: string;
  price: string;
  status: string;
  isFavorite: boolean;
  star: string;
  coordinates?: [number, number]; // Added coordinates
}

interface HouseReserveProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const HouseReserve: React.FC<HouseReserveProps> = ({ searchParams }) => {
  const router = useRouter();

  const initialFilters: Filters = {
    search: searchParams.search || "",
    sortBy: searchParams.sortBy || "",
    location: searchParams.location || "",
    minPrice: searchParams.minPrice || "",
    maxPrice: searchParams.maxPrice || "",
    rating: searchParams.rating || "",
  };

  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const cards: CardData[] = [
    { title: "هتل پارسیان", location: "تهران", price: "۱,۵۰۰,۰۰۰ ت", status: "۴,۰۰۰,۰۰۰", isFavorite: false, star: "4", coordinates: [35.6892, 51.389] },
    { title: "ویلا ساحلی", location: "گیلان", price: "۲,۰۰۰,۰۰۰ ت", status: "۵,۰۰۰,۰۰۰", isFavorite: true, star: "4.8", coordinates: [37.2809, 49.5832] },
    { title: "آپارتمان مرکز شهر", location: "مشهد", price: "۱,۲۰۰,۰۰۰ ت", status: "۳,۰۰۰,۰۰۰", isFavorite: false, star: "4.9", coordinates: [36.297, 59.6062] },
    { title: "هتل سنتی", location: "اصفهان", price: "۱,۸۰۰,۰۰۰ ت", status: "۴,۰۰۰,۰۰۰", isFavorite: true, star: "4.2", coordinates: [32.6546, 51.668] },
  ];
  const [advertisementCount, setAdvertisementCount] = useState<number>(cards.length);
  const [filteredCards, setFilteredCards] = useState<CardData[]>(cards);
  const [mapCards, setMapCards] = useState<CardData[]>([]);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  // تنظیم آیکن‌های Leaflet فقط در کلاینت
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }
  }, []);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      const data = await getHouseReserveWithFilters(
        filters.search,
        filters.sortBy,
        filters.location,
        filters.minPrice,
        filters.maxPrice,
        filters.rating
      );
      setFilteredCards(data || cards);
      setMapCards(data || []);
      setAdvertisementCount((data || cards).length);
      setLoading(false);
    };
    fetchHouses();
  }, [filters]);

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    router.push(`?${params.toString()}`, { scroll: false });
  }, [filters, router]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleMarkerClick = (city: string) => {
    const filtered = (mapCards.length > 0 ? mapCards : cards).filter((card) => card.location === city);
    setFilteredCards(filtered);
    setFilters((prev) => ({ ...prev, location: city }));
  };

  const shareToTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`;
    window.open(telegramUrl, "_blank");
  };
  const shareToWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
    window.open(whatsappUrl, "_blank");
  };
  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, "_blank");
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("لینک کپی شد!");
    });
  };

  return (
    <div className="relative" dir="rtl">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      )}

      <form className="mt-20 space-y-6">
        <div className="md:h-auto h-auto min-h-screen bg-[#232323] text-white flex items-start justify-center">
          <div className="w-full max-w-[95.5%] h-full flex flex-wrap content-start">
            {/* بخش فیلترها با انیمیشن */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              dir="ltr"
              className="w-full mt-6 h-auto bg-[#303030] flex flex-wrap md:flex-nowrap rounded-3xl p-3 gap-2"
            >
              <div className="w-full md:w-[15%] h-auto flex justify-center items-center">
                <div className="w-[170px] sm:w-[150px] rounded-2xl h-[40px] border border-white flex items-center justify-center gap-2">
                  <p>{advertisementCount}</p> <span>: تعداد آگهی</span>
                </div>
              </div>
              <div className="w-full md:w-[85%] h-auto flex flex-wrap md:flex-nowrap justify-end items-center gap-2">
                <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-2.5 items-center w-full sm:w-[400px] md:w-[620px] h-[40px]">
                  <Image src={SearchIcon} alt="SearchIcon" width={16} height={16} />
                  <span className="text-[#AAAAAA]">|</span>
                  <input
                    type="text"
                    name="search"
                    placeholder=".....نام هتل مورد نظر"
                    value={filters.search}
                    onChange={handleFilterChange}
                    className="peer outline-none block w-[85%] h-full px-3 text-sm text-right shadow-sm bg-transparent"
                  />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : جستجو
                  </label>
                </div>

                <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-1 items-center w-[180px] sm:w-[200px] h-[40px]">
                  <select
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={handleFilterChange}
                    className="peer block w-[85%] outline-none h-full px-3 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none"
                  >
                    <option value="" disabled hidden>
                      انتخاب کنید...
                    </option>
                    <option value="price-asc" className="text-right">قیمت (صعودی)</option>
                    <option value="price-desc" className="text-right">قیمت (نزولی)</option>
                    <option value="date" className="text-right">تاریخ</option>
                  </select>
                  <Image className="mt-1" src={FilterIcon} alt="FilterIcon" width={24} height={24} />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : مرتب سازی بر اساس
                  </label>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-1 items-center w-[180px] sm:w-[200px] h-[40px]">
                  <select
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="peer block w-[85%] outline-none h-full px-3 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none"
                  >
                    <option value="" disabled hidden>
                      انتخاب کنید...
                    </option>
                    <option value="گیلان" className="text-right">گیلان</option>
                    <option value="تهران" className="text-right">تهران</option>
                    <option value="مشهد" className="text-right">مشهد</option>
                    <option value="اصفهان" className="text-right">اصفهان</option>
                  </select>
                  <Image className="mt-1" src={LocationIcon} alt="LocationIcon" width={24} height={24} />
                  <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                    : محل مورد نظر
                  </label>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-full rounded-[40px] mt-4 bg-[#303030] h-auto min-h-[600px] p-3 flex flex-col md:flex-row items-start">
              <div className="h-full w-full md:w-1/2 p-3 flex flex-wrap">
                <div className="w-full gap-2 h-auto flex flex-wrap md:flex-nowrap items-center justify-center p-3">
                  <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-2.5 items-center w-[180px] sm:w-[200px] h-[40px]">
                    <input
                      type="text"
                      name="minPrice"
                      placeholder="حداقل قیمت"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      className="peer outline-none block w-[85%] h-full px-3 text-sm text-right shadow-sm bg-transparent"
                    />
                    <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                      : حداقل قیمت
                    </label>
                  </div>
                  <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-2.5 items-center w-[180px] sm:w-[200px] h-[40px]">
                    <input
                      type="text"
                      name="maxPrice"
                      placeholder="حداکثر قیمت"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      className="peer outline-none block w-[85%] h-full px-3 text-sm text-right shadow-sm bg-transparent"
                    />
                    <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                      : حداکثر قیمت
                    </label>
                  </div>
                  <div className="relative rounded-2xl border text-white border-gray-400 flex justify-center gap-1 items-center w-[180px] sm:w-[200px] h-[40px]">
                    <select
                      name="rating"
                      value={filters.rating}
                      onChange={handleFilterChange}
                      className="peer block w-[85%] outline-none h-full px-3 text-sm text-right shadow-sm bg-transparent text-gray-400 appearance-none"
                    >
                      <option value="" disabled hidden>
                        انتخاب کنید...
                      </option>
                      <option value="1" className="text-right">۱ ستاره</option>
                      <option value="2" className="text-right">۲ ستاره</option>
                      <option value="3" className="text-right">۳ ستاره</option>
                      <option value="4" className="text-right">۴ ستاره</option>
                      <option value="5" className="text-right">۵ ستاره</option>
                    </select>
                    <Image className="mt-1" src={FilterIcon} alt="FilterIcon" width={16} height={16} />
                    <label className="absolute right-3 -top-2.5 bg-[#303030] px-1 text-xs text-white">
                      امکانات هتل :
                    </label>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsShareModalOpen(true)}
                    className="bg-blue-600 text-white w-[120px] h-[40px] px-4 py-2 rounded-lg text-sm"
                  >
                    اشتراک‌گذاری
                  </motion.button>
                </div>
                <div className="w-full h-auto min-h-[400px] overflow-auto mt-4 border-t">
                  <CardWrapper cards={filteredCards} />
                </div>
              </div>
              <div className="w-full md:w-1/2 h-[300px] md:h-full p-3 flex justify-center overflow-hidden rounded-2xl relative">
                {typeof window !== "undefined" && (
                  <MapContainer
                    center={[35.6892, 51.389]} // Default center (Tehran), can be dynamic if needed
                    zoom={6}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "1rem",
                    }}
                    className="w-full h-[300px] z-10 sm:h-[400px] md:h-[500px]"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {mapCards
                      .filter((card) => card.coordinates)
                      .map((card) => (
                        <Marker
                          key={card.title}
                          position={card.coordinates!}
                          eventHandlers={{
                            click: () => handleMarkerClick(card.location),
                          }}
                        >
                          <Popup>{card.location}</Popup>
                        </Marker>
                      ))}
                  </MapContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* مدال اشتراک‌گذاری */}
      <AnimatePresence>
        {isShareModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-4 sm:p-6 w-[90%] sm:w-80 text-center"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-black">اشتراک‌گذاری لینک</h3>
              <div className="bg-gray-100 p-2 rounded mb-4 text-xs sm:text-sm text-gray-700 break-all">{currentUrl}</div>
              <div className="flex justify-center gap-4 mb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={shareToTelegram}
                  className="text-blue-500"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.69 1-1.25.98-.82-.02-1.45-.55-2.25-.99-1.27-.7-1.99-1.14-3.22-1.83-.32-.19-.12-.72.22-.57.86.38 1.94.88 2.58 1.07.15.05.3.09.45.09.38 0 .7-.22.82-.58.34-.96.99-3.3 1.21-4.24.05-.2.01-.45-.18-.55-.15-.08-.37-.04-.52.06-.84.55-2.29 1.47-3.46 2.22-.29.18-.6.27-.92.27-.5 0-.99-.22-1.32-.6-.38-.44-.61-1.03-.65-1.65-.06-.96.37-1.81.92-2.27 1.13-.95 2.79-1.46 4.06-1.46.38 0 .75.04 1.11.12.92.2 1.55.98 1.55 1.92z" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={shareToWhatsApp}
                  className="text-green-500"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.67 1.43 5.21L2 22l4.92-1.29C8.29 21.48 10.09 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.61 13.61c-.24.67-.87 1.07-1.54 1.29-.45.15-1.03.18-1.67-.05-.67-.27-1.51-.73-2.41-1.54-.9-.81-1.65-1.77-2.2-2.88-.55-1.11-.73-2.31-.43-3.36.15-.53.45-.99.92-1.31.47-.32.98-.39 1.46-.24.47.15.82.53.99.83.17.3.31.66.37 1.03.06.37-.01.75-.19 1.07-.18.32-.38.61-.57.89-.19.28-.38.56-.34.91.04.35.19.69.41.96.22.27.49.49.81.72.32.23.68.43 1.07.56.39.13.81.18 1.22.07.41-.11.78-.34 1.06-.63.28-.29.49-.65.62-1.05.13-.4.16-.82.07-1.22-.09-.4-.31-.76-.63-.99z" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={shareToTwitter}
                  className="text-blue-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.41 7.09c-.01.18-.01.35-.02.53-.01 1.67-.47 3.24-1.37 4.61-.9 1.37-2.15 2.45-3.65 3.16-1.5.71-3.19.94-4.89.67-1.93-.31-3.67-1.14-5.03-2.36.37.04.74.06 1.11.06 1.09 0 2.16-.29 3.07-.81-.51-.01-1.01-.21-1.41-.57-.4-.36-.68-.85-.79-1.38.26.04.51.06.77.06.37 0 .74-.05 1.1-.14-.52-.1-1-.35-1.37-.72-.37-.37-.64-.85-.76-1.38.13.02.26.03.39.03.55 0 1.06-.14 1.5-.39-.58-.12-1.08-.42-1.45-.86-.37-.44-.57-.97-.57-1.54v-.03c.34.19.72.32 1.11.34-.33-.22-.60-.52-.78-.88-.18-.36-.27-.76-.27-1.17 0-.5.14-.98.39-1.39 1.22 1.5 3.03 2.47 5.03 2.57-.04-.18-.06-.36-.06-.55 0-.67.27-1.27.71-1.72.44-.45 1.03-.67 1.71-.67.82 0 1.52.33 2.02.91.63-.12 1.23-.35 1.78-.66-.21.65-.66 1.19-1.24 1.54.57-.07 1.12-.23 1.63-.47-.38.57-.87 1.06-1.41 1.44z" />
                  </svg>
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyUrl}
                className="bg-gray-200 text-black px-4 py-2 rounded-lg text-sm mr-2"
              >
                کپی لینک
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsShareModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
              >
                بستن
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HouseReserve;