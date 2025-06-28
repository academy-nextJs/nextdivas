"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSpeechRecognition } from "react-speech-kit";
import { BsMic } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const SpeechBot: React.FC = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const [micAccessError, setMicAccessError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRoute, setNewRoute] = useState("");
  const [keyword, setKeyword] = useState("");
  const [customRoutes, setCustomRoutes] = useState<
    { keyword: string; route: string }[]
  >([]);

  useEffect(() => {
    navigator.permissions
      .query({ name: "microphone" as PermissionName })
      .then((result) => {
        if (result.state === "denied") {
          setMicAccessError(
            "دسترسی به میکروفون مسدود شده است. لطفاً تنظیمات مرورگر را بررسی کنید."
          );
        } else if (result.state === "prompt") {
          console.log("مرورگر در انتظار اجازه دسترسی به میکروفون است.");
        } else if (result.state === "granted") {
          console.log("دسترسی به میکروفون مجاز است.");
        }
      })
      .catch((error) => {
        setMicAccessError("خطا در بررسی دسترسی به میکروفون: " + error.message);
      });
  }, []);

  useEffect(() => {
    const storedRoutes = JSON.parse(
      localStorage.getItem("customRoutes") || "[]"
    );
    setCustomRoutes(storedRoutes);
  }, []);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setText(result);
      const lowerResult = result.toLowerCase();

      const matchedRoute = customRoutes.find((r) =>
        lowerResult.includes(r.keyword)
      );
      if (matchedRoute) {
        router.push(matchedRoute.route);
        return;
      }

      if (lowerResult.includes("home")) router.push("/");
      if (lowerResult.includes("about page")) router.push("/about");
      if (lowerResult.includes("sign in") || lowerResult.includes("ورود"))
        router.push("/login");
      if (lowerResult.includes("پنل") || lowerResult.includes("dashboard"))
        router.push("/dashboard");
      if (lowerResult.includes("contact") || lowerResult.includes("تماس با ما"))
        router.push("/contact-us");
      if (
        lowerResult.includes("house reserve") ||
        lowerResult.includes("رزرو خانه")
      )
        router.push("/house-reserve");
      if (
        lowerResult.includes("mortgage") ||
        lowerResult.includes("رهن و اجاره")
      )
        router.push("/mortgageAndHouseRent");
      if (lowerResult.includes("reserve house") || lowerResult.includes("رزرو"))
        router.push("/reserveHouse");
      if (
        lowerResult.includes("single house") ||
        lowerResult.includes("خانه تک")
      )
        router.push("/single-house");
      if (
        lowerResult.includes("single reserve") ||
        lowerResult.includes("رزرو تک")
      )
        router.push("/single-reserve");
      if (lowerResult.includes("blue") || lowerResult.includes("آبی")) {
        // Handle color change if needed
      }
    },
    onError: (error) => {
      console.error("خطا در تشخیص گفتار:", error);
      setMicAccessError("خطا در دسترسی به میکروفون: " + error.message);
    },
  });

  const handleAddRoute = () => {
    let formattedRoute = newRoute;
    if (newRoute && !newRoute.startsWith("/")) {
      formattedRoute = "/" + newRoute;
    }
    if (formattedRoute && keyword) {
      const newRouteObj = {
        keyword: keyword.toLowerCase(),
        route: formattedRoute,
      };
      const existingRoutes = JSON.parse(
        localStorage.getItem("customRoutes") || "[]"
      );
      if (!existingRoutes.some((r) => r.keyword === newRouteObj.keyword)) {
        existingRoutes.push(newRouteObj);
        localStorage.setItem("customRoutes", JSON.stringify(existingRoutes));
        setCustomRoutes(existingRoutes);
      }
      setNewRoute("");
      setKeyword("");
      setIsModalOpen(false);
    } else {
      alert("لطفاً هر دو فیلد لینک و کلمه کلیدی را پر کنید.");
    }
  };

  return (
    <>
      <button
        className="w-[55px] h-[55px] rounded-full fixed z-[99999] bottom-8 right-10"
        style={{ backgroundColor: "var(--color-primary)" }}
        onClick={listen}
      >
        <div
          onClick={() => setOpen(!open)}
          className="rounded-full border flex items-center justify-center w-[55px] h-[55px] fixed bottom-8 right-10"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <BsMic className="text-white w-[25px] h-[25px]" />
        </div>
      </button>

      <button
        className="w-[30px] h-[30px] rounded-full fixed z-[99999] bottom-8 right-20 bg-blue-500 text-white flex items-center justify-center"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>

      <div
        className={`border z-[999] w-[350px] p-4 rounded-[30px] transition-all fixed bottom-[85px] right-16 h-[150px] ${
          open ? "hidden" : ""
        }`}
        style={{ backgroundColor: "var(--color-gray)" }}
      >
        {micAccessError && (
          <p className="text-sm text-red-500 mt-2 ml-2">{micAccessError}</p>
        )}
        {listening && !micAccessError && (
          <div className="flex justify-center items-center space-x-1 mt-2">
            <div
              className="w-2 h-8 animate-[equalizer_0.5s_ease-in-out_infinite_alternate]"
              style={{ backgroundColor: "var(--color-secondary)" }}
            ></div>
            <div
              className="w-2 h-6 animate-[equalizer_0.5s_ease-in-out_infinite_alternate_0.2s]"
              style={{ backgroundColor: "var(--color-secondary)" }}
            ></div>
            <div
              className="w-2 h-10 animate-[equalizer_0.5s_ease-in-out_infinite_alternate_0.4s]"
              style={{ backgroundColor: "var(--color-secondary)" }}
            ></div>
          </div>
        )}
        <p className="text-md mt-2 w-[130px] flex absolute top-28 right-[60%] ml-2 line-clamp-3">
          <p className="text-white">
            {listening && !micAccessError
              ? "در حال گوش دادن..."
              : "لطفاً صحبت کنید"}
          </p>
          {/* {text} */}
        </p>
        <button
          className="border flex justify-center items-center rounded-full absolute top-28 left-[70%] w-20 h-7"
          style={{ backgroundColor: "var(--color-danger)", color: "white" }}
          onClick={stop}
        >
          <div onClick={() => setOpen(true)}>توقف</div>
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-[350px]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2 className="text-lg font-bold mb-4">ایجاد روت صوتی جدید</h2>
              <input
                type="text"
                value={newRoute}
                onChange={(e) => setNewRoute(e.target.value)}
                placeholder="لینک (مثال: /new-route)"
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="کلمه کلیدی (مثال: home)"
                className="w-full p-2 mb-4 border rounded"
              />
              <div className="flex justify-end">
                <button
                  className="mr-2 px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  لغو
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleAddRoute}
                >
                  ثبت
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes equalizer {
          0% {
            height: 10px;
          }
          100% {
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default SpeechBot;
