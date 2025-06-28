"use client";

import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { handleInputChange } from "@/app/actions/forbiddenWords";
import {
  FaArrowCircleUp,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryEmpty,
  FaWifi,
} from "react-icons/fa";
import { CiWifiOff } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { chatDatabase } from "@/data/chatDatabase";
import { GoMoveToTop } from "react-icons/go";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const currentDate = new Date();
const daysOfWeek = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const date = currentDate.getDate().toLocaleString("fa-IR");
const month = currentDate.toLocaleString("fa-IR", { month: "long" });

export const ChatBot: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const hasWelcomed = useRef(false);
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!hasWelcomed.current) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "خوش آمدید به چت‌بات املاکی! چطور می‌توانم به شما کمک کنم؟",
        },
      ]);
      hasWelcomed.current = true;
    }

    const handleScrollProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const scrollProgress = (currentScroll / totalHeight) * 100;
      setProgress(scrollProgress);
      setShowScrollBtn(scrollProgress > 0);
    };

    window.addEventListener("scroll", handleScrollProgress);
    return () => {
      window.removeEventListener("scroll", handleScrollProgress);
    };
  }, []);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.trim().toLowerCase();
      setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

      const matchedResponse = chatDatabase.find((item) =>
        item.keywords.some((keyword) =>
          userMessage.includes(keyword.toLowerCase())
        )
      );
      const botResponse = matchedResponse
        ? matchedResponse.response
        : "متأسفانه پاسخ مشخصی برای این سؤالم ندارم. لطفاً سؤال دیگری بپرسید.";

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setInput("");
    } else {
      toast.error("لطفاً متن پیام را وارد کنید.");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleInputChange(value, setInput, setErrorMessage);
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed z-50 bottom-8 right-30 flex items-end gap-4">
        <button
          onClick={scrollToTop}
          className={`w-[55px] h-[55px] rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center transition-all ${
            showScrollBtn ? "opacity-100" : "opacity-0"
          }`}
        >
          <GoMoveToTop />
          {/* <Image className="w-[10px] h-2 overflow-hidden" src="/path/to/up-arrow.png" alt="Scroll to top" /> */}
        </button>
        <button
          className="w-[55px] h-[55px] rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center"
          onClick={toggleChat}
        >
          <AiOutlineMessage className="w-[25px] h-[25px]" />
        </button>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="fixed z-[999] bg-[var(--color-gray)] w-[350px] p-4 rounded-[30px] transition-all bottom-20 right-16 h-[300px] border border-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="overflow-y-auto max-h-[200px]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`my-1 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-[var(--color-danger)] text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={endOfMessagesRef} />
            </div>
            <div className="flex mt-2 justify-center gap-2">
              <input
                type="text"
                className="w-[80%] border-gray-500 text-white border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={input}
                onChange={onChange}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="پیام خود را بنویسید..."
              />
              <button
                onClick={handleSend}
                className="bg-[var(--color-primary)] text-black rounded-lg p-2 hover:bg-[#edbd45] transition"
              >
                ارسال
              </button>
            </div>
            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
            <button
              className="mt-2 text-gray-500 hover:text-gray-700 transition"
              onClick={toggleChat}
            >
              بستن
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="fixed z-50 bottom-0 left-0 h-3 bg-[#15133a] transition-all"
        style={{ width: `${progress}%` }}
      />
    </>
  );
};
