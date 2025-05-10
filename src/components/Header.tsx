"use client";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import logo from "../../public/Path 1.png";
import microphon from "../../public/icons/microphon.svg";
import log from "../../public/icons/login.svg";
import ButtonComponent from "./common/button";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuHotdog } from "react-icons/cg";

const Header = () => {
  const list = [
    { title: "تماس با ما", icon: "", link: "contact-us" },
    { title: "مقالات ما", icon: "", link: "#" },
    { title: "درباره دلتا", icon: "", link: "about-us" },
    {
      title: "رهن و اجاره",
      icon: <IoIosArrowDown className="mt-2 mr-2" />,
      link: "mortgageAndHouseRent",
    },
    {
      title: "رزرو سریع",
      icon: <IoIosArrowDown className="mt-2 mr-2" />,
      link: "#",
    },
  ];

  const [menu, setMenu] = useState(false);

  return (
    <div className="relative grid justify-items-center">
      <div
        className={`absolute z-50 top-3 bg-gray rounded-2xl grid grid-cols-2
        max-md:grid-cols-4 max-md:items-start ${
          menu === true ? "max-md:h-68" : "max-md:h-14"
        } transition-all duration-400
        max-sm:grid-cols-3 mainshadow
      `}
      >
        {/* left */}
        <div className="ml-4 max-sm:ml-1 py-1 col-span-1 max-md:col-span-3 max-sm:col-span-2 text-white grid grid-cols-2 max-md:flex max-md:gap-1">
          <Link
            href={"login"}
            className="flex max-lg:justify-self-start gap-2 max-lg:border-2 rounded-full max-lg:border-secondary max-lg:px-3.5"
          >
            <p className="pt-2 max-lg:hidden">ورود/ ثبت نام</p>
            <Image
              src={log}
              alt="log"
              className="max-lg:h-auto max-lg:w-4 max-lg:pb-1 max-sm:min-w-[8px]"
            />
          </Link>
          <ButtonComponent
            text="!فروشنده شو"
            icon={microphon}
            style="bg-secondary text-white flex justify-self-end my-1"
          />
        </div>

        {/* right */}
        <div className="col-span-1 flex flex-row-reverse  justify-start max-md:flex-col max-md:justify-center">
          {/* logo */}
          <div
            
            className="flex flex-row-reverse pl-6 max-xl:pl-0 max-md:border-none border-l-2 border-gray-500 m-2"
          >
            <Link href={"/"}>
              <Image src={logo} alt="Logo" className="w-14 h-10" />
            </Link>
            
            <CgMenuHotdog
              className="hidden max-md:block text-primary text-2xl m-2 cursor-pointer max-sm:min-w-4"
              onClick={() => setMenu(!menu)}
            />
          </div>
          {/* menu */}
          <ul
            className={`flex gap-3 text-neutral-300 
          max-lg:gap-1 ${
            menu === true ? "max-md:grid" : "max-md:hidden"
          } transition-all duration-800 max-md:justify-center 
         `}
          >
            {list.map((item, index) => (
              <li
                key={index}
                className="text-sm pt-3 px-5 max-2xl:px-2 hover:text-primary border-3 border-gray/5 hover:border-b-primary
               transition duration-500 cursor-pointer flex
               max-xl:text-xs max-md:text-md
               "
              >
                <Link href={item.link} className="flex mx-auto ">
                  {item.icon} {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
