import React, { ReactNode } from "react";

interface ButtonComponentProps {
  text: string;
  icon?: ReactNode ;
  style: string;
}

export default function SubmitButton({
  text,
  icon,
  style,
}: ButtonComponentProps) {
  return (
    <button
      type="submit"
      className={` ${style}  rounded-xl flex gap-2 hover:opacity-80 min-w-fit 
       hover:cursor-pointer transition duration-300 justify-center
       max-2xl:text-sm max-2xl:px-1 max-2xl:pt-3 max-xl:pt-1.5
       `}
    >
      {text}
      {icon}
    </button>
  );
}
