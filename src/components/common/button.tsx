import Image, { StaticImageData } from "next/image";

interface ButtonComponentProps {
  text: string;
  icon: StaticImageData | string;
  style: string;
}

export default function ButtonComponent({
  text,
  icon,
  style,
}: ButtonComponentProps) {
  return (
    <button
      className={` ${style} font-semibold px-3 py-1 rounded-xl flex hover:opacity-80 min-w-32
         hover:cursor-pointer transition duration-300
         max-2xl:text-sm max-2xl:px-1 max-2xl:pt-3
       `}
    >
      {text}
      <Image src={icon} alt="icon" className="my-1.5 mx-2  max-xl:px-0
        
      " />
    </button>
  );
}
