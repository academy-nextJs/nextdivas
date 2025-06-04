"use client";
import React, { useState } from "react";
import { Toggle } from "@/components/common/Toggle";
import Image from "next/image";
import myPhoto2 from "../../assets/image/login2.png";
import { FiPhoneCall } from "react-icons/fi";
import { CiLock } from "react-icons/ci";

import AAA from "../../../public/icons/AAA.png";
import vectors from "../../../public/landing/vector.png";

const LoginPicture = () => {
  const [togleButton, setTogleButton] = useState("ورود با پسورد");

  return (
    <div className="relative w-1/2">
      <Toggle
        options={[
          { value: "ورود با پسورد", label: "ورود با پسورد", icone: <CiLock className="m-1 w-4 h-4"/> },
          { value: "ورود با شماره", label: "ورود با شماره", icone: <FiPhoneCall className="m-1 w-4 h-4" />},
        ]}
        value={togleButton}
        onChange={(value) => setTogleButton(value)}
        containerClassName="flex absolute bg-[#232323] top-10 left-10 rounded-2xl transition-all w-fit p-[4px]"
        activeClassName="flex text-black bg-white m-1 h-9"
        inactiveClassName="flex text-white/60 hover:bg-white/30 m-1 h-9"
      />
      <Image
        src={myPhoto2}
        alt="عکس من"
        className="w-full border-2 border-amber-700"
      />

      <div>
        <Image
        src={AAA}
        alt="عکس من"
        className="border-2 border-amber-700"
      />
      <div>

      </div>
       <Image src={vectors} alt="vectors" />
      </div>
    </div>
  );
};

export default LoginPicture;
