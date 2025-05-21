"use client";
import React from "react";
import Card from "./Card";

// تعریف رابط برای تایپ داده‌های کارت
interface CardData {
  rate?: string | number;
  title?: string;
  address?: string;
  bathrooms?: number;
  parking?: number;
  rooms?: number;
  price?: string | number;
}

interface CardWrapperProps {
  cardsData: CardData[];
}

const CardWrapper: React.FC<CardWrapperProps> = ({ cardsData }) => {
  return (
    <>
      {cardsData.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </>
  );
};

export default CardWrapper;