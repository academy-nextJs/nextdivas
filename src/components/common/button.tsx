import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ButtonComponentProps {
  text: string;
  icon?: StaticImageData | string;
  style: string;
  linke?: string;
}

export default function ButtonComponent({
  text,
  icon,
  style,
  linke,
}: ButtonComponentProps) {
  return (
    <Link
      href={`${linke}`}
      className={` ${style} py-1 rounded-xl flex gap-2 hover:opacity-80 min-w-fit px-3
       hover:cursor-pointer transition duration-300 justify-center
       max-2xl:text-sm max-2xl:px-1 max-2xl:pt-3 max-xl:pt-1.5
       `}
    >
      {text}
      {icon && (
        <Image src={icon} alt="icon" className="my-2 max-xl:px-0 max-xl:my-1" />
      )}
    </Link>
  );
}
