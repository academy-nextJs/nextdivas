"use client";
import { useEffect, useState } from "react";

const getCurrentTime = (): string => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const Time = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(getCurrentTime()); 
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (time === null) return null; 

  return (
    <span style={{ fontSize: "20px", fontFamily: "monospace" }}>{time}</span>
  );
};

export default Time;
