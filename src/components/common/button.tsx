import Image from "next/image";

interface ButtonComponentProps {
  text: string;
  icon: string;
  style: string;
}

export default function ButtonComponent({
  text,
  icon,
  style,
}: ButtonComponentProps) {
  return (
    <button
      className={` ${style} font-semibold px-3 py-2  rounded-xl flex hover:opacity-80 min-w-32
         hover:cursor-pointer transition duration-300
         max-2xl:text-sm max-2xl:px-1 max-2xl:pt-3
       `}
    >
      {text}
      <Image src={icon} alt="icon" className="w-5 h-5 my-1 mx-2  max-xl:px-0
        
      " />
    </button>
  );
}
