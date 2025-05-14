// components/CardWrapper.tsx
import React from "react";
import Card from "./Card";

interface CardWrapperProps {
  cards: { title: string; location: string; price: string; status: string; isFavorite?: boolean ; star? : number}[];
}

const CardWrapper: React.FC<CardWrapperProps> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-4">
      {cards? cards.map((card, index) => (
        <Card key={index} {...card} />
      )): " دیتا ای موجود نیست"}
    </div>
  );
};

export default CardWrapper;